/*
 * THIS FILE CONTAINS FUNCTIONS FOR ALL FUNCTIONALITY FOR USING FAVOURITES
 * (functions ending with 'm' indicate mobile function)
 */

var isMobile = ( /webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini|Android|BB10/i.test(navigator.userAgent) );
var maxFavourites = 25;
var hasLocalStorage = (function() {
    /*
    *        name: hasLocalStorage
    * description: Favourites require localStorage to indiciated "favourited" items on adlist and profile page.
    *              Variable allows us to test for browsers that does not support localStorage
    */
    test = 'test'
      try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
      } catch(e) {
        return false;
      }
}());

function updateStorage(obj, name) {
    /*
    *        name: updateStorage
    *      params: obj = object of data to be stored in localStorage
    * 		   name = name of variable to store data in localStorage
    * description: Utilizes browsers localStorage to save data(obj) under variable(name).
    */
    if (hasLocalStorage) {
	localStorage.setItem(name, JSON.stringify(obj) );
	//console.log(localStorage)
    }
}

function googleEventTrack(action, label){
	/*
	*			name: googleEventTrack
	*	 description: used to track what type of event is happening needs
	*				  window._isUniversalAnalytics to be set to determine
	*				  kind of analytics call
	*/
	// for new universal analytics
	_ga('send', 'event', 'favourite', action, label );
	// for rollup account
	_ga('rollup.send', 'event', 'favourite', action, label)

}
/***************************************************************
Functions used to "favourite" an item 
***************************************************************/
function makeFavouriteLocalStorage(){
    /*
    * 	     name: makeFavouriteLocalStorage
    * description: Create localStorage for favourite, saved under variable 'f' for logged in user
    *			   or 'noLog' for anonymous user.
    *              Checks if we already have them, if not we perform necessary steps to create and
    *			   add favourites if logged in user.
    */
    // check if browser can utilize localStorage
    if (hasLocalStorage) {
		if ( $('#user-name').length > 0){
			// Logged in user
			user_name = $('#user-name').html();
			//console.log(user_name + ' logged in');

			// create 'f' (favourite) item if not available
			if (!localStorage.getItem('f')) {
			    localStorage.setItem('f',"{}");
			    //console.log('f created in localStorage');
			    //console.log(localStorage);
			}

			// parse item as an object
			f = JSON.parse(localStorage.getItem('f'));

			// check if user is already stored if not grab them via ajax and store it back in localStorage
			if (localStorage.getItem('noLog')) {
				//console.log('getting favourites after saving anonymous favs');
				noLog = JSON.parse(localStorage.getItem('noLog'));
				ajaxURL = '/getfavourites?nolog=';
				if(noLog['count'] > 0){
					ajaxURL += '&item=' + noLog['item'].join();
					ajaxURL += '&seller=' + noLog['seller'].join();
					ajaxURL += '&url=' + noLog['url'].join();
				}
			    $.ajax({
				url:ajaxURL,
				error: function(e){
					//console.log('Oops! Something went wrong. Sorry about that.')
					localStorage.removeItem('noLog');
					},
				}).done(function(data){
					f = JSON.parse(localStorage.getItem('f'));
					f[user_name] = JSON.parse(data);
					updateStorage(f,'f');
					//console.log('added nolog and created f[' + user_name +'] from db');
					localStorage.removeItem('noLog');
					//console.log('remove noLog');
			    })
			}else if (!f[user_name]) {
				//console.log('getting favourites');
				$.ajax({
				url:'/getfavourites',
				error: function(e){
					//console.log('Oops! Something went wrong. Sorry about that.')
					},
				}).done(function(data){
					f[user_name] = JSON.parse(data);
					updateStorage(f,'f');
					//console.log('created f[' + user_name + ']');
				})
			}

		}else{
			// Anonymous User
			// if logged in we store favourites under noLog
			if (!localStorage.getItem('noLog')) {
			    localStorage.setItem('noLog',JSON.stringify({ 'count': 0, 'item': [], 'seller': [], 'url': [] }));
			    //console.log('noLog created in localStorage');
			}
		}
    }
}
function setFavourite(element, fav_id) {
	/*
	*		   name: setFavourite
	*		 params: element = the element containing favourite information
	*                fav_id = id for item that is favourite
	*	description: this action is called when someone clicks a heart. it will then determine
	*				 if it is a signed in user or anonymous user and perform the required steps.
	*/
	$(element).attr('onclick', 'return false;'); // disable element so no duplicate clicks
    if (isMobile && $(element).data('type') != 'url'){
    	$(element).css({
		'transform':'translate(0,-25px)',
		'-webkit-transform':'translate(0,-25px)',
		'-moz-transform':'translate(0,-25px)',
		'-ms-transform':'translate(0,-25px)',
		'-o-transform':'translate(0,-25px)',
	    })
    }else{
    	$(element).css({
		'transform':'scale3d(0,0,0)',
		'-webkit-transform':'scale3d(0,0,0)',
		'-moz-transform':'scale3d(0,0,0)',
		'-ms-transform':'scale3d(0,0,0)',
		'-o-transform':'scale3d(0,0,0)',
	    })
    }
    
    if ( $('#user-name').length > 0) {
    	favourite(element, fav_id);
    }else{
    	favouriteLocal(element);
    }
}
function favouriteLocal(element){
    /*
    * 	     name: favouriteLocal
    * 	   params: element = element contain favourite information
    * description: favouriting item into localStorage under 'noLog'
    */
    // check if browser can utilize localStorage
    if (hasLocalStorage) {
		if (!localStorage.getItem('noLog')) {
		    localStorage.setItem('noLog',JSON.stringify({ 'count': 0, 'item': [], 'seller': [], 'url': [] }));
		}
		$this = $(element);
		if ($this.data('type') == 'url'){
			// remove .lite and search page
			value = window.location.href.replace(/\.lite/g, '')
			$this.data('id', value ) ;
		}
		noLog = JSON.parse(localStorage.getItem('noLog'));
		
		if ($this.hasClass('addfav')){
			if (noLog['count'] < maxFavourites) {
				addValue = $this.data('id');
				noLog[$this.data('type')].push(addValue);
				noLog['count']++;
				setTimeout(function(){
					$this.removeClass('addfav').addClass('removefav').css({
					    'transform':'scale3d(1,1,1)',
					    '-webkit-transform':'scale3d(1,1,1)',
					    '-moz-transform':'scale3d(1,1,1)',
					    '-ms-transform':'scale3d(1,1,1)',
					    '-o-transform':'scale3d(1,1,1)',
					    
					})
					//console.log(noLog['count'])
					$this.attr('onclick', 'setFavourite(this)');
				}, 50)
				// console.log('adding ' + addValue +' from anonymous');
				googleEventTrack('adding favourite','anonymous');
				if ($this.data('db') == '1'){
					trackEvent("ad_favourited", $this.data('id'), '', '');	
				}
			    

			}else{
				// console.log('over limit')
				setTimeout(function(){
					$icon = $this.children('.icon');
					$limit = $this.next();
					if (isMobile) {
						$icon.html('&#xf071;').css('color','#32bcad');
						if ($this.data('type') == 'url') $this.html('Favourite limit reached').css({'background-color':'#eee', 'border-color':'#eee','color':'#32bcad'});
					}else{
						$icon.html('&#xf071;').css('color','#32bcad')
						if ($this.data('type') == 'url') $this.html('Favourite limit reached').css('color','#32bcad');
					}
					
					$this.css({
						'transform':'scale3d(1,1,1)',
						'-webkit-transform':'scale3d(1,1,1)',
						'-moz-transform':'scale3d(1,1,1)',
						'-ms-transform':'scale3d(1,1,1)',
						'-o-transform':'scale3d(1,1,1)',
					    }).attr('title','You reached your favourite limit.');
						$limit.css('display','block');
				},50);
				googleEventTrack('reached-limit', 'anonymous');
				
			}

		}else if ($this.hasClass('removefav')){
			removeValue = '';
			if ($this.data('url') && $this.data('type') == 'url'){
				removeValue = $this.data('url');
			}else{
				removeValue = $this.data('id');
			}
			noLog[$this.data('type')] = jQuery.grep(noLog[$this.data('type')], function(value) {
			 	return value != removeValue;
			});
			noLog['count']--;
			setTimeout(function(){
				$this.removeClass('removefav').addClass('addfav').css({
				    'transform':'scale3d(1,1,1)',
				    '-webkit-transform':'scale3d(1,1,1)',
				    '-moz-transform':'scale3d(1,1,1)',
				    '-ms-transform':'scale3d(1,1,1)',
				    '-o-transform':'scale3d(1,1,1)',
				})
				$this.attr('onclick', 'setFavourite(this)');
			}, 50);
			// console.log('removing ' + removeValue +' from anonymous');
			googleEventTrack('removing favourite', 'anonymous');
		}
		updateStorage(noLog,'noLog');
    }
}
function makeFavouriteURL(element, fav_id) {
    /*
    *        name: makeFavouriteURL
    *      params: element = favourite element containing data attribute
    *          	   action = string to identify what to do with favourite
    *          	   fav_id = id of favourite element (optional - used to delete)
    * description: Setting up ajax URL and parameters needed to add/remove favourite.
    *              Returns URL as string
    *              Used in favourite()
    */
    url = '/UpdateFavourite/';			
    var fav = $(element);
    if (fav.hasClass('addfav')){
    	url = '/UpdateFavourite/add';
    }else if (fav.hasClass('removefav')) {
    	url = '/UpdateFavourite/remove';
    }
    // params prep for URL needs fav_id, type, ad_id, seller_id and url
    fav_id = (fav_id) ? '&fav_id=' + fav_id : '&fav_id=' ;
    var fav_type = '?type=' + fav.data('type');
    var ad_id = '&ad_id=';
    var seller_id = '&seller_id=';
    var fav_url = '&url=';
    // fill paramas based on type
    switch (fav.data('type')) {
		case 'item':
		    ad_id += fav.data('id');
		    fav_url += '/classified-ad/' + fav.data('title') + '_' + fav.data('id');
		    break;
		case 'seller':
		    seller_id += fav.data('id');
	 	    fav_url += '/p/' + fav.data('seller');
		    break;
		case 'url':
		    if (fav.data('url')) {
				fav_url += encodeURIComponent(fav.data('url'));
		    }else{	
				fav_url += encodeURIComponent(document.location.href);
		    }
			fav_url = fav_url.replace(/\.lite/g, ''); // removing .lite so desktop can view link
		    break;
		default:
		    break;
	    }
    return url + fav_type + ad_id + seller_id + fav_url + fav_id;
}
function favourite(element, fav_id) {
    /*
    *        name: favourite
    *      params:  element = heart element (a tag)
    * 	            action = string declaring what is to happen with heart/favourite
    * 	     	    fav_id = (optional) appears if there is a id for the favourite, used for removal
    * description: favouriting item for user and saves the info to DB and localStorage under 'f' > 'user_name'
    */
    $(element).attr('onclick', 'return false;'); // disable element so no duplicate clicks
    URL = makeFavouriteURL(element,fav_id) ;
    //console.log(URL)

    // send and update favourites
    $.ajax({
		url : URL,
		context : element,
		error : function(){
		    $(this).css({
			'transform':'scale3d(1,1,1)',
			'-webkit-transform':'scale3d(1,1,1)',
			'-moz-transform':'scale3d(1,1,1)',
			'-ms-transform':'scale3d(1,1,1)',
			'-o-transform':'scale3d(1,1,1)',
		    }).attr('title','An Error Occured!');
		    $(this).children('.icon').html('&#xf071;').css('color','#32bcad');
		}
	}).done(function(data){
		$this = $(this);
		// prep localStorage user obj
		if (hasLocalStorage) {
		    var f = JSON.parse(localStorage.getItem('f'));
		    var user_name = $('#user-name').html();
		    var dataType = $this.data('type');
		    var dataID = parseInt($this.data('id'));
		    if (dataType == 'url') {
		    	if ($this.data('url')) {
					dataID = $this.data('url');
			    }else{	
					dataID = window.location.href;
			    }
				dataID = dataID.replace(/\.lite/g, ''); // removing .lite so desktop can view link
		    }
		}
		
		if ($this.hasClass('addfav')) {
		    // change element to remove
		    $this.attr('onclick','setFavourite(this,' +data+')');
		    $this.removeClass('addfav').addClass('removefav');
		    if (hasLocalStorage) {
		    	// add ad to localstorage user obj 
				f[user_name][dataType].push(dataID);
				f[user_name]['count']++;
		    	// console.log('add '+ dataID +' local and db');
		    }
		    googleEventTrack('adding favourite', 'user');
		    if($this.data('db') == '1'){
			    trackEvent("ad_favourited", $this.data('id'), '', '');
		    }
	    
		}else if ($this.hasClass('removefav')){
		    // change element to add
		    $this.attr('onclick', 'setFavourite(this)');
		    $this.removeClass('removefav').addClass('addfav');
		    
		    if (hasLocalStorage) {
			// remove ad from localstorage user obj
				f[user_name][dataType] = $.grep(f[user_name][dataType],function(value){
				    return value != dataID;
				})
				f[user_name]['count']--;
		    	// console.log('remove ' + dataID + ' from local and db');
		    }
		    googleEventTrack('removing favourite', 'user');
		}
		$this.css({
		    'transform':'scale3d(1,1,1)',
		    '-webkit-transform':'scale3d(1,1,1)',
		    '-moz-transform':'scale3d(1,1,1)',
		    '-ms-transform':'scale3d(1,1,1)',
		    '-o-transform':'scale3d(1,1,1)',
		});
		   
		updateStorage(f, 'f'); //update localstorage 
    });
}

