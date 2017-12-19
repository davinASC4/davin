

$(function(){
var database = firebase.database().ref();
var ref = firebase.database().ref('users');
var golocations = [];
database.on("child_changed", function(rowData){
    golocations = [];
    console.log(true);
    
   var users = rowData.val();
    var keys = Object.keys(users);
    console.log(keys)
    var prevalues = [];
    for (k = 0; k < keys.length; k++){
        prevalues.push(users[keys[k]].ping)
    }
    console.log('pre',prevalues);
    for (p = 0; p < prevalues.length; p++){
        // console.log('inbtw', prevalues[p]);
        if (prevalues[p] == undefined){}
        else {
        var push = Object.values(prevalues[p])
        for (pu = 0; pu < push.length; pu++){
            golocations.push(push[pu]);
        }
        }
    }

    //sort objects by the time they were made;

    golocations.sort(function(a, b) {
    return a.Time - b.Time;
    });


    $('#feed').empty();
    for (g=golocations.length-1; g>=0; g--){
        var gcenterlat = golocations[g].Lat;
        var gcenterlon = golocations[g].Long;
        
        $("#feed").append("<div class = 'jumbotron'><p> Lat:" + 
        golocations[g].Lat  +"</p> <p> Long:" + golocations[g].Long  +
        "</p>" + "<p> Desc:"+ golocations[g].Desc   +"</p>" + "<hr><p> Name:" + golocations[g].Name  +
        "<button onclick='set(" + gcenterlat  + ","+ gcenterlon  +")'>findme</button>" +
        "<button onclick='global()' > zoom </button>" +
        
        "</p></div>");
    }


});
});

function set(x,y){
    $('#zoom').val(15);
    if($('#zoom').val() >= 0) { 
        $('#centerlat').val(x);
         $('#centerlon').val(y)
     }

}
