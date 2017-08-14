
   
function getParam(name){
    var results = new RegExp ('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results){
        return results[1];
    }else{
        return undefined;
    }
}

       function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }

        }

       function showPosition(position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        window.location.hash = '?&lat='+ lat +"&long=" + long ;
        $("body").append("<p>"+lat +","+long +"</p>")
        }

function initMap(x,y) {
        var uluru = {lat: parseInt(x), lng: parseInt(y)};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
        console.log(x,y);
      }

