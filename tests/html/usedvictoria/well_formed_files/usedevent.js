function trackEvent(eventType, adID, locationName, gladRegion, endpoint){
	if(typeof(endpoint) ==='undefined') endpoint = 'http://e.used.ca/event';

    var fields = {'adID': adID,
		  'locationName': locationName,
		  'eventType': eventType,
		  'gladRegion': gladRegion,
		 };
    
    options = {
	'async': true,
	'data': fields,
	'dataType': 'json',
	'type': 'POST',
	'cache': false,
	'url': endpoint,
	'success': function(data){
	}
	
    };
    
    $.ajax(options);
}


function getStats(ad_id, success, stats_endpoint_url){
	if(typeof(success) ==='undefined') success = function(data){};
	if(typeof(stats_endpoint_url) === 'undefined') return;
    options = {
		'async': true,
		'dataType': 'json',
		'type': 'GET',
		'cache': false,
		'url': stats_endpoint_url + ad_id,
		'success': success
    };
    
    return $.ajax(options);
}