/***************************************************************
Functions used for the favourites page
***************************************************************/
function updateFavCount(){
    /*
    *        name: updateFavCount
    * description: (DESKTOP) used to update/refresh the count of favourites on page.
    * 		   Used in showUpdateFavourites() and updateFavouriteState()
    */
    favCount = $('.fav').length;
    $('#favouriteCount').html(favCount);
    $('#adCount').html($('.fav-ad').length);
    $('#sellerCount').html($('.fav-seller').length);
    $('#urlCount').html($('.fav-search').length);
    if (!isMobile){
    	if (favCount <= totalCount) {
			$('.load-more').show();
		    }
    }
}
function showSelectedFav() {
    /*
    *        name: showSelectedFav
    * description: show only favourite that is selected used in showUpdateFavourites()
    */
    show = $('.header li#selected a').attr('id');
    if (show) $('.fav').hide() ;
    $('.'+show).show();
}
function showUpdatedFavourite() {
    /*
     * 	      name: showUpdateFavourite
     * description: (DESKTOP) Updates elements of page based on ajax call
     * 		    Used in updateFavouriteState()
     */
    showSelectedFav();
    updateFavCount();
    $('.header').css({'background-color':'#ef4123'}).animate({'background-color':'#4f2984'},500);
    $('.footer').css({'background-color':'#ef4123'}).animate({'background-color':'#4f2984'},500);
    currentCount = $('#favouriteCount').html();
    if (currentCount >=  totalCount) {
	$('.load-more').hide();
    }
}
function getLocalFavourites() {
	/*
	*			name: getLocalFavourites
	*	 description: used when viewing the favourites page when user is not logged in.
	*				  checks if favourites are store locally and then retrieves the information
	*				  using ajax and returns it.
	*/
	if (hasLocalStorage) {
		if (localStorage.getItem('noLog')) {
			noLog = JSON.parse(localStorage.getItem('noLog'));
			if (noLog['count'] > 0) {
				if (!isMobile){
					$('#favourite-data').css({
						'transform':'scale3d(0,0,0)',
						'-webkit-transform':'scale3d(0,0,0)',
						'-moz-transform':'scale3d(0,0,0)',
						'-ms-transform':'scale3d(0,0,0)',
						'-o-transform':'scale3d(0,0,0)',
					});
				}
				$('.loader').toggle();
				lite = isMobile ?  '.lite' : '';
				ajaxURL = '/getLocalFavourites' + lite + '?';
				items = 'item=' + noLog['item'].join();
				sellers = '&seller=' + noLog['seller'].join();
				urls = '&url=' + encodeURIComponent(noLog['url'].join());
				ajaxURL = ajaxURL + items + sellers + urls;

				$.ajax({
					url:ajaxURL,
					error:function(e){
						// console.log('whoa')
						},
				}).done(function(data){
					$('#favourite-data').append(data)
					if(!isMobile){
						$('#favourite-data').css({
						'transform':'scale3d(1,1,1)',
						'-webkit-transform':'scale3d(1,1,1)',
						'-moz-transform':'scale3d(1,1,1)',
						'-ms-transform':'scale3d(1,1,1)',
						'-o-transform':'scale3d(1,1,1u)',
					});	
					}
					
					if(data && isMobile){
						$('.nodata').hide();
					}
					$('.loader').hide();
					$('.favourite').each(function(){
				    	$(this).removeClass('bubbleup');
				    })
					updateFavCount();
				})
			}
		}
	}
}
function loadMore() {
    /*
    *        name: loadMore
    * description: (DESKTOP) Function called when 'Load More Favourite' button is pushed on /favourites page.
    *              Adds data-executing attribute to prevent multiple call of button.
    *              Set's URL for ajax based on elements
    *              
    */
    
    var $this = $(this);
    if ($this.data('executing')) {return};
    $this.data('executing', true );
    
    
    if (isMobile) {
	/*
	 * MOBILE - views based on type so we include "type"
	 * 	    also uses HTML5 history state to preserve page state
	 */
	offset = $('#favouriteCount').html();
	URL = '/favourites.lite?extra=' + offset;
	if ($('a#selected').data('type')) {
	    type = "&type=" +$('a#selected').data('type');
	    URL += type ;
	}
	$('.loader').toggle();
	window.history.ready = true;
	history.pushState({favourite:true},null,URL);
	$.ajax({
	    url:URL + "&start=" + offset,
	    beforeSend:function(){},
	    error:function(){
	    	// console('Sorry, something went wrong.')
	    },
	    context:this,
	    success :function(data){
		$('#favourite-data').append(data);
		$('.loader').toggle();
		$('#favouriteCount').html($('.fav').length);
		
		if ($('.fav').length >= favouriteCount) {
		    $('.load').hide();
		}
		$(this).removeData('executing');
	    }
	});
    }else{
	/*
	 * DESKTOP - shows all ads and filters ads, so we ask fo all ads, no types
	 * 	     because of IE we have to use History.js to preserve page state
	 */
	offset = $('#favouriteCount').html();
	$('.loader').show();
	History.replaceState(null,null,'/favourites?extra='+offset);
	$(this).removeData('executing');
	//URL = '/favourites' + "?start=" + offset 
	//$.ajax({
	//    url : URL,
	//    beforeSend :function(){},
	//    error : function(){ alert('whoa') },
	//    context : this,
	//    success : loadMoreFavourites
	//})
    }
}
function updateFavouriteState(){
    /*
    *        name: updateFavouriteState
    * description: (DESKTOP) replaces all favourite content to new ajax requested content
    */
    //console.log('favouriteState change')
    updateFavCount();
    state = History.getState();
    //console.log(state.url)
    $.ajax({url:state.url,
	   success:function(data){
		$('#favourite-data').html(data);
		showUpdatedFavourite();
		$('.loader').hide();
	    }})
}
function extra_toggle(el) {
    /*
     *        name: extra_toggle
     *       param: el = element that is activating event
     * description: (DESKTOP) Toggles the visiblity for ad details and ad attributes
     */
    p = $(el).parent();
    attr_child = p.children('#ad-attribute');
    attr_detail = p.children('#ad-detail');
    attr_child.toggle();
    attr_detail.toggle();
}
function expand(el) {
    /*
    *        name: expand
    *       param: el = element that activiating event
    * description: Toggles height of description of ad on /favourites page.
    */
    if (isMobile) {
	p = $(el).parents('.fav-container').children('.fav').children('.fav-ad-description')
	h = p.css('max-height');
	if (parseInt(h) == 0) {
	    p.css('max-height',999);
	    $(el).html('&#xf077;');
	}else{
	    p.css('max-height',0);
	    $(el).delay(400).html('&#xf078;');
	}
    }else{
	p = $(el).parent();
	if (p.height() <= 100) {
	    p.css('max-height','1000px');
	    $(el).html('&#xf139;');
	    if (p.height() <= 100) {
		$(el).hide();
	    }
	}else{
	    p.css('max-height','100px');
	    $(el).html('&#xf13a;') ;
	}
    }
}

