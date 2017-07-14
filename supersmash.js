//
var prompt = require ('prompt-sync')();
var mashArray = ["Bed", "Queens", "Brook", "Cloud"];
var firstQuestion = [3,4];
var secondQuestion = ["Mario", "Kirby"];

function smash (a,b){
    x = prompt("How many times will you strike?");
    y = prompt ("Who will you choose to fight?")
    a.push(x);
    b.push(y);
    console.log(a,b)
    return (a,b)
   
}



console.log(smash(firstQuestion,secondQuestion));
