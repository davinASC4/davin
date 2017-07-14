//

var prompt = require('prompt-sync')();

var mashArray = ["Battlefield", "Final destination", "Dream Land", "Fountain of Dreams"]
var firstQuestion = [2,7,3];
var secondQuestion = ["Link", "Metaknight", "Pikachu"]

function randnum(length){ //randomnumber function using length of array as parameter
    var x = Math.round(Math.random()*length)
    return x
}

function userinpu(x,y){ //x = first; y = second
    var a = prompt("How many times will you strike?");
    x.push(a);
    var b = prompt("Who will you choose to fight?");
    y.push(b);
    return(x,y)
}

userinpu(firstQuestion,secondQuestion);

console.log(firstQuestion);
console.log(secondQuestion);


function logg(x,y,z){  //z = masharray
    var c = x[randnum(x.length)];
    var d = y[randnum(y.length)];
    var e = z[randnum(z.length)];
    console.log("You fought", d, "in the", e, "and hit them", c, "times. Too bad. Mewtwo wins!");

}

logg(firstQuestion, secondQuestion, mashArray);