var database = firebase.database().ref();
var ref = firebase.database().ref('users');

//makes the date buggy
var time = new Date();
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
// makes the date

function errData(err){
    console.log('Error!');
    console.log(err);
}


//storing data into firebase and linking it to the current user via his/her email;

//need a function that returns the users key in the database "KYIUEWJK@KJ"
    //that way any other function would iterate through the databse and when it finds a matching key will
        //do something (...)



function searchPing() {
    var userSearch = document.getElementById("searchPing").value;
    var tag = document.getElementById("tagFilter").value;
    document.getElementById("response").innerHTML = "You searched for " + userSearch + " in " + tag;
}

var num = 0; // To test if is program first tiem running
var tagArray = ["guitar", "games", "beach", "xbox", "party", "football", "groupwork", "restaurant", "fundraiser", "soupkitchen", "newhouse", "comicbooks", "boardgame", "yoga", "cook"];
function addTag(id) {
    var newTag = document.getElementById(id).value;
    for (var i = 0; i < tagArray.length; i++) {
        if (newTag.toUpperCase() == tagArray[i].toUpperCase()) {
            return;
        }
        
    }
    tagArray.push(newTag);
}
function updateTagField() {
    for (var i = 0; i < tagArray.length; i++) {
        $(".tagChoiceField").append('<label class="tags btn btn-secondary">'
    + '<input type="checkbox" onclick="addTagsToCollection(' + i + ');" autocomplete="off" id="tag' + i + '">' + tagArray[i] + '</label>');
    }
}
function showFilter() {
    var e = document.getElementById('popUpFilter');
    if (e.style.display == 'block') {
        e.style.display = 'none';
    }
    else {
        e.style.display = 'block';
        updateTagField();
        console.log("I am here");
    }
}
var pingTags;
var temp = [];
function addTagsToCollection(num) {
    temp.push(tagArray[num]);
}
function addTagsToPing() {
    pingTags = temp;
    temp = [];
    for (var i = 0; i < pingTags.length; i++) {
        $(".addedToPing").append(pingTags[i]);
        console.log(pingTags[i]);
    }
    pingTags = [];
}
// clear tags in pop up window when submit or x button is clicked
function clearTags() {
    $(".tagChoiceField").empty();
}
function contains(text1, text2) {
    if (text1.indexOf(text2) != -1) {
        return true;
    } else return false;
}
$(function() { 
    $("#newTag").keyup(function() {
        console.log("key is up");
        var searchText = $("#newTag").val().toUpperCase();
        if (searchText == "") {
            $(".tagChoiceField .tags").each(function() {
                $(this).show();
            });
        }
        $(".tagChoiceField .tags").each(function() {
                if (contains($(this).text().toUpperCase(), searchText)) {
                    console.log($(this).text());
                    $(this).show();
    
                } 
                else {
                    $(this).hide();
                    console.log($(this).text());
                }
        });
    });
});


var locations = [];
var increment = 0;


database.on("child_added", function(rowData){
    var user = firebase.auth().currentUser;
    var email = user.email;
    var specificKey;
   var users = rowData.val();
    var keys = Object.keys(users);
   for (var i = 0; i < keys.length; i++){
            var k = keys[i];
            if( email == users[k].email){
                specificKey = k;
                }
            }

    if (rowData.val()[specificKey].ping == undefined){
        console.log('theres nothing you dummy');
    }
    else {
        var values = Object.values(rowData.val()[specificKey].ping);
        for (v = 0; v < values.length; v++){
            locations.push(values[v]);
        }
        // console.log('locations',locations);
        // console.log (rowData.val()[specificKey].ping);
    }
    // console.log('p',locations);
    increment = locations.length;
});



function initMap() {
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 6,
  center: new google.maps.LatLng(),
  mapTypeId: google.maps.MapTypeId.ROADMAP

});
var geocoder = new google.maps.Geocoder;
var infowindow = new google.maps.InfoWindow();
var marker;
for (var i = 0; i < locations.length; i++) {  
    function loadComments(){
        console.log(locations[i].Comments);
    }
  marker = new google.maps.Marker({
    draggable: true,
    position: new google.maps.LatLng(locations[i].Lat, locations[i].Long),
    map: map, 

  });
  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.open(map, marker);
      //


      infowindow.setContent('<div contentEditable="true" ' +
                                   'style="height: 100px; color: black;">' +
                                   'Title: '+ locations[i].Title +'<br>'  +
                                    'Description: ' + locations[i].Desc + '<br>' +
                                    'Date: ' + locations[i].Date + '<br>' + 
                                    'Duration: ' + locations[i].Duration + '<br>' + 
                                    'Address: ' + locations[i].Address + '<br>' +
                                    "<button onclick='showComments({ " + 'Time:' + locations[i].Time + ',' + 'Uid:' + ' "' + locations[i].Uid + '" ' + ","  +     "})'>"   + "Show comments </button>" + "<br>" +
                 
                                      '</div>');
      
    }
  })(marker, i), function() {
         marker.openInfoWindowHtml();
      });
  getglobalData();
  globalUpdate();
}//console.log(marker);  
      }

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {

    var mylat = position.coords.latitude;
    var mylong = position.coords.longitude;
    $('#Lat').val(mylat);
    $('#Long').val( mylong);
    $('#Latlng').val(mylat + "," + mylong )
        console.log(mylat, mylong, true);

}


