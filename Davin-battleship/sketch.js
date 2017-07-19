

function setup(){
    createCanvas(500,700);
    background("Black");


}


var playgrid = [ 
        [false, false, false, false, false, false, false, false, false, false, false], 
        [false, false, false, false, false, false, false, false, false, false, false], 
        [false, false, false, false, false, false, false, false, false, false, false], 
        [false, false, false, false, false, false, false, false, false, false, false], 
        [false, false, false, false, false, false, false, false, false, false, false], 
        [false, false, false, false, false, false, false, false, false, false, false], 
        [false, false, false, false, false, false, false, false, false, false, false], 
        [false, false, false, false, false, false, false, false, false, false, false], 
        [false, false, false, false, false, false, false, false, false, false, false], 
        [false, false, false, false, false, false, false, false, false, false, false], 
];

var compgrid = [ 
        [false, false, false, false, false, false, false, false, false, false, false], 
        [false, false, false, false, false, false, false, false, false, false, false], 
        [false, false, false, false, false, false, false, false, false, false, false], 
        [false, false, false, false, false, false, false, false, false, false, false], 
        [false, false, false, false, false, false, false, false, false, false, false], 
        [false, false, false, false, false, false, false, false, false, false, false], 
        [false, false, false, false, false, false, false, false, false, false, false], 
        [false, false, false, false, false, false, false, false, false, false, false], 
        [false, false, false, false, false, false, false, false, false, false, false], 
        [false, false, false, false, false, false, false, false, false, false, false], 

 ];

var ship = 5;
var randomCol = Math.round(Math.random()* 9);
var randomRow = Math.round(Math.random()* 9);

for (s = 0; s < ship; s++){
    if (playgrid[parseInt(randomCol)][parseInt(randomRow)] == false){
        playgrid[parseInt(randomCol)][parseInt(randomRow)] = true;

    }

    else if (playgrid[parseInt(randomCol)][parseInt(randomRow)] == true){
        s = s - 1;
    }
    randomCol = Math.round(Math.random()* 9);
    randomRow = Math.round(Math.random()* 9);
}

for (sh = 0; sh < ship; sh++){
    if (compgrid[parseInt(randomCol)][parseInt(randomRow)] == false){
        compgrid[parseInt(randomCol)][parseInt(randomRow)] = true;

    }

    else if (compgrid[parseInt(randomCol)][parseInt(randomRow)] == true){
        sh = sh - 1;
    }
    randomCol = Math.round(Math.random()* 9);
    randomRow = Math.round(Math.random()* 9);
}

var xloc = 25;
var yloc = 25;
var lsize = 25;
function draw(){
    
    fill("White");
    var phtml = [ (rect(xloc, yloc, 25, 25)),(rect(xloc + 50, yloc, 25, 25)),
  (rect(75,25,25,25)),(rect(100,25,25,25)),(rect(125,25,25,25)),
  (rect(150,25,25,25)),(rect(175,25,25,25)),(rect(200,25,25,25)),
  (rect(225,25,25,25)),(rect(250,25,25,25)),(rect(25,50,25,25)),
  (rect(50,50,25,25)),(rect(75,50,25,25)),(rect(100,50,25,25)),
  (rect(125,50,25,25)),(rect(150,50,25,25)),(rect(175,50,25,25)),
  (rect(200,50,25,25)),(rect(225,50,25,25)),(rect(250,50,25,25)),
  (rect(25,75,25,25)),(rect(50,75,25,25)),(rect(75,75,25,25)),
  (rect(100,75,25,25)),(rect(125,75,25,25)),(rect(150,75,25,25)),
  (rect(175,75,25,25)),(rect(200,75,25,25)),(rect(225,75,25,25)),
  (rect(250,75,25,25)),(rect(25,100,25,25)),(rect(50,100,25,25)),
  (rect(75,100,25,25)),(rect(100,100,25,25)),(rect(125,100,25,25)),
  (rect(150,100,25,25)),(rect(175,100,25,25)),(rect(200,100,25,25)),
  (rect(225,100,25,25)),(rect(250,100,25,25)),(rect(25,125,25,25)),
  (rect(50,125,25,25)),(rect(75,125,25,25)),(rect(100,125,25,25)),
  (rect(125,125,25,25)),(rect(150,125,25,25)),(rect(175,125,25,25)),
  (rect(200,125,25,25)),(rect(225,125,25,25)),(rect(250,125,25,25)),
  (rect(25,150,25,25)),(rect(50,150,25,25)),(rect(75,150,25,25)),
  (rect(100,150,25,25)),(rect(125,150,25,25)),
  (rect(150,150,25,25)),(rect(175,150,25,25)),(rect(200,150,25,25)),
  (rect(225,150,25,25)),(rect(250,150,25,25)),(rect(25,175,25,25)),(rect(50,175,25,25)),
  (rect(75,175,25,25)),(rect(100,175,25,25)),(rect(125,175,25,25)),
  (rect(150,175,25,25)),(rect(175,175,25,25)),(rect(200,175,25,25)),
  (rect(225,175,25,25)),(rect(250,175,25,25)),(rect(25,200,25,25)),(rect(50,200,25,25)),
  (rect(75,200,25,25)),(rect(100,200,25,25)),(rect(125,200,25,25)),
  (rect(150,200,25,25)),(rect(175,200,25,25)),(rect(200,200,25,25)),
  (rect(225,200,25,25)),(rect(250,200,25,25)),(rect(25,225,25,25)),(rect(50,225,25,25)),
  (rect(75,225,25,25)),(rect(100,225,25,25)),(rect(125,225,25,25)),
  (rect(150,225,25,25)),(rect(175,225,25,25)),(rect(200,225,25,25)),
  (rect(225,225,25,25)),(rect(250,225,25,25)),(rect(25,250,25,25)),(rect(50,250,25,25)),
  (rect(75,250,25,25)),(rect(100,250,25,25)),(rect(125,250,25,25)),
  (rect(150,250,25,25)),(rect(175,250,25,25)),(rect(200,250,25,25)),
  (rect(225,250,25,25)),(rect(250,250,25,25))
  ]
    
    for (a = 0; a < 10; a++){
        for (b = 0; b < 10; b++){
            if (playgrid[a][b] == true){
                fill("Orange");
                text("Ship", 25 * (a+1) , 25 * (b+1) + lsize/2);
            }
        }
    }
    
}


