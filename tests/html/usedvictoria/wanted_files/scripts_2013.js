/**
 * Project: UsedEverywhere Platform
 * Ancient Author: Michael Bhatti
 * Email: mbhatti@usedeverywhere.com
 *
 * modified by chris@usedeverywhere.com and jim@usedeverywhere.com
 */

 
 var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
 var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
 var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
 var is_safari = navigator.userAgent.indexOf("Safari") > -1;
 var is_Opera = navigator.userAgent.indexOf("Presto") > -1;
 if ((is_chrome)&&(is_safari)) {is_safari=false;}

/**
 * JQuery/Javascript functions commonly used by various pages around a UsedEverywhere site.
 * You interested in a job? Check out http://www.usedeverywhere.com/about/careers/ - you looked at our source, that makes you
 * curious and someone we might want to hire :)
 */
$.widget( "custom.usedautocomplete", $.ui.autocomplete, {
    _create: function() {
      this._super();
      this.widget().menu( "option", "items", "> :not(.autocomplete-prov-group)" );
    },
    _renderMenu: function( ul, items ) {
      var that = this,
        currentCategory = "";
      $.each( items, function( index, item ) {
        var li;
        if ( item.category != currentCategory ) {
          ul.append( "<li class='autocomplete-prov-group'>" + item.category + "</li>" );
          currentCategory = item.category;
        }
        li = that._renderItemData(ul, item );
        if ( item.category ) {
          li.attr( "aria-label", item.category + " : " + item.label );
        }
      });
    }
  });

// creating combo box widget from jquery ui
(function( $ ) {
	
    $.widget( "custom.combobox", {
      _create: function() {
        this.wrapper = $( "<div>" )
          .addClass( "custom-combobox" )
          .insertAfter( this.element );
 
        this.element.hide();
        this._createAutocomplete();
        this._createShowAllButton();
      },
      _createAutocomplete: function() {
        var selected = this.element.children("optgroup").children( ":selected" ),
          value = selected.val() ? selected.text() : "";
        this.input = $( "<input>" )
          .appendTo( this.wrapper )
          .val( value )
          .attr( "title", "" )
          .addClass( "rborder-full custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left" )
          .usedautocomplete({
            delay: 0,
            minLength: 0,
            source: $.proxy( this, "_source" )
          })

        this._on( this.input, {
          usedautocompleteselect: function( event, ui ) {
            ui.item.option.selected = true;
            this._trigger( "select", event, {
              item: ui.item.option
            });
            window.location.href = '//' + ui.item.option.value
          },
          usedautocompletechange: "_removeIfInvalid"
        });
        // keydown on input checks if valid, if not nothing
        this._on(this.input, {
        	keypress:function(event){
  				if(event.which == 13){
  					var text = this.input.val().toLowerCase()
  					options = $('#selectSite').children('optgroup').children('option')
					options.each(function(){
						if(text == $(this).text().toLowerCase()){
							window.location.href = '//' +$(this).val()
						}
					})
  				}
        	}
        })
      },
 
      _createShowAllButton: function() {
        var input = this.input,
          wasOpen = false;
 
        $( "<a>" )
          .attr( "tabIndex", -1 )
          .attr( "title", "Show All Items" )
          .appendTo( this.wrapper )
          .removeClass( "ui-corner-all" )
          .addClass( "custom-combobox-toggle ui-corner-right icon rborder-full" )
          .mousedown(function() {
            wasOpen = input.usedautocomplete( "widget" ).is( ":visible" );
          })
          .html('&#xf0d7;')
          .click(function() {
            input.focus();
 
            // Close if already visible
            if ( wasOpen ) {
              return;
            }
 
            // Pass empty string as value to search for, displaying all results
            input.usedautocomplete( "search", "" );
          });
      },
 
      _source: function( request, response ) {
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
        response( this.element.children("optgroup").children( "option" ).map(function() {
          var text = $( this ).text();
          if ( this.value && ( !request.term || matcher.test(text) ) )
            return {
              label: text,
              value: text,
              option: this,
              category: $(this).attr('data-prov'),
            };
        }) );
      },
 
      _removeIfInvalid: function( event, ui ) {
        // Selected an item, nothing to do
        if ( ui.item ) {
          return;
        }
 
        // Search for a match (case-insensitive)
        var value = this.input.val(),
          valueLowerCase = value.toLowerCase(),
          valid = false;
        this.element.children( "option" ).each(function() {
          if ( $( this ).text().toLowerCase() === valueLowerCase ) {
            this.selected = valid = true;
            return false;
          }
        });
 
        // Found a match, nothing to do
        if ( valid ) {
			return;
        }
 
        // Remove invalid value
        this.input
          .val( "" )
          .attr( "title", value + " didn't match any item" )
        this.element.val( "" );
        this.input.usedautocomplete( "instance" ).term = "";
      },
 
      _destroy: function() {
        this.wrapper.remove();
        this.element.show();
      }
    });
  })( jQuery );

