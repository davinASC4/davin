// function enemy(color, point, rowz){

//     this.point = point;
//     this.color = color;
//     this.rowz = rowz
// }

// function missile (xp, yp){
//     this.xp = xp;
//     this.yp = yp;
// }


// var square = new enemy ("red", 25, 0);
// var circle = new enemy ("White", 50, 1);
function setup(){
    createCanvas(800,800);
    background("Black");
}

var row = prompt("How many rows would you like? ");
var column = prompt("How many columns would you like? ");
 
 var playgrid = [];
 
var rowd = []


for (jam = 0; jam < column; jam++){    //these 'for' loops would make a boolean matrix (?) named playgrid like above;
     rowd.push(true);
     }
for (plug = 0; plug < row; plug++){
    playgrid.push(rowd);
}


var a = 25; //x coordinate of first square
var b = 25; //y coodrinate of first square
var c = 1;  //x increment
var d = 1; //y increment (decrement?)
var s = 10; //size of squares

function draw(){
   createCanvas(800,800);
    background("Black");
    fill("White");
    rect(bullet.xp, bullet.yp, s, s);
        
    var phtml = []; //this will make the squares
    fill("red");
    for (ro = 0; ro < playgrid.length; ro ++){                
        for (colum = 0; colum < playgrid[0].length; colum++){

            if (bullet.xp <= a + 2*s*(colum) + s && bullet.xp >= a + 2*s*s*(colum) && bullet.yp <= b + 2 *s* (ro) + s && bullet.yp <= b + 2 *s* (ro)){
                playgrid[ro][colum] = false;

            }
            if (playgrid[ro][colum] == true){  
                                        
                phtml.push(rect(a + 2*s*(colum), b + 2 *s* (ro), s, s));

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
    

    
}

//adding later
//a checking array to compare the x,y positions of the enemies and the moving bullet
//a break when a certain point is reached
//should link enemies to boolean table even further so that if it's false it won't draw the enemy instead of making it black

