
 var geocoder;
  function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(40.730885,-73.997383);
  codeLatLng(function(addr){
    alert(addr);
  });
}

function codeLatLng(callback) {
  var latlng = new google.maps.LatLng(40.730885,-73.997383);
  if (geocoder) {
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          callback(results[1].formatted_address);
        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
  }
}