function jumpCategory(category){
    if (category)
        if (category != 'personals')
            this.location = '/classifieds/' + category;
        else
            return false;
}

function showTopAds(){
    var showTextEl = document.getElementById('showTopAdsText');
    if (showTextEl.innerHTML == 'Show all top ads'){
        showTextEl.innerHTML = 'Hide extra top ads';
        $('.hiddenTopAd').show();
    }
    else{
        showTextEl.innerHTML = 'Show all top ads';
        $('.hiddenTopAd').hide();
    }
}

//jump to top, used in the footer
function toTop() {
     $('body,html').animate({scrollTop: 0}, 800);
}

// toggling search attributes on sidebar search based on category_code given
// category_code can be an object or string
// PARAMS: string of single category_code or array/list of category_code
var toggleAttributes = function(category_codes){
	// category_code = $this.val().split('_')[0];	// category code for checked input - spliting because input could be labeled with multiple category separated by '_'
	attr_list = $('li[data-attr]') //all attributes
	checkbox_list = $('input[name=categories]')	//all checkboxes

	// if its a list of category_codes
	if ( typeof(category_codes) == 'object'){
		match_attr = {}	
		// attribute object which will hold index and values used to determine
		// the action of the attribute li items
		match_attr['result'] = {} 
		
		// set all index of attribute list item to true	
		for (j=0;j<attr_list.length;j++ ) {match_attr['result'][j] = true;}

		// loop through list of category_codes to prep to find matched
		// attributes lists
		for (i=0;i<category_codes.length;i++ ) {
			category_code = category_codes[i]

			// loop through all attribute li element
			for (j=0;j<attr_list.length;j++ ) {
				item = true // current status of list item

				attr_li = $(attr_list[j]);	// li element
				// grabbing all category_code associated with attribute list
				category_list = attr_li.data('attr').split(':');

				// check if the category code is NOT listed in attribute list
				// we mark the index as not in
				if ( $.inArray(category_code, category_list) < 0) {
					item = false;
				}
			

				// if category_code not in category_list_code we check if the
				// category_code_list are child of category_code	
				if ( !item ){
					for (k=0;k<category_list.length;k++){
						category_list_code = category_list[k]
						// if list is child of category
						if ( window.categories[category_list_code]['parent'] == category_code ){
							item = true
							break;
						}
					}
				}
				// item is false and match result is still true 
				// we set value to false which will hide item
				if ( !item && match_attr['result'][j]) {
					match_attr['result'][j] = false
				}

			}
		}


		// loop through attribute list again
		for (i=0;i<attr_list.length;i++ ){
			// check that match_attr['result'] and index to determine if
			// true we show item else if false we hide
			if ( match_attr['result'][i]){
				$(attr_list[i]).removeClass('bubbleup').find('input,select').prop('disabled',false)
			}else{
				$(attr_list[i]).addClass('bubbleup').find('input,select').prop('disabled',true);
			}
		}
	// else only one category code given
	}else{
		//loop through list
		category_code = category_codes
		
		// if category is all we check all boxes
		if (category_code == 'all'){
			checkbox_list.prop('checked', true)
			attr_list.addClass('bubbleup').find('input,select').prop('disabled',true)

		//
		}else{
			for (i=0;i<attr_list.length;i++ ) {
				attr_li = $(attr_list[i]);	// li element
				category_list = attr_li.data('attr').split(':');	//list of categories for list element

				if ( $.inArray(category_code, category_list) >= 0 || category_code == 'all') {
					//checked input attributec
					attr_li.removeClass('bubbleup').find('input,select').prop('disabled',false)
				}else{
					isChild = false;
					// loop through category_list to check if they are child of
					// category_code selected
					for (j=0;j<category_list.length;j++){
						category_list_code = category_list[j]
						if ($.inArray(window.categories[category_list_code], window.categories[category_code]['children']) >= 0){
							isChild = true;
						}
					}
					
					if (!isChild){
						//not checked input attribute
						attr_li.addClass('bubbleup').find('input,select').prop('disabled',true)
					}else{
						attr_li.removeClass('bubbleup').find('input,select').prop('disabled',false)
					}
					// attr_li.addClass('bubbleup').find('input,select').prop('disabled',true)

					
				}
				

			}
		}
	}
}


