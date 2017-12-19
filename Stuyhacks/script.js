
      // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.

window.onload = function () {
   
      document.getElementById('address').value = "";
      document.getElementById('submit-address').addEventListener("click", function () {

        addMarker(document.getElementById('address').value);
      });
      window.markers = []; //some array
    }
    const apiKey = "AIzaSyD9dUnrMefQVSbVoYhIkbKgvN6HQ2QvCFk";


      var map, infoWindow;
      var lineCoords = [];

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 20
        });
        mark = new google.maps.Marker({position:{lat:-34.39, lng:150.644}, map:map});
                // mark = new google.maps.Marker({position:{lat:lat, lng:lng}, map:map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            console.log(pos);
            mark.setPosition(pos);
            window.lat = pos.lat;
            window.lng = pos.lng;
            lineCoords.push(new google.maps.LatLng(window.lat, window.lng));
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, mark, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, mark, map.getCenter());
        }

    window.initMap;
    var redraw = function(payload) {
      lat = payload.message.lat;
      lng = payload.message.lng;
      console.log(lat);
      map.setCenter({lat:lat, lng:lng, alt:0});
      mark.setPosition({lat:lat, lng:lng, alt:0});
      lineCoords.push(new google.maps.LatLng(lat, lng));
      var lineCoordinatesPath = new google.maps.Polyline({
        path: lineCoords,
        geodesic: true,
        strokeColor: '#2E10FF'
      });
      
      lineCoordinatesPath.setMap(map);
    };

    var pnChannel = "map-channel";
    var pubnub = new PubNub({
      publishKey: 'pub-c-46c470ac-29af-411f-bc4f-136251210add',
      subscribeKey: 'sub-c-7b3e5304-d779-11e7-96e5-36e8e28b70d2'
    });

    pubnub.subscribe({channels: [pnChannel]});
    pubnub.addListener({message:redraw});

  setInterval(function() {
//    navigator.geolocation.getCurrentPosition(function(position) {
//   window.lat = position.coords.latitude;
//   window.lng = position.coords.longitude;
// });

      pubnub.publish({channel:pnChannel, message:{lat:window.lat+100, lng:window.lng+(80-window.lng)/100}});
    }, 1000);

      if (100-window.lat && window.lng== 4){
          playalarm();
        }
      }

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


      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);

      }

//AIzaSyD9dUnrMefQVSbVoYhIkbKgvN6HQ2QvCFk