function geocodeLatLng(geocoder, map, infowindow) {
    var geocoder = new google.maps.Geocoder;
        var input = document.getElementById('Latlng').value;
        var latlngStr = input.split(',', 2);

        var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
        console.log(latlng)
        geocoder.geocode({'location': latlng}, function(results, status) {
          if (status === 'OK') {
            if (results[0]) {

              $('#Address').val(results[0].formatted_address);
              
            } else {
              window.alert('No results found');
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });
      }


function addMarker(){
    ref.once('value', addMarker1, errData);
}

function addMarker1(data){

  var user = firebase.auth().currentUser;
    // console.log(user);
    var userid = user.uid;
    // console.log('www', userid)
    var specificKey;

   var users = data.val();
    var keys = Object.keys(users);

   for (var i = 0; i < keys.length; i++){
            var k = keys[i];
            if( userid == users[k].uid){
                specificKey = k;
                }
            }

    var refping = firebase.database().ref('users/' + specificKey + '/ping');



locations.push({
    Uid: userid,
    Title: $('#title').val(), 
    Lat: $('#Lat').val(), 
    Long: $('#Long').val(),
    Desc: $("#desc").val(),
     Date: today,
    Name: user.displayName,
    Duration: $('#dur').val(),
    Comments: {First: 'Beat you to it'},
    Time: time.getTime(),
    Address: String($('#Address').val())

});

refping.push({
    Uid: locations[increment].Uid,
    Title: locations[increment].Title,
     Lat: locations[increment].Lat, 
     Long: locations[increment].Long,
      Desc: locations[increment].Desc,
    Date: locations[increment].Date,
    Name: locations[increment].Name,
    Duration: locations[increment].Duration,
    Comments: locations[increment].Comments ,
    Time: locations[increment].Time,
    Address: locations[increment].Address

} );

initMap();
increment++;
// console.log(locations)

}




//adds new users
function newUser(){
ref.on('value', gotData, errData);
}
//good stuff; this adds new users

function gotData(data){
    
    //gets current user; also good stuff
    var user = firebase.auth().currentUser;
    console.log(user);
    var name = user.displayName;
    $(".userName").text(name);
    var email = user.email;
    $(".email").text(email);
    var userid = user.uid;
    var newperson = {
            name: name,
            email: email,
            uid: userid,
            ping: {}
        }
        
    // console.log(data.val());
    var users = data.val();
    console.log('This is users:', users);
    if (users == null){
        ref.push(newperson);
        console.log('it was null heres a new person')
    }
    else{
        var keys = Object.keys(users);
        console.log(keys);
        //checks current user's email
        var checker = false;
        
        //looks through database and checks if the user's email already exists; if it doesn't then it pushes it into database
        for (var i = 0; i < keys.length; i++){
            var k = keys[i];
            if( userid == users[k].uid){
                checker = true;
                break
                }
            }
        if (checker == false){
            ref.push(newperson)
            console.log('new user added')
            }
        // // looks through database for user, if uid is found push into database as a new user, otherwise do nothing
    }
}

//Golbal locations
var glocations = [];
function getglobalData(){
database.once("child_added", function(rowData){
    glocations = [];
   var users = rowData.val();
    var keys = Object.keys(users);
    var prevalues = [];
    for (k = 0; k < keys.length; k++){
        prevalues.push(users[keys[k]].ping)
    }

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
    // console.log('global locations',glocations);
});
}

//adds all pings to Map


function globalUpdate(){
    ref.once('value', global, errData)
}
var glocations = []

function addComment(ping){
    var pinglist;
    var refcomment;
    // console.log('hit i', ping.User)
    //established connectsion bewteen firebase and ping
    ref.once("value", function(rowData){
        var keys = Object.keys(rowData.val())
        
        // console.log(rowData.val())
        for (k = 0; k < keys.length; k++){
            // console.log(rowData.val()[keys[k]].uid)
            // console.log(rowData.val()[keys[k]].uid);
            // console.log(ping.Uid);
            
            if (rowData.val()[keys[k]].uid == ping.Uid){

                pinglist = Object.keys(rowData.val()[keys[k]].ping);
                console.log(pinglist.length, 'd')
                // console.log('work');
                for (pl = 0; pl < pinglist.length; pl++){
                    refcomment = firebase.database().ref('users/' + keys[k] + '/ping/' + pinglist[pl] + '/Comments');
                    // console.log('pop')
                    if (rowData.val()[keys[k]].ping[pinglist[pl]].Time == ping.Time ){
                        
                            var name = ping.User;
                            var comment = ping.message;
                            refcomment.push(
                                {
                                    name: name,
                                    message: comment,
                                }
                            )
                            break
                        
                    }
                    
                }

                break
            }
        }

    },
    
    )
}

function showComments(ping){
    $('#demo').empty()
    var pinglist;
    var refcomment;
    //established connectsion bewteen firebase and ping
    ref.once("value", function(rowData){
        var keys = Object.keys(rowData.val())
        // console.log(rowData.val())
        for (k = 0; k < keys.length; k++){
            // console.log(rowData.val()[keys[k]].uid)
            if (rowData.val()[keys[k]].uid == ping.Uid){
                pinglist = Object.keys(rowData.val()[keys[k]].ping);
                // console.log('work')
                for (pl = 0; pl < pinglist.length; pl++){
                    if (rowData.val()[keys[k]].ping[pinglist[pl]].Time == ping.Time ){
                        //loop through comments and prints all comments
                        var comments = Object.keys(rowData.val()[keys[k]].ping[pinglist[pl]].Comments)
                        for (c = 0; c < comments.length; c++){
                            if (c!= comments.length-1){
                                console.log(rowData.val()[keys[k]].ping[pinglist[pl]].Comments[comments[c]]);
                                $('#demo').append(rowData.val()[keys[k]].ping[pinglist[pl]].Comments[comments[c]].name + ":" + rowData.val()[keys[k]].ping[pinglist[pl]].Comments[comments[c]].message)
                            }
                        }
                        break
                    }
                }

                break
            }
        }

    },
    
    )
}


function global(data) {
    var user = firebase.auth().currentUser;
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: new google.maps.LatLng(40.730610, -73.935242),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});
    var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow();
    var marker;
    for (var i = 0; i < glocations.length; i++) {  
        marker = new google.maps.Marker({
        draggable: true,
        position: new google.maps.LatLng(glocations[i].Lat, glocations[i].Long),
        map: map, 
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
        infowindow.open(map, marker);
        console.log(user.displayName)
     infowindow.setContent('<div contentEditable="true" ' +
                                   'style="height: 100px; color: black;">' +
                                   'Title: '+ glocations[i].Title +'<br>'  +
                                    'Description: ' + glocations[i].Desc + '<br>' +
                                    'Date: ' + glocations[i].Date + '<br>' + 
                                    'Duration: ' + glocations[i].Duration + '<br>' + 

                                    'Address: ' + glocations[i].Address + '<br>' +

                                     'posted by ' + glocations[i].Name     + '<br>' +
                                     
                                    "<button onclick='showComments({ " + 'Time:' + glocations[i].Time + ',' + 'Uid:' + ' "' + glocations[i].Uid + '" ' + ","  +     "})'>"   + "Show comments </button>" + "<br>" +
                                    
                                    "<button type='button' class='btn btn-info' data-toggle='collapse' data-target='#demo' onclick= 'addComment({ " + 'Time:' + glocations[i].Time + ',' + 'Uid:' + ' "' + glocations[i].Uid + '" ' + ","  + 'User:' + ' "' +user.displayName + '" ' + ',' + 'message:' + '5' +     "})'>"   + "Add comment </button>" + "<br>" +
                                     
                                     "<div class='collapse' id='demo'>"   +


                                     "</div>"   +

                                      '</div>');
      
    }





    })(marker, i), function() {
            marker.openInfoWindowHtml();
        });
    
    }//console.log(marker);  
}

