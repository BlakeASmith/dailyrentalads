window.mappingAddress = '//map2.usedeverywhere.com' 
var speech_bubble = L.Icon.extend({
    options: {
        iconUrl: window._LOGO_SERVER + '/logos/images/speechBubble_purple_small.png',
        iconSize: [40,30],
        number: '0',
        iconAnchor: [30,30]
    },
    createIcon: function(){
        var div = document.createElement( 'div' );
        var img = this._createImg( this.options['iconUrl'] );
        img.setAttribute( 'width', this.options['iconSize'][0] );
        img.setAttribute( 'height', this.options['iconSize'][1] );
        var numdiv = document.createElement('div');
        numdiv.setAttribute( 'class', 'number' );
        numdiv.innerHTML = this.options['number'] || '';
        div.appendChild(img);
        div.appendChild( numdiv );
        this._setIconStyles( div, 'icon' );
        return div;
    }
});

function makeOSM(mapID, startZoom, maxZ, minZ, startLat, startLng, mapPoints) {
    window.map = L.map( mapID, {scrollWheelZoom:false});
    map.setView([startLat,startLng], startZoom);
    L.tileLayer (window.mappingAddress + '/osm/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="//www.openstreetmap.org/">OpenStreetMap</a>',
	maxZoom: maxZ,
	minZoom: minZ
    } ).addTo(map);
    if (mapPoints == undefined) {
	var marker = L.marker( [startLat, startLng], {icon: new speech_bubble({number:''})} ).addTo(map);
    }else{
	var markers = new L.MarkerClusterGroup({maxClusterRadius:45, spiderfyOnMaxZoom:true, spiderfyDistanceMultiplier:2});
	for (var i=0; i< mapPoints.length; i++) {
	    var marker = L.marker( mapPoints[i].latlng, {icon: new speech_bubble({number: '1' })});
	    var popup = L.popup({maxWidth: 500, minWidth:350, minHeight:160, maxHeight:350});
	    popup.setContent( mapPoints[i].htmls );
            marker.bindPopup(popup);
            markers.addLayer(marker);
	}
	map.addLayer(markers);
    }
}