/***************************************************************
Functions used to determine if item is favourited for 
cached pages
***************************************************************/
function heartFavourites() {
    /*
    *        name: heartFavourites
    *      params: user = handle of logged in user (string)
    * description: Used on adlist and profile page to change favourite element class and functionality
    *              if user has ad stored as favourite or if ad was favourited prior to signing in
    *              Loops through favourite element and checks if data-ad attribute (used_ad_id)
    *              is in localStorage of save user, if so we change class which changes style.
    */
    isLoginFav = document.referrer.indexOf("addFavourite=item-" + localStorage.getItem('item')) > 0;
    // check if browser can utilize localStorage
    if (hasLocalStorage) {
    	ads = [];
		// grab localStorage item for favourite
		if(localStorage.getItem('noLog')){
			// console.log('heart from anonymous');
			f = JSON.parse(localStorage.getItem('noLog'));
			ads = ads.concat(f['item'], f['seller'], f['url']); 	//grab ads favourited for not logged in user
		} else if ( $('#user-name').length > 0){
			// console.log('heart from user');
			user_name = $('#user-name').html();
			f = JSON.parse(localStorage.getItem('f'));
			if (f[user_name] && f[user_name]['item']) {
				ads = f[user_name]['item'].concat(f[user_name]['url']);//grab ads favourited for logged in user
			// this else is needed for exisiting user who have been using local storage
			// could probably be removed after a few months
			}else{
				//makeFavouriteLocalStorage()
				// setTimeout(function(){
				// 	ads = f[user_name]['item'].concat(f[user_name]['url']);//grab ads favourited for logged in user
				// },500)
				$.ajax({
				url:'/getfavourites',
				error: function(e){
					//console.log('Oops! Something went wrong. Sorry about that.')
					},
				}).done(function(data){
					f[user_name] = JSON.parse(data);
					updateStorage(f,'f');
					ads = f[user_name]['item'].concat(f[user_name]['url']);
					//console.log('created f[' + user_name + ']');
				})
			}
		}
		// if there are favourited ads we loop through the ads and find match
		// update hearts if there is a match
		if (ads.length > 0 || isLoginFav) {
		    $('.favourite').each(function(){
				if ( $.inArray($(this).data('id'),ads) >= 0 || ( $(this).data('type') == 'url' && $.inArray(window.location.href.replace(/\.lite/g, ''), ads ) >= 0 )|| ( $(this).data('id') == localStorage.getItem('item') && isLoginFav )) {
					// console.log('found favourite');
				    $(this).removeClass('addfav').addClass('removefav');
				}
			});
		}
	}
	// this localStorage was used if user favouriting before signing in
	// removing item now that it has changed after they signed in
	if (localStorage.getItem('item')) {
	    if ( $.inArray( parseInt(localStorage.getItem('item')), ads  ) < 0 ) {
			ads.push(parseInt(localStorage.getItem('item')));
			f[user] = ads;
			updateStorage(f,'f');
	    }
	    localStorage.removeItem('item');
    }
}
function favouriteNow(el) {
    /*
     *        name: favouriteNow
     *      params: el = element that is using this function
     * description: Used for adlist/profile pages, creates a localStorage variable
     *              when user wants to favourite item
     */
    if (hasLocalStorage) {
	$this = $(el);
	href = $this.attr('href');
	href = href.replace(/\.lite/g, ''); // for mobile to remove first .lite
	ad_info = href.substring(20,href.indexOf('&')).split('-');
	if (ad_info[0] == 'item') {
	    localStorage.setItem(ad_info[0],ad_info[1]);
	}
    }
}
function unHeartFavourites() {
    /*
    *        name: unHeartFavourites
    * description: Used only when user logout of their account to changed cached favourites to links to login instead
    * 		   of containing favouriting functionality
    */
    if (hasLocalStorage){
	if (localStorage.getItem('logged')) {
	    if (isMobile) {
		//MOBILE
		$('.ad-list .favourite').each(function(){
		    $(this).attr({
				'href':'/login?addFavourite=item-'+ $(this).data('id') +'&came_from=' + encodeURIComponent(document.URL),
				'title':'Login to add Favourite'
				});
		})
	    }else{
		//DESKTOP
		$('.usedlist .favourite').each(function(){
		    $(this).attr({
				'href':'/login?addFavourite=item-'+ $(this).data('id') +'&came_from=' + encodeURIComponent(document.URL),
				'title':'Login to add Favourite'
				 });
		})
	    }
	    
	    localStorage.removeItem('logged');
	}
    }
}





