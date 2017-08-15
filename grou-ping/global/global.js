var database = firebase.database().ref();
var ref = firebase.database().ref('users');


var refuser;
var glocations = [];

function getglobalData(){
    glocations = []
    database.on("child_added", function(rowData){
   var users = rowData.val();
    var keys = Object.keys(users);
    // console.log(keys)
    var prevalues = [];
    for (k = 0; k < keys.length; k++){
        prevalues.push(users[keys[k]].ping)
    }
    // console.log('pre',prevalues);

    var values = [];
    for (p = 0; p < prevalues.length; p++){
        // console.log('inbtw', prevalues[p]);
        if (prevalues[p] == undefined){}
        else {
        var push = Object.values(prevalues[p])
        for (pu = 0; pu < push.length; pu++){
            glocations.push(push[pu]);
        }
        }
    }


    console.log('global locations',glocations);

});
}




function errData(err){
    console.log('Error!');
    console.log(err);
}


function globalupdate(){
    ref.on('value', global, errData)
}

var glocations = []
function global(data) {
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: new google.maps.LatLng(39.809860, -98.555183),
    mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var infowindow = new google.maps.InfoWindow();
    var marker;
    for (var i = 0; i < glocations.length; i++) {  
        marker = new google.maps.Marker({
        draggable: true,
        position: new google.maps.LatLng(glocations[i][1], glocations[i][2]),
        map: map, 
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
        infowindow.open(map, marker);
        infowindow.setContent('<div contentEditable="true" ' +
                                    'style="height: 100px;">' +
                                    'Title: '+ title +'<br>' + 'Description:'+ desc +'</div>');
        
        }
    })(marker, i), function() {
            marker.openInfoWindowHtml();
        });
    
    }//console.log(marker);  
}













//sign in/out stuff below

function onSignIn2(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    // $(".userName").text(profile.getName());
    // $("img").attr("src", profile.getImageUrl());
    // $(".email").text(profile.getEmail());
    googleSignin();
}

//authenticates users?
var provider = new firebase.auth.GoogleAuthProvider();
function googleSignin() {
   firebase.auth()
  
   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      var email = result.user.email;
  }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code)
      console.log(error.message)
   });
  
}
function googleSignout() {
   firebase.auth().signOut()
   .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')  
  });
} 

//called when "sign out" button clicked
function onSignOut() {
    console.log(gapi.auth2);
    gapi.auth2.init();
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        // $(".userName").text("USER_NAME");
        // $("img").attr("src", "assets/placeholder.png");
        // $(".email").text("example@example.com");
        window.location.href = "index.html";
    });
    googleSignout();
}

//sign in /out stuff above