function addglobalMarker(){
    ref.once('value', addglobalMarker1, errData);
}

function addglobalMarker1(data){

  var user = firebase.auth().currentUser;
    // console.log(user);
    var email = user.email;
    var specificKey;

   var users = data.val();
    var keys = Object.keys(users);

   for (var i = 0; i < keys.length; i++){
            var k = keys[i];
            if( email == users[k].email){
                specificKey = k;
                }
            }

    var refping = firebase.database().ref('users/' + specificKey + '/ping');


addMarker();

getglobalData();
globalUpdate();

}





//sign in/out

//called when successful user log in
function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text(profile.getName());
    $("img").attr("src", profile.getImageUrl());
    $(".email").text(profile.getEmail());
   window.location.href = "position.html";
    googleSignin();

}

function onSignIn2(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text(profile.getName());
    $("img").attr("src", profile.getImageUrl());
    $(".email").text(profile.getEmail());
    googleSignin();
    initMap()
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
        $(".userName").text("USER_NAME");
        $("img").attr("src", "assets/placeholder.png");
        $(".email").text("example@example.com");
        window.location.href = "index.html";
    });
    googleSignout();
}

// document.getElementById('submit').addEventListener('click', function() {
//           geocodeLatLng(geocoder, map, infowindow);
//         });
//sing in/out