/***************************************************************
ARE YOU DOOOOOOCCCUMENT REEEEEEAAADAAAYY!!!??? function.
***************************************************************/
// both MOBILE and DESKTOP
$(function(){
	// need this to remove old items that are going to be removed with updated favourite.js
	if(hasLocalStorage){
		localStorage.removeItem('item')
		localStorage.removeItem('logout')
	}

	/* this is for popup to inform users about favourites
	//window.onbeforeunload = favouritePopup;
	//window.onunload = removeLocalFavouritesStorage;
	function removeLocalFavouritesStorage(){
		if(hasLocalStorage){
			localStorage.removeItem('noLog')
		}
	}
	function favouritePopup(){
		if(hasLocalStorage){
			if(localStorage.getItem('noLog')){
				noLog = JSON.parse(localStorage.getItem('noLog'));
				if(noLog['count']>0){
					return 'You favourited ' + noLog['count'] + ' item(s), leaving/reloading the site will remove them.';
				}
			}
		}
	}
	$('a').on('click', function(){window.onbeforeunload = null;window.onunload=null});
	$('form').on('click', function(){window.onbeforeunload = null;window.onunload=null});
	*/
	// create local storage if needed for user
    if ($('#user-name').length > 0 ) {
    	makeFavouriteLocalStorage();
    }
    // heart favourites on cached pages
    heartFavourites()
	// make favourites appear
    $('.favourite').each(function(){
    	$(this).removeClass('bubbleup');
    })
    

    // set variable so we know to change hearts on cached adlist and profile pages
    $('a[href="/logout"]').click(function(){
		if (hasLocalStorage) {
		    localStorage.setItem('logout', true);
		}
    })
})
if( isMobile ) {
    // MOBILE ONLY
}else{
    // DESKTOP ONLY
    $(function(){

	// (DESKTOP) Click event to delete favourites based on selected type
	$('#clean-fav').on('click', function(e){
	    $('#clean-popup').show();
	    t = $('#myfavourites .used-menu li#selected a').data('type') || ''
	    l = $('#myfavourites .used-menu li#selected .favCount').html() || $('#favouriteCount').html()
	   	if ($('#myfavourites .used-menu li#selected a').html()) {
	       $('#clean-box h2 span').html($('#myfavourites .used-menu li#selected a').html() )
	    } 
	    console.log('t: '+ t)
	    console.log()
	    type = "type=" + t
	    limit = '&limit=' + l
	    if ($('#user-name').length >0 ) {

		    $('#clean-box a[href="/favourites"]').attr('href', '/removeFavourites?' + type + limit)

		    $('#clean-box').click(function(e){e.stopPropagation();})
		    $('#clean-popup').on('click', function(e) {
				$(this).hide();
		    });
	    }else {
	    	if(hasLocalStorage){
	    		if (localStorage.getItem('noLog')) {
	    			var noLog = JSON.parse(localStorage.getItem('noLog'));
	    			if (t) {
	    				console.log(noLog)
	    				noLog['count'] = noLog['count'] - noLog[t].length;
	    				noLog[t] = [];
	    				update = JSON.stringify(noLog)
	    				console.log(update)
	    				$('#clean-box a[href="/favourites"]').attr('onclick', 'localStorage.setItem("noLog",update)' );
	    			}else{
	    				$('#clean-box a[href="/favourites"]').attr('onclick', 'localStorage.removeItem("noLog")')
	    			}
				}	    		
	    	}
	    }
	    
	})
	
	// (DESKTOP) Click event to filter favourites and displayed based on selected types
	$('#myfavourites .used-menu ul a').click(function(e){
	    $('#myfavourites .used-menu li').attr('id','')
	    $('#categories ul li a').attr('id', '');
	    $(this).parent('li').attr('id','selected')
	    $('.fav').hide()
	    name = $(this).attr('id')
	    $('.'+name).show()
	    if (name == 'fav-ad' && $('.fav-ad').length > 0) {
		$('#categories').css('height','30px')
	    }else{
		$('#categories').css('height',0)
	    }
	    e.preventDefault();
	    e.stopPropagation()
	})
    })
}


