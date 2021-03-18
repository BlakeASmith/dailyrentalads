/*******************************************************************************************
BrandedContent Function CLASS?
sets site ID and optionally category ID from wordpress api url and stores in localstorage 
if valid
param REQUIRED: 
    option - object containing the following properties
    {
        // REQUIRED properties
        url: wordpress api url
        website: website_name: 'UsedVictoria.com'
        // OPTIONAL properties
        sitePath: path for fetching site on wordpress api (default:sites)
        categoryPath: path for fetching category on wordpress api (default:used_categories)
        brandedContentPath: path for fetching branded content articles (default:branded_content)
        category: category_level_1 code
    }
*******************************************************************************************/

var BrandedContent = (function() {
    const hasLocalStorage = 'localStorage' in window && window.localStorage !== null; 
    const SITE_STORE_PREFIX = 'branded_site_';
    const CATEGORY_STORE_PREFIX = 'branded_category_';
    const CONTENT_STORE_PREFIX = 'branded_contents_';
    const CONTENT_STORE_VALID_FOR = 60;      // in minutes
    const MAX_ARTICLES_NUMBER = 100;
    // can be overwritten by options
    const SITE_PATH = 'sites';
    const CATEGORY_PATH = 'used_categories';
    const BRANDED_CONTENT_PATH = 'branded_contents';

    // constructors that take options
    function BrandedContent (options) {
        if (options === undefined || options.url === undefined || options.website === undefined) {
            throw('BrandedContent "options" requires "url", "website" property function');
        }
        this.options = options;
        this.options.sitePath = options.sitePath || SITE_PATH;
        this.options.categoryPath = options.categoryPath || CATEGORY_PATH;
        this.options.brandedContentPath = options.brandedContentPath || BRANDED_CONTENT_PATH;
        this.options.slug = this.options.website.replace('.', '-').toLowerCase();
    }

    BrandedContent.prototype.setSiteID = function () {
        var self = this;
        return new Promise(function(resolve, reject) {
            var url = self.options.url + self.options.sitePath;
            if (self.siteID) {
                resolve();
            } else {
                var siteKey = SITE_STORE_PREFIX + self.options.slug;
                if (hasLocalStorage) {
                    var siteStore = JSON.parse(localStorage.getItem(siteKey));
                    if (self.isStoreValid(siteStore)) {
                        self.siteID = siteStore.siteID;
                        resolve();
                        return;
                    }
                }
                $.ajax({
                    url: url,
                    data: {slug: self.options.slug, fields: "id"}, // fields does not seem to work with custom taxonomies
                    success: (data) => {
                        if(data.length == 1) {
                            self.siteID = data[0].id;
                        } else {
                            self.siteID = null;
                        }
                        if (hasLocalStorage) {
                            self.updateLocalStorage(siteKey, {siteID: self.siteID});
                        }
                        resolve();
                    },
                    error: (response) => {
                        reject(url);
                    },
                });
            }
        });
    };

    BrandedContent.prototype.setCategoryID = function (category) {
        var self = this;
        return new Promise(function(resolve, reject) {
            if (!category) {
                resolve();
            } else if (self.categoryID) {
                resolve();
            } else {
                var url = self.options.url + self.options.categoryPath;
                var categoryKey = CATEGORY_STORE_PREFIX + category;
                if (hasLocalStorage) {
                    var categoryStore = JSON.parse(localStorage.getItem(categoryKey));
                    if (self.isStoreValid(categoryStore)) {
                        self.categoryID = categoryStore.categoryID;
                        resolve();
                        return;
                    }
                }
                $.ajax({
                    url: url,
                    data: {slug: category},
                    success: (data) => {
                        if (data.length == 1) {
                            self.categoryID = data[0].id;
                        } else {
                            self.categoryID = null;
                        }
                        if (hasLocalStorage) {
                            self.updateLocalStorage(categoryKey, {categoryID: self.categoryID});
                        }
                        resolve();
                    },
                    error: (response) => {
                        reject(url);
                    }
                });
            }
        });
    };

    /**********************************************************************
    getArticleList(options)
        ajax call to return branded_content articles
        REQUIRES options object with following properties
        options: {
            // REQUIRED:
            onLoad: function to handle when data is returned
            onError: function to handle when error occurs
            // OPTIONAL:
            category: category_level_1 code (filter for)
        }
    **********************************************************************/
    BrandedContent.prototype.getArticleList = function (options) {
        if (options.onLoad === undefined) throw ('onLoad function required');
        if (options.onError === undefined) throw ('onError function required');
        var category = (this.options.category || options.category || '').trim();
        this.setSiteID().then(() => {
            return this.setCategoryID(category);
        }).then(() => {
            // url for getting articles
            var url = this.options.url + this.options.brandedContentPath;
            var params = {                                                                    // parameters for filtering 
                _embed: options.embed || true,                                              // include images
                page: 1,
                per_page: MAX_ARTICLES_NUMBER
            };
            // specific fields
            if (options.fields === undefined) {
                params.fields = 'id,title.rendered,_embedded.wp:featuredmedia,acf';
            } else if (options.fields) {
                params.fields = options.fields;
            }
    
            params[this.options.sitePath] = this.siteID;
            if (params[this.options.sitePath] === null) {
                options.onLoad([]);
                return;
            }
            
            // filter for category
            // optional parameter
            if (category) {
                params[this.options.categoryPath] = this.categoryID;
                if (params[this.options.categoryPath] === null) {
                    // if category was provided, but we do not have id, we need to return 0 result
                    options.onLoad([]);
                    return;
                }
            }
            var contentKey = CONTENT_STORE_PREFIX + this.options.slug + '_' + category;
            var store = this.options.store || options.store;
            if (hasLocalStorage && store) {
                var contentStore = JSON.parse(localStorage.getItem(contentKey));
                if (this.isStoreValid(contentStore, CONTENT_STORE_VALID_FOR)) {
                    options.onLoad(contentStore.content);
                    return;
                }
            }
            
            // api call to fetch articles based on params
            $.ajax({
                url: url,
                data: params,
                success: (data, textStatus, jqXHR) => {
                    var pages = parseInt(jqXHR.getResponseHeader('x-wp-totalpages'));
                    // array of promises for all pages
                    var requests = [Promise.resolve(data)];
                    // if there are more pages, add promises for them to the array
                    for(let i = 2; i < pages + 1; i++) {
                        var par = Object.assign({}, params);
                        par.page = i;
                        var promise = new Promise(function (resolve, reject) {
                            $.ajax({
                                url: url,
                                data: par
                            }).then(
                                function(data) {
                                    resolve(data);
                                },
                                function(jqXHR, textStatus, errorThrown) {
                                    console.log('Error on step ' + i + errorThrown);
                                    resolve([]);
                                }
                            );
                        });
                        requests.push(promise);
                    }
                    Promise.all(requests).then(responses => {
                        var dataWithImages = [];
                        // in rare scenario when an article is posted while requests were running we can get duplicate entries
                        var ids = new Set();
                        for(j = 0; j < responses.length; j++) {
                            var response = responses[j];
                            for(i = 0; i < response.length; i++) {
                                if(response[i]._embedded !== undefined && response[i]._embedded['wp:featuredmedia'][0].source_url !== undefined && !ids.has(response[i].id)) {
                                    dataWithImages.push(response[i]);
                                    ids.add(response[i].id);
                                }
                            }
                        }
                        if (options.max !== undefined) {
                            dataWithImages = dataWithImages.slice(0, options.max);
                        }
                        if (hasLocalStorage && store) {
                            this.updateLocalStorage(contentKey, {content: dataWithImages});
                        }
                        options.onLoad(dataWithImages);
                    });
                },
                error: (response) => {
                    options.onError();
                    this.onError(url);
                }
    
            });
        }).catch((error) => {
            options.onError();
            if (typeof error === 'string') {
                this.onError(error);
            } else {
                throw error;
            }
        });
    };


    /**********************************************************************
    getArticleByID(options)
        ajax call to return specified branded_content article
        REQUIRES options object with following properties
        options: {
            // REQUIRED:
            onLoad: function to handle when data is returned
            onError: function to handle when error occurs
            id: int value for article
        }
    **********************************************************************/
    BrandedContent.prototype.getArticleByID = function (options) {
        if (options.onLoad === undefined) throw ('onLoad function required');
        if (options.onError === undefined) throw ('onError function required');
        if (options.id === undefined) throw ('Article "id" is required');
        var url = this.options.url + this.options.brandedContentPath +'/' + options.id;
        $.ajax({
            url: url,
            data: {
                _embed: options.embed || true,
                fields: options.fields || ''
            },
            success: (data) => {
                options.onLoad(data);
            },
            error: (response) => {
                options.onError();
                this.onError(url);
            }
        });
    };
    
    // function to handle ajax error
    BrandedContent.prototype.onError = function(url) {
        console.log('Error with Branded Content request: ' + url);
    };
    BrandedContent.prototype.updateLocalStorage = function (key, obj) {
        obj.timestamp = new Date().getTime();
        localStorage.setItem(key, JSON.stringify(obj));
    };
    BrandedContent.prototype.isStoreValid = function (obj, minutes = 24 * 60) {
        var now = new Date().getTime();
        return obj && now - obj.timestamp < 1000 * 60 * minutes;
    };
    return BrandedContent;
}());
