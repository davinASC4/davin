

function setup(){
    createCanvas(800,700);
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

var pxloc = 25;
var pyloc = 25;
var lsize = 30;
var cxloc = 25;
var cyloc = 380;
 
function draw(){
   

    fill("White");  //generating squares/rects 
    var phtml = []; //coil = row, coil2 = column
    for (coil = 0; coil < 10; coil ++){
        for (coil2 = 0; coil2 < 10; coil2++){
            phtml.push(rect(pxloc + lsize*(coil), pyloc + lsize* (coil2 ), lsize, lsize));
        }
    }

    for (a = 0; a < 10; a++){ //generating text which will have the same centers as certain squares 
        for (b = 0; b < 10; b++){ // a = row b = column
            if (playgrid[a][b] == true){
                fill("Orange");
                text("Ship", pxloc + lsize * (b) , pyloc + lsize *(a) + lsize/2);
            }
        }
    }
    

    //fill("White");  //generating squares/rects 
    var chtml = []; //coil = row, coil2 = column
    //for (coil = 0; coil < 10; coil ++){
        //for (coil2 = 0; coil2 < 10; coil2++){
            chtml.push(rect(cxloc + lsize*(coil), cyloc + lsize* (coil2 ), lsize, lsize));
        //}
    //}

    //for (a = 0; a < 10; a++){ //generating text which will have the same centers as certain squares 
        //for (b = 0; b < 10; b++){ // a = row b = column
            //if (compgrid[a][b] == true){
                fill("Orange");
                text("Ship", cxloc + lsize * (b) , cyloc + lsize *(a) + lsize/2);
            //}
        //}
    //}



}

var word = "";
function keyPressed(){
    
    
    if (keyCode === BACKSPACE){
    
        word = word.slice(0, -1);
        clear();
         createCanvas(800, 700);
        background("Black");
    
    }
    else {
    word = word + key;

    }

    print(word);
    fill("Orange");
    text(word, 500, 500);

    return false
}