/**
 * CHANGE SEARCH TYPES with ADVANCE on/off
 * event = event being used
 * element = that being assigned the event
 * typeName = class name you wish to add to #mySearch div
 */
function changeType(event, element, typeName) {
        switch ($(element).attr('id')) {
        	case 'qTypes':
        		$('input[name=categories]').prop({'type': 'checkbox', 'checked':false}).attr('onclick','');
        		$('li[data-attr]').find('input,select').prop('disabled', true);

        		break;
        	case 'sTypes':
        		$('input[name=categories]').prop({'type':'radio','checked':false}).attr('onclick','toggleAttributes(this)');
        		$('li[data-attr]').find('input,select').prop('disabled', false);
        		break;
        	default:
        		break;
        }
        $('li[data-attr]').addClass('bubbleup')
    }
 

function closeAdBooster() {
	$popup.removeClass('bubbledown').addClass('bubbleup')
}
function showAdlistPopup(el){
	
	$this = $(el)
	$parent = $this.parent().parent()
	yPos =  $this.parent().offset().top - $parent.height()
	xPos = $this.offset().left + 70
	$popup = $('#popupInfo')
	$('#popupInfo li.infoGroup').hide()
 	$popup.css({'top':yPos+'px','left':xPos+'px'})
 	$('#'+$this.data('popup')).show()
 	setTimeout(function(){
 		$popup.removeClass('bubbleup').addClass('bubbledown')
 	},200)
}

function donateInfo(el){
    //action for when you click on donate info button
    $this = $(el)
    $help = $('#charityInfo')
    x = $(el).offset().top - 430
    $help.css('top', x +'px').removeClass('bubbleup').addClass('bubbledown')
}
/// takes jquery list of elements and converts the date to browser timezone date
/// element needs to be set with span tag <p><span>Posted</span> January 1, 2022</p>
function convertTime( dateObj ){
	// console.log(dateObj)
	dateObj.each(function(){
		ts = $(this).data('ts')
		new_ts = moment.utc(ts).local().format('MMMM DD, YYYY')
		ad_len = $(this).contents().length
		if (ad_len > 1){ 
			// adlist 
			$(this).contents()[2].nodeValue = new_ts
		}else{
			// adview 
			$(this).contents()[0].nodeValue = new_ts
		}
		// console.log(new_ts)
	}) 
}
/*---------------------------------------------------------
READY SET GO!!! - document ready
---------------------------------------------------------*/
var getTrendingAds = function(region, success, trendingEndpointUrl) {
	if(typeof(success) === 'undefined') success = function(data) {}
	if(typeof(trendingEndpointUrl) === 'undefined') return
	
	options = {
		'async': true,
		'dataType': 'json',
		'type': 'GET',
		'cache': false,
		'url': trendingEndpointUrl + "/" + region,
		'success': success
	}
	return $.ajax(options)
}


