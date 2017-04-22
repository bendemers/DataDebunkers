function initialize() {
        var myLatlng = new google.maps.LatLng(42.3601, -71.0589);
        var mapOptions = {
          zoom: 12,
          center: {lat:42.3601, lng: -71.0589},
        };
        var mapCanvas = document.getElementById('map-canvas');
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Hello World!'
        });
      }
    /*  var script = document.createElement("SCRIPT");
  script.setAttribute(
      'src',
      'https://storage.googleapis.com/mapsdevsite/json/quakes.geo.json');
  document.getElementsByTagName('head')[0].appendChild(script);

// Defines the callback function referenced in the jsonp file.
    function eqfeed_callback(data) {
  map.data.addGeoJson(data);
}
    */
      
      google.maps.event.addDomListener(window, 'load', initialize);
