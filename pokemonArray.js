//pokemonArray

var myPokemonRoster = ["magikarp", "meowth", "scizor", "jigglepuff", "voltorb"];

var firstToFight = [myPokemonRoster[0]];
var secondToFight = [myPokemonRoster[1]];

myPokemonRoster.pop();
myPokemonRoster.push("shuppet", "unknown: musical note");

var RosterSize = myPokemonRoster.length;

//console.log(myPokemonRoster, RosterSize);

//Garry's challenge

var newRoster = []

for (var i = 0; i < RosterSize; i++){
    newRoster.push(myPokemonRoster[i]);
}

newRoster.push("pikachu", "mr.mime");

//console.log(newRoster)

//Looping Pokemon

for (var i = 0; i < 5; i ++){
    console.log(myPokemonRoster[i]);
}

for (var i = 0; i < myPokemonRoster.length; i++){
    console.log(myPokemonRoster[i]);
}