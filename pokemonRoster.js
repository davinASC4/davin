//

var prompt = require('prompt-sync')();

function looplog(array){
    for (i = 0; i <= array.length; i++){
        console.log (array[i])
        console.log ("--------------")
    }
}

function userput(array){
    var user = [];
    var nam = prompt("What is the name of your pokemon? ");
    user.push(nam);
    var type = prompt("What type is ", nam);
    user.push("Type: " + type);
    var HP = prompt("How much HP does", nam, "have ?");
    user.push("HP: " + HP)
    var ATK = prompt("How much ATK does", nam, "have ?");
    user.push("ATK: " + ATK)
    var DEF = 
    array.push (user);
    console.log(array);
}

function check(array){

}




var roster = [
    ["Metapod", "Type: Bug", "HP: 50", "ATK: 20", "DEF: 55", "Legend: false"],
    ["Raichu", "Type: Electric", "HP: 60", "ATK: 90", "DEF: 55", "Legend: false"],
    ["Golduck", "Type: Water", "HP: 80", "ATK: 82", "DEF: 78", "Legend: false"],
    ["Abra", "Type: Psychic", "HP: 25", "ATK: 20", "DEF: 15", "Legend: false"],
    ["Rapidash", "Type: Fire", "HP: 65", "ATK: 100", "DEF: 70", "Legend: false"],
    ["Gastly", "Type: Ghost and Poisin", "HP: 30", "ATK: 35", "DEF: 30", "Legend: false"],  

];


looplog(roster);
userput(roster)


