

function capit(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    //console.log(data);
    var person = data.results[0]
    var userFirstName = capit(person.name.first);
    var userLastName = capit(person.name.last);
    var state = capit(person.location.state);
    var picture = person.picture.large;
    $("body").append("<h1>You are " + userFirstName +" "+ userLastName + " and you  live in " + state + ". </h1>")
    $("body").append("<img src = ' " + picture + " ' >")


  }
});