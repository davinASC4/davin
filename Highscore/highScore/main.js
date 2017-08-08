
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
    $("body").append("<p>test code</p>")
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
    var playChoice = x;
    console.log(playChoice);
    var comp = ['r', 's', 'p']
    var compChoice = comp[Math.round(Math.random()*2)] ;

    if (playChoice == "r" && compChoice == "s"){
        console.log("you won rock beats scissors")
        $(".screen").append("<p> you won rock beats scissors </p>")
    }

    if (playChoice == "r" && compChoice == "p"){
        console.log("you lost paper smacks rock")
        $(".screen").append("<p> you lost paper smacks rock </p>")        
    }

    if (playChoice == compChoice){
        console.log("tie")
    }

    if (playChoice == "s" && compChoice == "p"){
        console.log("you lost scissors chops paper")
        $(".screen").append("<p> you lost scissors chops paper </p>")        
        
    }

    if (playChoice == "s" && compChoice == "r"){
        console.log("you lost rock cracks scissors")
        $(".screen").append("<p> you lost rock cracks scissors </p>")        
        
    }

    if (playChoice == "p" && compChoice == "s"){
        console.log("you lost scissors shredes paper")
        $(".screen").append("<p> you lost scissors shredes paper </p>")        
        
    }

    if (playChoice == "p" && compChoice == "r"){
        console.log("you win paper somehow beats rock")
        $(".screen").append("<p> you win paper somehow beats rock </p>")        
        
    }
}


