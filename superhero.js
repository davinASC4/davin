//

function Superhero(realName, ability, gender, archenemy, weakness){
    this.realName = realName;
    this.ability = ability;
    this.gender = gender;
    this.archenemy = archenemy; 
    this.weakness = weakness;

this.talk = function(){
    console.log("Yo my name is " + realName);
    }
this.callforhelp = function(call){
    console.log(call)
    }
}



var wonderwoman = new Superhero("Diana Prince", "Super Strength", "Female", "Donald Trump");
var superman = new Superhero("Clark Kent", "Dat flying", "Male", "Lex Luthor", "Green Rocks");

wonderwoman.callforhelp("I need help");
superman.callforhelp("Nah dog");
superman.ability = "Laser Vision";


//console.log(superman);



