

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
var lsize = 30;
function draw(){
    
    fill("White");
    var p2html = [];
    for (coil = 0; coil < 10; coil ++){
        for (coil2 = 0; coil2 < 10; coil2++){
            p2html.push(rect(xloc + lsize*(coil2), yloc + lsize* (coil ), lsize, lsize));
        }
    }

    for (a = 0; a < 10; a++){
        for (b = 0; b < 10; b++){
            if (playgrid[a][b] == true){
                fill("Orange");
                text("Ship", xloc + lsize * (b) , yloc + lsize *(a) + lsize/2);
            }
        }
    }
    
}