$(document).ready(function(){
	// MULTISELECT
	$(".multiselect").multiselect({position: {my: 'right top', at: 'left top'},
					height: 290,
					noneSelectedText: 'Select location(s)'
					}
					).multiselectfilter({
	      label: ''         
	});
	
	// TOOLTIPS
	$('#titlereport a').tipsy({gravity: 's', fade: true, offset: 5, opacity: 0.85, title: 'title'});
	$('#titletools a').tipsy({gravity: 's', fade: true, offset: 5, opacity: 0.85, title: 'title'});


	// TOOLS DROPDOWN
	$('#titletools a.tools-button').click(function() {
	        if ($(this).hasClass('on')) {
	            $(this).removeClass('on').addClass('off');
	        } else {
	            $(this).addClass('on');
	        }
	    }
	);

	//----- Dropdown Toggle
	// TOOLS BUTTON
	$("#titletools a.tools-button").click(function(){
		$("#titletools ul").toggle();
		if ($("#titletools ul").css('display') != 'none') {
			$("#titletools a .tools").html("&#xf0dd;").css('top','-5px')
		}else{
			$("#titletools a .tools").html("&#xf0da;").css('top',0)
		}
	});
	
	$('#titletools a').click(function(e) {
		e.stopPropagation();
	});
	
	// SHARE BUTTON
	$('#share').on('click',function(e){
    if ($("#social-list").css('opacity') == 0) {
			$('#social-list').css( 'display', 'inline' )
			$("#social-list").css('opacity', 1);
			$("#share .icon").html("&#xf0dd;").css('top','-5px');
      FB.XFBML.parse()
      $('.used-twitter-share-button').addClass('twitter-share-button')
      twttr.widgets.load(document.getElementById('tweet'))
		}else{
			$('#social-list').css( 'display', 'none' )
			$("#social-list").css('opacity', 0);
			$("#share .icon").html("&#xf0da;").css('top',0);
		}
                return false;
	});
	
	//-----InsertAD page adding * to phone number -----//
	$('#buyerques_checkbox').click(function(e) {
		if( !$(this).prop("checked") )
		{
			$("#insertAd_phonelb").html("<span class='required'>*</span>Phone:");
		}
		else
		{
			$("#insertAd_phonelb").html("Phone:");
		}
	});

	// FLAG BUTTON
	$('#titlereport a').click(function() {
	        if ($(this).hasClass('on')) {
	            $(this).removeClass('on').addClass('off');
		    $("#titletools a .icon").html("&#xf0da;")
	        } else {
	            $(this).addClass('on');
	        }
	    }
	);
	
	// ADVANCE OPTIONS SIDEBAR
	$("ul.advancedfiltertabs li").click(function(e) {
	    var activeTab = $(this).attr("rel");
	    
	    if (activeTab != null )
	    {
	    	e.preventDefault();
			$("ul.advancedfiltertabs li").removeClass("active");
			$(this).addClass("active");
			$(".advancedfiltercontent").hide();
			$("#"+activeTab).fadeIn(); 
		}
		
	});
	
	$('#showAdvanceOptions').click(function(e) {
		// GOOGLE TRACKING EVENT FOR FILTER
		if ( $('#advancedoptions').css('display') == 'none' ) {
			_ga('send','event','SearchFilter','show','advanced options')
			_ga('rollup.send','event','SearchFilter','show','advanced options')
		}else {
			_ga('send','event','SearchFilter','hide','advanced options')
			_ga('rollup.send','event','SearchFilter','hide','advanced options')
		}
		e.preventDefault();
		$('.saoArrow').toggle();
		$('#advancedoptions').toggle();
	});
	
	// ADLIST VIEW LAYOUT BUTTONS
	// section-view | list-view | default-view
	$('.section-view-button').click(function(){
	    $('#image-button').removeClass('on');
	    $('#default-button').removeClass('on');
	    $('.usedlist li').removeClass('list-view default-view').addClass('section-view');
	    $(this).addClass("on");
	    _ga('send','event', 'layout-button', 'section-view')
	    _ga('rollup.send','event', 'layout-button', 'section-view')
	})
	$('.list-view-button').click(function(){
	    $('#section-button').removeClass('on');
	    $('#default-button').removeClass('on');
	    $('.usedlist li').removeClass('section-view default-view').addClass('list-view');
	    $(this).addClass("on");
	    _ga('send','event', 'layout-button', 'list-view')
	    _ga('rollup.send','event', 'layout-button', 'list-view')
	})
	$('.default-view-button').click(function(){
	    $('#image-button').removeClass('on');
	    $('#section-button').removeClass('on');
	    $('.usedlist li').removeClass('section-view list-view').addClass('default-view');
	    $(this).addClass("on");
	    _ga('send','event', 'layout-button', 'default-view')
	    _ga('rollup.send','event', 'layout-button', 'default-view')
	})
	
	// FOOTER ANIMATION LINKS - CANADA 
	$('.footer-nav li a').click(function(e){
	    $('.footer-nav li a').css('font-weight', 300);
	    if (!$(this).hasClass('bc')) {
		$("#usedBC").css('font-weight',300)
		$(this).css('font-weight',600);
	    }else{
		$("#usedBC").css('font-weight',600)
	    }
	    region = $(this).attr('id')
	    switch (region) {
		case 'bcsouth':
		    $('.classifieds').css("left",0);
		    break;
		case 'bcnorth':
		    $('.classifieds').css("left",-812);
		    break;
		case 'prairies':
		    $('.classifieds').css("left",-1625);
		    break;
		case 'ontario':
		    $('.classifieds').css("left",-2438);
		    break;
		case 'atlantic':
		    $('.classifieds').css("left",-3250);
		    break;
		default:
		    break
	    }
	    e.stopPropgation;
	    return false;
	    })
	
       // US Footer animation
       $('a[href|="#moreusa"]').click(function(){
	       var position = $('.us-cat').position()
	       if( position.left == 0) {
		   $(this).html("&#xf053;");
		   $('.us-cat').css("left",-326);
	       } else {
		   $(this).html("&#xf054;");
		   $('.us-cat').css("left",0);
	       }
       });
       //UK Footer animation
       $('a[href|="#moreuk"]').click(function(){
	       var position = $('.uk-cat').position()
		if( position.left == 0) {
		    $(this).html("&#xf053;");
		    $('.uk-cat').css("left",-324);
		} else {
		    $(this).html("&#xf054;");
		    $('.uk-cat').css("left",0);
		}
       });
    
	// adding click event to search type elements
	$('#qTypes').click(function(e){changeType(e,this,'quickSearch');});
	$('#sTypes').click(function(e){changeType(e,this,'specificSearch');});
	// need to change this when search functions gets deployed
	//$('#advanced').click(function(e){changeType(e,this,'advancedSearch');});
	
	$('.adv_switch').click(function(e){
	    var search = $('#searchForm');
	    $('.adv_switch').removeClass('active')
	    if ( $(this).attr('id') == "on" ) {
		search.addClass('advancedSearch')
	    }else{
		search.removeClass('advancedSearch')
	    }
	    $(this).addClass('active')
	    e.stopPropagation();                                        // stopping link events
	    e.preventDefault();
	});
	// // check/uncheck all for "all" choice in Type
	// $('.catType input:checkbox').change(function(){
	//     // if #all is checked we check all
	// 	if( $(this).is(":checked") && $(this).attr('id') == "all") {
	// 		$('.catType input:checkbox').prop("checked",true);
	// 	}else{
	// 		// else uncheck all
	// 		if (  $(this).attr('id') == "all") {
	// 			$('.catType input:checkbox').prop("checked",false);
	// 			// if not #all we uncheck it
	// 		}else{
	// 			$('#all').prop("checked",false);
	// 		}
	// 	}
	// })

    $( "#selectSite").combobox();
    $( "#toggle" ).click(function() {
      $( "#combobox" ).toggle();
    });
	
	convertTime( $('.ad-date') ); // converting time to browser timezone
	$(".fixed-bottom-cls").click(function(e){
    $(this).closest('div').hide();
  });
});
/**
 * ADDING click event to display/hide dropdown checklist, also
 * adding check all button
 * 
 *        type	= type of list (must be unique from others)
 * 
 *     trigger 	= element that is clicked to display dropdown
 *   container 	= dropdown container
 *         all 	= element used for checking all elements
 */
