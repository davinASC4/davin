var database = firebase.database().ref();
var ref = firebase.database().ref('users');
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
function showFilter(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}
// function editMarker(){
//   var newtitle = prompt("Please enter The title of your ping:", "ping title");
//     if (newtitle != null) {
//         title = newtitle;}
//   var newdesc = prompt("Please enter a brief description of your ping:", "ping desc");
//     if (newdesc != null) {
//         desc = newdesc;}
// }

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
    // console.log('this',specificKey);
    // alert(1);
    // var row = rowData.val();
    // var name = row.NAME;
    // var message = row.MESSAGE;
    // var fullText = "<p>" + name + " : " + message + "</p>";
    // $(".allMessages").append(fullText);
    // console.log(rowData);
    // console.log(rowData.val());

    if (rowData.val()[specificKey].ping == undefined){
        console.log('theres nothing you dummy');
    }

    else {
        var values = Object.values(rowData.val()[specificKey].ping);
        for (v = 0; v < values.length; v++){
            locations.push(values[v]);
        }
        console.log('locations',locations);
        console.log (rowData.val()[specificKey].ping);
    }
    // console.log('p',locations);
});

function testlocal(){
    console.log(locations);
}

function initMap(){
    ref.on('value', initMap2, errData)
}

function initMap2(data) {
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: new google.maps.LatLng(39.809860, -98.555183),
    mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var infowindow = new google.maps.InfoWindow();
    var marker;
    for (var i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
        draggable: true,
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
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



function addMarker(){
    ref.once('value', addMarker1, errData);
}
function addMarker1(data){
  var user = firebase.auth().currentUser;
    // console.log(user);
    var email = user.email;
    var specificKey;
   var users = data.val();
   var userid = user.uid;
    var keys = Object.keys(users);
   for (var i = 0; i < keys.length; i++){
            var k = keys[i];
            if( userid == users[k].uid){
                specificKey = k;
                //specifickey is now found
                }
            }
    var refping = firebase.database().ref('users/' + specificKey + '/ping');
    //   var newtitle = prompt("Please enter The title of your ping:", "ping title");
    //     if (newtitle != null) {
    //         title = newtitle;}
    //   var newdesc = prompt("Please enter a brief description of your ping:", "ping desc");
    //     if (newdesc != null) {
    //         desc = newdesc;}
    locations.push(["Random", Math.random() * 10 + 30, Math.random() * 10 - 100, increment]);
    refping.push(locations[increment]);
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
        // // looks through database for user, if email is found push into database as a new user, otherwise do nothing
    }
}





// ref.on('value',);


//!!!!!!!!!bum code

function ping(){
    ref.once('value',ping1, errData);
}
function ping1(data){
    //gets current user; also good stuff
    var user = firebase.auth().currentUser;
    console.log(user);
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
   var ping = {
        description: 'sample text',
        duration: 'sample time',
    }
    // refping.push(ping);
}


function button1(){
    ref.once('value',keyData, errData);
}
function keyData(data){
    //gets current user; also good stuff
    var user = firebase.auth().currentUser;
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
    // $('.body').append("<p>" + specificKey + '</p>')
    console.log(specificKey);
}
