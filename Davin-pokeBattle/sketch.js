//

function Pokemon (name, HP, moves){ //pokemon class

    this.name = name;
    this.HP = HP;
    this.moves = moves;

}

function Move (name, dmg){
    this.name = name;
    this.dmg = dmg;
}

var p1 = [];
var comp = [];


//pokemon
var charizard = new Pokemon ("charizard", 100, []);
var pikachu = new Pokemon ("Pikachu", 100, []);

//move
var flamethrower= new Move("flamethrower", 25);
var fly= new Move("fly", 15);
var slash= new Move("slash",10);
var ember= new Move("ember", 5);

var thunderbolt = new Move("thunderbolt" , 25);
var electroBall = new Move("electroBall" , 30);
var ironTail = new Move("ironTail" , 20);
var tackle = new Move("tackle" , 10);

//pokeassoMoves
var charmovelist=[flamethrower,fly, slash, ember];
var pikamovelist=[thunderbolt, electroBall, ironTail, tackle];

p1.push(charizard);
comp.push(pikachu);


charizard.moves.push(charmovelist);
pikachu.moves.push(pikamovelist);

console.log(p1);
console.log("");



var b = 1
console.log(p1[0].name, "used", p1[0].moves[0][b].name, "on", comp[0].name);
console.log(comp[0]);


function setup(){
    createCanvas(1000,1000);
    background(150);

   fill("LightCoral");
    rect(50,25,150,50);

   fill("CornflowerBlue");
    rect(600,400,150,50);


    //button 1
    fill("Yellow");
    rect(20,530,150,50);
    fill("Black");
    text("Flamethrower", 32,545,150,50);

   //button 2
    fill("Yellow");
    rect(200,530,150,50);
    fill("Black");
    text("Fly", 270,545,150,50);

   //button 3
    fill("Yellow");
    rect(370,530,150,50);
    fill("Black");
    text("Slash", 410,545,150,50);

   //button 4
    fill("Yellow");
    rect(530,530,150,50);
    fill("Black");
    text("Ember", 570,545,150,50);

}


function draw(){

    text(String(charizard.name), 600, 400);
    text(String(charizard.HP), 600, 425);
    text(String(pikachu.name), 50, 25);
    text(String(pikachu.HP), 50, 50);


}


var check = false;

function keyPressed(){
    
    var cm = Math.round(Math.random() * 2);

    check = true;
    if (check == true){
        p1[0].HP = p1[0].HP - comp[0].moves[0][cm+1].dmg;
    }

    if (key > 0 && key < 4){
        b = key;
    }

    comp[0].HP = comp[0].HP - p1[0].moves[0][b-1].dmg;
    clear()

    createCanvas(1000, 1000);
    background(150);

   fill("LightCoral");
    rect(50,25,150,50);

   fill("CornflowerBlue");
    rect(600,400,150,50);

    textSize(20);
    
    //button 1
    fill("Yellow");
    rect(20,530,150,50);
    fill("Black");
    text("Flamethrower", 32,545,150,50);

   //button 2
    fill("Yellow");
    rect(200,530,150,50);
    fill("Black");
    text("Fly", 270,545,150,50);

   //button 3
    fill("Yellow");
    rect(370,530,150,50);
    fill("Black");
    text("Slash", 410,545,150,50);

   //button 4
    fill("Yellow");
    rect(530,530,150,50);
    fill("Black");
    text("Ember", 570,545,150,50);


    text(String(charizard.name), 600, 400);
    text(String(charizard.HP), 600, 425);
    text(String(pikachu.name), 50, 25);
    text(String(pikachu.HP), 50, 50);

    

    return false
}

var pop = ""
function mouseClicked(){

    if (mouseY > 505 && mouseY < 555){
        if (mouseX < 20 && mouseX > 30){
            pop = 1
        }
        
    }

    var cm = Math.round(Math.random() * 2);

    check = true;
    if (check == true){
        p1[0].HP = p1[0].HP - comp[0].moves[0][cm+1].dmg;
    }

    comp[0].HP = comp[0].HP - p1[0].moves[0][pop-1].dmg;
    clear()

    createCanvas(1000, 1000);
    background(150);

   fill("LightCoral");
    rect(50,25,150,50);

   fill("CornflowerBlue");
    rect(600,400,150,50);

    textSize(20);
    
    //button 1
    fill("Yellow");
    rect(20,530,150,50);
    fill("Black");
    text("Flamethrower", 32,545,150,50);

   //button 2
    fill("Yellow");
    rect(200,530,150,50);
    fill("Black");
    text("Fly", 270,545,150,50);

   //button 3
    fill("Yellow");
    rect(370,530,150,50);
    fill("Black");
    text("Slash", 410,545,150,50);

   //button 4
    fill("Yellow");
    rect(530,530,150,50);
    fill("Black");
    text("Ember", 570,545,150,50);


    text(String(charizard.name), 600, 400);
    text(String(charizard.HP), 600, 425);
    text(String(pikachu.name), 50, 25);
    text(String(pikachu.HP), 50, 50);

    pop = "";    

    return false
}









