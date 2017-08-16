var database = firebase.database().ref();
var ref = firebase.database().ref('users');


var refuser;
var locations = [];
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
    refuser = users[specificKey];
    console.log(refuser);
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
        //would refuser.ping work just the same?
        console.log (rowData.val()[specificKey].ping);
    }
    // console.log('p',locations);
});

function pop(){
    console.log(refuser)
}
function displayInfo(){
    findName();
    findPing();
}


function errData(err){
    console.log('Error!');
    console.log(err);
}

//finds name/nickname and displays it
function findName(){
    ref.on('value', findName2, errData)
}

function findName2(data){
    var user = firebase.auth().currentUser;
    var userid = user.uid;
    var specificKey;
   var users = data.val();
//    console.log(users);
    var keys = Object.keys(users);
   for (var i = 0; i < keys.length; i++){
            var k = keys[i];
            if( userid == users[k].uid){
                specificKey = k;
                }
            }
    var userData = users[specificKey];
    $("body").append("<p>" + userData.name  +"</p>")
}

//finds recent pings and displays it 
function findPing(){
    ref.on('value', findPing2, errData)
}

function findPing2(data){
    var user = firebase.auth().currentUser;
    var userid = user.uid;
    var specificKey;
   var users = data.val();
//    console.log(users);
    var keys = Object.keys(users);
   for (var i = 0; i < keys.length; i++){
            var k = keys[i];
            if( userid == users[k].uid){
                specificKey = k;
                }
            }
    var userData = users[specificKey];
    var values = Object.keys(userData.ping);
    console.log('values',values);
    for (v = 0; v < values.length; v++){
                $("body").append("<p> Title:" + userData.ping[values[v]].Title  +"</p>");
            
                $("body").append("<p> Lat:" + userData.ping[values[v]].Lat  +"</p>");
            
                $("body").append("<p> Long:" + userData.ping[values[v]].Long  +"</p>");
                
                $("body").append("<p> Desc:" + userData.ping[values[v]].Desc  +"</p>");

                $("body").append("<p></p>")
            
        
    }
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