function addCheckListEvents(type) {
    
    var triggerID = "#" + type + "Trigger";
    var containerID = "#" + type + "List";
    var all = 'all'+type;
    
    // click to open up dropdown
    $(triggerID).click(function(e){
	$(containerID).css({'height':'160px', 'padding':'10px 10px'});
	e.stopPropagation();
    })
    // click to close dropdown and update input box
    $(containerID + " .close-button").click(function(e){
	if ($(containerID).height() > 0 ) {
	    var checkboxes = $(containerID + ' ul input:checkbox');
	    var checked = $(containerID +  ' ul input:checked');
	    if (checked.length == checkboxes.length) {
			$(triggerID).html("All");
	    }else if (checked.length == 1) {
			$(triggerID).html(checked.length + " selected");
	    }else if (checked.length > 0) {
			$(triggerID).html(checked.length + " selected");
	    }else if (checked.length <= 0) {
			$(triggerID).html("Please select your choices");
	    }
	}
	$(containerID).css({'height':0, 'padding':'0 10px'});
		e.stopPropagation();
		e.preventDefault();
    })
    
    // check all checkboxes in dropdown
    $(containerID + ' input:checkbox').change(function(){
	// if #all is checked we check all
	if( $(this).is(":checked") && $(this).attr('id') == all) {
	    $(containerID + ' input:checkbox').prop("checked",true);
	}else{
	// else uncheck all
	    if (  $(this).attr('id') == all) {
			$(containerID + ' input:checkbox').prop("checked",false);
	// if not #all we uncheck it
	    }else{
			$('#' + all).prop("checked",false);
	    }
	}
    });
}

