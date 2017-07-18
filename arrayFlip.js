//

function arrayFlip(list){
    var flipped = [];
    i = list.length
    while (i != -1){
            flipped.push(list[i]);
            i = i - 1;
    }     
    return(flipped);
}

var prompt = require('prompt-sync')();

var more = "y"
var numb = ""
var arrlist = []

while (more == "y"){
    numb = prompt("Give a number: ");
    arrlist.push(numb)
    more = prompt("Do you want to give another number for this array (y/n): ");

}

console.log("Here's the array so far",arrlist);
console.log("Let's flip");



console.log(arrayFlip(arrlist));



