//Set database object

var database = firebase.database().ref();
var ref = firebase.database().ref('users');


//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        // setting back to default
        $(".userName").text("USER_NAME");
        $(".email").text("example@example.com");
    });
    googleSignout();

}

//brings google data
function onSignIn(googleUser){
     var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    var name = profile.getName();
    var image = profile.getImageUrl();
    var email = profile.getEmail();
    $(".userName").text(name);
    $("img").attr("src", image);
    $(".email").text(email);
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

// ///

//good stuff; this adds new users

function errData(err){
    console.log('Error!');
    console.log(err);
}


//storing data into firebase and linking it to the current user via his/her email;

//need a function that returns the users key in the database "KYIUEWJK@KJ"
    //that way any other function would iterate through the databse and when it finds a matching key will
        //do something (...)


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
    // $('.body').append("<p>" + specificKey + '</p>')
    // console.log(specificKey);
    // !!!!should declare specific key as global variable!!!!! 


//testing
    var refping = firebase.database().ref('users/' + specificKey + '/ping');

    var ping = {
        lat: 100,
        long: 79,
        description: 'sample text',
        duration: 'sample time',
    }
    refping.push(ping);

}


function newUser(){
ref.once('value', gotData, errData);
}

//good stuff; this adds new users
function gotData(data){

    //gets current user; also good stuff
    var user = firebase.auth().currentUser;
    console.log(user);

    var name = user.displayName;
    $(".userName").text(name);
    console.log(name);

    var email = user.email;
    $(".email").text(email);
    console.log(email);

    // console.log(data.val());
    var users = data.val();
    console.log('This is users:', users);
    var keys = Object.keys(users);
    console.log(keys);

    //checks current user's email
    var checker = false;
    var neww = {
        name: name,
        email: email,
        ping: {dummy: 0}
        }
    //looks through database and checks if the user's email already exists; if it doesn't then it pushes it into database
    for (var i = 0; i < keys.length; i++){
        var k = keys[i];
        if( email == users[k].email){
            checker = true;
            break
            }
        }
    if (checker == false){
        ref.push(neww)
        console.log('new user added')
        }
    // // looks through database for user, if email is found push into database as a new user, otherwise do nothing

}





