
function getParam(name){
    var results = new RegExp ('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results){
        return results[1];
    }else{
        return undefined;
    }

}

function Missile (xp, yp, width, height, boolean){
    this.xp = xp;
    this.yp = yp;
    this.boolean = boolean;
    this.width = width;
    this.height = height;
}

var bullet = new Missile (400, 400, 5, 15, false);
var enbullet = new Missile (40, 40, 5, 5, false);

function Enemy(xp, yp, size, boolean, shape, point){
    this.xp = xp;
    this.yp = yp;
    this.size = size;
    this.boolean = boolean;
    this.shape = "Square";
    this.point = point;
}


var startsq = new Enemy (25, 25, 10, true);
var background1 = getParam("background1");
console.log(background1);
// var square = new enemy ("red", 25, 0);
// var circle = new enemy ("White", 50, 1);
function setup(){

    createCanvas(700,600);
    background("Black");
   
}

var row = getParam("row");
var column = getParam("column");


var engrid = [];
 for(i = 0; i < row; i++){
    engrid.push([]);
    for(j = 0; j < column; j++){
    engrid[i].push({});
    engrid[i][j] = new Enemy (startsq.xp + 2 *startsq.size * j , startsq.yp + 2 *startsq.size * i, startsq.size, true, "Square", 25);
    }
}



var bulletmov = 3;
var shoot = Math.round(Math.random());
var c = 1;  //x increment of enemies
var d = 0; //y increment (decrement?)
var s = 10; //size of squares
var xCoord = 400 //of ship
var yCoord = 400//of ship
var shheight = 15;
var shwidth = 40;
var life = 5;
var score = 0;
var startdummy = 25;
var shiptype = getParam("ship");
var missiletype = getParam("missile");
var miniontype = getParam("minion");
var cont = true;


function draw(){
        
        if (score == 25 * column * row){
            cont = false;
            createCanvas(width ,height);
            background("Black");
            textSize(30);
            fill("Yellow");
            text("You Won! Try again? click reset", 100, 90);

        }

        if (life <= 0){
            cont = false;
            createCanvas(width ,height);
            background("Black");
            textSize(30);
            fill("Yellow");
            text("Game Over...try again? click reset", 100, 90);

        }


        if (cont == true){
        createCanvas(width ,height);
        background("Black")
        fill("White");

        
        if (shiptype == "rectangle"){
            rect(xCoord, yCoord, shwidth, shheight);
        }

        else if (shiptype == "ellipse"){
            ellipse(xCoord, yCoord, shwidth, shheight);

        }
        if (keyIsDown(LEFT_ARROW)) {
                if (xCoord > 0) {
                    xCoord -= 5;
                }
        }

        if (keyIsDown(RIGHT_ARROW)) {
                if (xCoord + 50 < width) {
                    xCoord += 5;
                }
        }

        fill("red");
        for (ro = 0; ro < row; ro ++){                
            for (colum = 0; colum < column; colum++){
                if (engrid[ro][colum].boolean == true){  
                    shoot = Math.round(Math.random() * 100);
                    if (shoot == 41 && enbullet.boolean == false && engrid[ro][colum].boolean == true){
                        enbullet.boolean = true;
                        enbullet.xp = engrid[ro][colum].xp;
                        enbullet.yp = engrid[ro][colum].yp;
                    }
                    if (bullet.yp >= (engrid[ro][colum].yp) && bullet.yp <= (engrid[ro][colum].yp + engrid[ro][colum].size) ){
                        if (bullet.xp >= (engrid[ro][colum].xp) && bullet.xp <= (engrid[ro][colum].xp + engrid[ro][colum].size) ){
                            engrid[ro][colum].boolean = false;
                            bullet.xp = 500;
                            bullet.yp = 500;
                            bullet.boolean = false;
                            score += engrid[ro][colum].point
                        }

                }

                    if (engrid[ro][colum].boolean == false){print(ro, colum);}

                    else if (engrid[ro][colum].boolean  == true){      
                        if (engrid[ro][colum].shape == "Square"){           
                            rect(engrid[ro][colum].xp, engrid[ro][colum].yp, s, s);
                        }
                        engrid[ro][colum].xp += c;
                        engrid[ro][colum].yp += d;
                    }



                }
            }
    
        }

        startdummy +=c

        if (startdummy == 400){                           
            d = 10;      
            c = -1;         
        }
        else if (startdummy == 10){
            d = 10;
            c = 1;
        }

        else{
            d = 0;
        }

        textSize(20);
        fill("Yellow");
        text(String(life) + " " + "Lives", 400, 50);
        text("Score: " + " " + String(score), 400, 90);
        $("#showsc").empty();
        $("#showsc").prepend("<p>" + score + "</p>");


        if (bullet.boolean == false && keyIsDown(UP_ARROW)){
            
            bullet.boolean = true;
            bullet.xp = xCoord;
            bullet.yp = yCoord;        
        }

        if (bullet.boolean == true){
            ellipse(bullet.xp, bullet.yp, s, s);
            bullet.yp -= bulletmov;
        }

        if(bullet.yp <= 25){
            bullet.boolean =false;
        }
        
        if (enbullet.boolean == true){
            ellipse(enbullet.xp, enbullet.yp, enbullet.width, enbullet.height);
            enbullet.yp = enbullet.yp + bulletmov;
            

        }        

        if (enbullet.yp >= 500){
            enbullet.boolean = false;
        }


        if (enbullet.yp >= yCoord && enbullet.yp <= (yCoord + shheight)){
            if (enbullet.xp >= xCoord && enbullet.xp <= (xCoord + shwidth)){
            enbullet.yp = 0;
            enbullet.xp = 0;
            enbullet.boolean = false;
            life = life - 1;
            }
        }
        
        
    }

}
    
    



//adding later

//a break when a certain point is reached

