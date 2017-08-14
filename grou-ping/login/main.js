//called when successful user log in
function onSignIn(googleUser) {
    console.log('User signed in!');
    window.location.href = "../profile/profile.html";
    // var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    // $(".userName").text(profile.getName());
    // $("img").attr("src", profile.getImageUrl());
    // $(".email").text(profile.getEmail());
}

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        // $(".userName").text("USER_NAME");
        // $(".email").text("example@example.com");
    });
}
