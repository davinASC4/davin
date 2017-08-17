

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
    $('#feed').empty();
    console.log('global locations',glocations);
    for (g=golocations.length-1; g>=0; g--){
        $("#feed").append("<div class = 'jumbotron'><p> Lat:" + 
        golocations[g].Lat  +"</p> <p> Long:" + golocations[g].Long  +
        "</p>" + "<p> Desc:"+ golocations[g].Desc   +"</p>" + "<hr><p> Name:" + golocations[g].Name  +"</p></div>");
        console.log(golocations[g].Lat)
    }
});
});


