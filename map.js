var map;

var mapStyles = [
    {
        "featureType": "road",
        "stylers": [
        { "color": "#808080" }
        ]
    },{
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
        { "color": "#ffffff" }
        ]
    }
];

function initMap() {
    var opts = {
        center: {lat: 44.148758, lng: -73.344130},
        zoom: 14,
        styles: mapStyles
    };

    map = new google.maps.Map(document.getElementById('map'), opts);

    var marker = new google.maps.Marker({
        position: opts.center,
        map: map
    });

    var infowindow = new google.maps.InfoWindow({
        content: '<strong>49 Adams Ferry Rd. Panton, VT</strong>'
    });

    infowindow.open(map, marker);
}