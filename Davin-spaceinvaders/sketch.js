function enemy(color, point, rowz){

    this.point = point;
    this.color = color;
    this.rowz = rowz
}

function Missile (xp, yp, width, height, boolean){
    this.xp = xp;
    this.yp = yp;
    this.boolean = boolean;
    this.width = width;
    this.height = height;
}


// var square = new enemy ("red", 25, 0);
// var circle = new enemy ("White", 50, 1);
function setup(){
    createCanvas(800,800);
    background("Black");
}

var row = prompt("How many rows would you like? ");
var column = prompt("How many columns would you like? ");
 var playgrid = [];
 

for (plug = 0; plug < row; plug++){
                                                     //these 'for' loops would make a boolean matrix (?) named playgrid like above;
     playgrid.push([])
     
    for (jam = 0; jam < column; jam++){  
        playgrid[plug].push (true);
    }

}


var bullet = new Missile (400, 25, 5, 15, false);
var bulletmov = 1;
var enbullet = new Missile (40, 40, 5, 5, false);
var shoot = Math.round(Math.random());
var a = 25; //x coordinate of first square
var b = 25; //y coodrinate of first square
var c = 1;  //x increment
var d = 1; //y increment (decrement?)
var s = 10; //size of squares
var xCoord = 400 //
var yCoord = 400//
var shheight = 15;
var shwidth = 40;
var life = 3;
function draw(){


    shoot = Math.round(Math.random());
   createCanvas(800,800);
    background("Black");
    fill("White");
    rect(xCoord, yCoord, shwidth, shheight);
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
  
    for (ro = 0; ro < playgrid.length; ro ++){                
        for (colum = 0; colum < playgrid[0].length; colum++){
            
            if (playgrid[ro][colum] == true){  
                  if (shoot == 1 && enbullet.boolean == false){
                    enbullet.boolean = true;
                    enbullet.xp = a + 2*s*(colum)
                    enbullet.yp = b + 2 *s* (ro)
                }
                
                if ( bullet.xp == a + 2*s*(colum) && bullet.yp ==  b + 2 *s* (ro) && bullet.boolean == true){
                    bullet.boolean= false;
                    playgrid[ro][colum] = false;
                    
                }
                else{                
                rect(a + 2*s*(colum), b + 2 *s* (ro), s, s);
                }

            }
        }
  
    }

    if (a == 400){                           
            b = b + d;      
            c = -1;         
        }
    else if (a == 10){
        b = b + d;
        c = 1;
    }
    a = a + c      
    textSize(30);
    fill("Yellow");
    text(String(life), 600, 50);

    if (bullet.boolean == false){
        rect(xCoord + shwidth/2 , yCoord + shheight/2 , bullet.width, bullet.height);
        
    }

    

    if (bullet.boolean == true){

    }

    if (enbullet.boolean == true){
        ellipse(enbullet.xp, enbullet.yp, enbullet.width, enbullet.height);
        enbullet.yp = enbullet.yp + bulletmov;

    }        

    if (enbullet.yp == 500){
        enbullet.boolean = false;
    }
    
    if (enbullet.yp >= yCoord && enbullet.yp <= yCoord + shheight && enbullet.xp >= xCoord && enbullet.xp <= xCoord + shwidth){
        enbullet.boolean = false;
        life = life - 1;

        if (life <= 0){
            life = life - 1;
            alert("Game");
        }
    }

    
}

function keyPressed(){
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
}


//adding later
//a checking array to compare the x,y positions of the enemies and the moving bullet
//a break when a certain point is reached
//should link enemies to boolean table even further so that if it's false it won't draw the enemy instead of making it black