/**
 * Search Functions
 */
function fill_children_defaults( parent_id, attr_id, parent_name ){
    $.ajax( '/getChildDefaults/' + attr_id + '/' + $('#' + parent_id).val(), {dataType:'json'} ).done( function(data){
		$( 'select#' + attr_id + '_select' ).empty();
		$( 'select#' + attr_id + '_select' ).append( $(document.createElement( 'option' )).html( 'Choose a ' + $('select#' + attr_id + '_select').data('name') + ':' ).attr( 'value', '' ) );
		for (var i in data){
			var option = $(document.createElement( 'option' ));
			option.attr( 'value', data[i] );
			option.html( '' + data[i] );
			$('select#' + attr_id + '_select').append( option );
		}
		$('select#' + attr_id + '_select').prop( 'disabled', false );

		select_child_menu_item_from_urlparams(attr_id);
    })
}
function empty_progeny( parent_attr_id ){
    var curId =  'select#' + parent_attr_id + '_select';
    var count = 0;
    while( 1==1 ){
		if ( !$(curId).data( 'childSelect' ) ) {
			break;
		} else {
			curId = $( curId ).data('childSelect');
		}
		$( curId ).empty();
		$( curId ).html( '<option value="">Select a ' + $( curId ).data( 'parentName' ) + ' first.</option>' );
		count++;
		if( count > 5 ){
			break; //give a limit in case this runs away.
		}
    }
}

/** 
 * Remember the users selection for a child menu (ie in make and model
 * the model would be remembered after hitting search or refreshing page)
 */
function select_child_menu_item_from_urlparams(attr_id) {
	
	//Assume we've found the correct URL param match to selected child menu item
	var found = true
	
	//Get the URL data
	var pageURL = window.location.search.substring(1);
	
	//If the URL data exists
	if( pageURL ) {
		
		//Split based on & delimeter
		var pageURLVariables = pageURL.split("&");
		
		//For each of the variables in the URL
		for( var i = 0; i < pageURLVariables.length; i++ ) {
			
			//Split the key and value delimited by '='
			var cur = pageURLVariables[i].split("=")
			
			//If the child identifer is equivalent to the URL key
			if( 'attr_' + attr_id == cur[0] ) {
				
				//Set the value of the select element to the value stored in the URL
				$('select#' + attr_id + '_select').val(cur[1]);
				
				//Check if the current selected option item is not empty string
				
				//if it is empty, then we didn't find anything.
				if( !$('select#' + attr_id + '_select :selected').text().length ) {
					found = false;		
				}
				break;
			}
		}

		//Didnt find the correct item from the available options
		if(!found) {
			$('select#' + attr_id + '_select').prop('selectedIndex',0);
		}
	}
}

function dataURLtoBlob(data) {
    var mimeString = data.split(',')[0].split(':')[1].split(';')[0];
    var byteString = atob(data.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    var bb = (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder);
    if (bb) {
        //    console.log('BlobBuilder');        
        bb = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder)();
        bb.append(ab);
        return bb.getBlob(mimeString);
    } else {
        //    console.log('Blob');  
        bb = new Blob([ab], {
            'type': (mimeString)
        });
        return bb;
    }
}

function checkForAt( form ){
	form.description.value = form.description.value.replace('@', ' ')
	return true 
}


function makeSpinner(canvas){
     var context = canvas.getContext('2d');
     var start = new Date();
     var rotation = 0;
     var lines = 13; //primes! woo
     cW = context.canvas.width;
     cH = context.canvas.height;
     var draw = function() {
	 rotation++;
	 if (rotation == 13) {
	     rotation = 0;
	 }
	 context.save();
	 context.clearRect(0, 0, cW, cH);
	 context.translate(cW / 2, cH / 2);
	 context.rotate(Math.PI * 2 * (rotation/lines));
	 for (var i = 0; i < lines; i++) {
	     
	     context.beginPath();
	     context.rotate(Math.PI * 2 / lines);
	     context.moveTo(cW / 10, 0);
	     context.lineTo(cW / 3, 0);
	     context.lineWidth = cW / 20;
	     context.strokeStyle = "rgba(50, 188, 173," + i / lines + ")";
	     context.stroke();
	 }
	 context.restore();
     };
     window.intervalContext = window.setInterval(draw, 40);
 }

