var HP = 100;
var gold = 0;
var numberDefeated = 0;

function updateStats(){
    $("#stats").text("HP: " + HP + " // Gold: " + gold + " //Ogres Slain" + numberDefeated);


}

function attack(){
    if (HP>0){
        if (Math.random()*100 > gold){
            gold = 10 + gold;
            numberDefeated = numberDefeated + 1;

            $("#ogres").prepend(
                "<p style='color:blue'> You won! + 10 gold. </p>"
            );
        }

        else {
            gold--;
            HP--;
            $("#ogres").prepend(
                "<p style='color: red'> You lost! - 1 gold </p>"
            );

        }

        updateStats();
        spawnOgre();

    }

    else{
        //game over
        $("#ogre").prepend(
            "<h1> GAME OVER </h1>"
        );

    }

}

function spawnOgre(){
    $("#ogres").prepend(
        "<img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRffdO9JT7Utec3_9peZi1_tGlxHo8C1lk9ejD0aGK2Bus5R8LDLUJrhqk' />"
    );


}
function setup(){
    $("body").append(
        "<h1> Welcome to Ogre Fighter v.1.0 </h1>"
    );

    $("body").append(
        "<div> <h3>STATS</h3> <p id='stats'></p> </div> "
    );

    $("body").append(
        "<button onclick='attack()'> Attack me! </button>"
    )

    $("body").append(
        "<div id='ogres'> </div> "

    );
    updateStats();
    spawnOgre();

}



//setup html

//add title to html - requires some setup

//show user stats (....)

//add random images to start of body tag - require setup

//when player clicks attack button - require setup

//if he/she/it has hp
    //if it defeats ogre 
        //add <p></p> saying you win
        //+gold

    //else
        //add <p></p> saying you lost
        //-gold
        //-hp
    
    // update stats
    //add random image

//else
    //add <p></p> game over



$(document).ready(setup);


