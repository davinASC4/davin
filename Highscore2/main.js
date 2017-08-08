
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
    window.location.href = "/highScore/index.html"
    
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

function rps(x){
    var playerChoice = x;
    console.log(playerChoice);
    var comp = ['r', 's', 'p'];
    var compChoice = comp[Math.round(Math.random()*2)];
    
   if (playerChoice == compChoice) {
        $(".output").empty();
        $(".output").append("<h3>It's a tie!</h3>");
    }
    else if (playerChoice == 'r') {
        if (compChoice == 'p') {
            $(".output").empty();
            $(".output").append("<h3>You lost! Paper covers rock.</h3>");
        }
        else if (compChoice == 's') {
            $(".output").empty();
            $(".output").append("<h3>You won! Rock smashes scissors.</h3>");
        }
    }
    else if (playerChoice == 'p') {
        if (compChoice == 'r') {
            $(".output").empty();
            $(".output").append("<h3>You won! Paper covers rock.</h3>");
        }
        else if (compChoice == 's') {
            $(".output").empty();
            $(".output").append("<h3>You lost! Scissors cut paper.</h3>");
        }
    }
    else if (playerChoice == 's') {
        if (compChoice == 'p') {
            $(".output").empty();
            $(".output").append("<h3>You won! Scissors cut paper.</h3>");
        }
        else if (compChoice == 'r') {
            $(".output").empty();
            $(".output").append("<h3>You lost! Rock smashes scissors.</h3>");
        }
    }

}

