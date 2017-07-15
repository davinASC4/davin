//

var prompt = require('prompt-sync')();

function pokemon (atk, def, hp, legend, name, type){ //pokemon class
    this.atk = atk;
    this.def = def;
    this.hp = hp;
    this.legend = legend;
    this.name = name;
    this.type = type;

}

function printRoster(list){ //Lists Roster
    for (i = 0; i < list.length; i++){
        console.log(list[i]);
        console.log("------------------------")
    }
    return "";
}

function pokemonattacked(liss){ //Your boys have been hurt!
    for (i = 0; i < liss.length; i++){
        liss[i].hp = liss[i].hp - 10;
    console.log(liss)
}
}

function usad(x){ //User inputs a pokemon
    var e = prompt("What pokemon do you want in this roster? ");
    var a = prompt ("How much atk? ");
    var b = prompt ("How much def? ");
    var c = prompt ("How much hp? ");
    var d = prompt ("Legendary? ");
    var f = prompt ("Type? ");
    var y = new pokemon (a, b, c, d, e, f);
    x.push(y);

}

var gyarados = new pokemon (125, 79, 95, false, "Gyarados", ["Flying", "Water"]);

var mewtwo = new pokemon (110, 90, 106, true, "Mewtwo", ["Psychic"]);

var rapidash = new pokemon (100, 70, 65, false, "Rapidash", ["Fire"]);

var raichu = new pokemon (90, 55, 60, false, "Raichu", ["Electric"]);

var gastly = new pokemon (35, 30, 30, false, "Gastly", ["Ghost", "Poisin"]);

var golduck = new pokemon (82, 78, 80, false, "Golduck", ["Water"]);


var roster = [gyarados, mewtwo, rapidash, raichu, gastly, golduck];

//printRoster(roster);

//pokemonattacked(roster);


///Bonus

//console.log(usad(roster));

function pokemonBattle (x,y){
    
}


