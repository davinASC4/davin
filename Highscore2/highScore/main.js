
// //button executes this function
// function updateDB(){
//     var choice = $("#rock").val();
//     console.log(choice);
//     return(choice);
// }

// function rock(){
//     return('r');
// }

//rps game

//called when successful user log in
function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text(profile.getName());
    $("img").attr("src", profile.getImageUrl());
    $(".email").text(profile.getEmail());
    
}

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $(".userName").text("USER_NAME");
        $("img").attr("src", "assets/placeholder.png");
        $(".email").text("example@example.com");
    });
}




function rps(x) {
    var playerChoice = x;
    console.log(playerChoice);
    var comp = ['r', 's', 'p'];
    var compChoice = comp[Math.round(Math.random()*2)];
    console.log(compChoice);
    
   if (playerChoice == compChoice) {
        $(".body").append("<h3>It's a Tie!</h3>");
    }
    else if (playerChoice == 'r') {
        if (compChoice == 'p') {
            console.log("<h3>You lost! You chose rock and Computer chose paper</h3>")
            $(".body").append("<h3>You lost! You chose rock and Computer chose paper</h3>");
        }
        else if (compChoice == 's') {
            $(".body").append("<h3>It's a Tie!</h3>");
        }
    }
    else if (playerChoice == 'p') {
        if (compChoice == 'p') {
            $(".body").append("<h3>It's a Tie!</h3>");
        }
        else if (compChoice == 's') {
            $(".body").append("<h3>It's a Tie!</h3>");
        }
    }
    else if (playerChoice == 's') {
        if (compChoice == 'p') {
            $(".body").append("<h3>It's a Tie!</h3>");
        }
        else if (compChoice == 's') {
            $(".body").append("<h3>It's a Tie!</h3>");
        }
    }



}

