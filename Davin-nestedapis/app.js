

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    //console.log(data);
    var person = data.results[0]
    var userFirstName = person.name.first;
    var userLastName = person.name.last;
    var state = person.location.state;
    var nl = person.nat;
    $("body").append("<h1>You are " + userFirstName +" "+ userLastName + " and you  live in " + state + ". </h1>")
    $.ajax({
    url: 'https://restcountries.eu/rest/v2/all',
    dataType: 'json',
    success: function(data) {
        //console.log(data);
            for (i=0; i<data.length; i++){
                if (nl ==data[i].alpha2Code){
                    $("body").append("<p>"+data[i].name+"</p>");
                    break
                    }
                }
            }
         
    });
  }
});


