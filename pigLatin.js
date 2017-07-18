//pig latin

var prompt = require("prompt-sync")();

function piggy(x){
    x = x.toLowerCase();
    var pigged = x.charAt(1).toUpperCase() + x.slice(2,x.length) + x.charAt(0) + "ay";
    return pigged 
}


var usr = prompt("Give me a word to translate into pig latin: ");

var newr = piggy(usr);

console.log(newr);

