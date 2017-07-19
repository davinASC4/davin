//

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
//var sqaure = playgrid[0][0]
for (s = 0; s < ship; s++){
    if (playgrid[parseInt(randomCol)][parseInt(randomRow)] == false){
        playgrid[parseInt(randomCol)][parseInt(randomRow)] = true;

    }

    else if (playgrid[parseInt(randomCol)][parseInt(randomRow)] == true){
        s = s -1
    }
    randomCol = Math.round(Math.random()* 9);
    randomRow = Math.round(Math.random()* 9);
}

for (sh = 0; sh < ship; sh++){
    if (compgrid[parseInt(randomCol)][parseInt(randomRow)] == false){
        compgrid[parseInt(randomCol)][parseInt(randomRow)] = true;

    }

    else if (compgrid[parseInt(randomCol)][parseInt(randomRow)] == true){
        sh = sh -1
    }
    randomCol = Math.round(Math.random()* 9);
    randomRow = Math.round(Math.random()* 9);
}

console.log(playgrid);

console.log('')
console.log(compgrid);

