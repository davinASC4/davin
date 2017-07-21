//

function enemy(xpos, ypos, color,size){
    this.xpos = xpos;
    this.ypos = ypos;
    this.color = color;
    this.size = size
}

var square = {
    xpos: 25,
    ypos: 25,
    color: "Red",
    size: 10
}

var playgrid = [];

// for (i = 0; i < 10; i++){
//     for (j = 0; j < 10; j++){
//         square.xpos = square.xpos + 20;
//         square.ypos = square.ypos + 20;
//         playgrid.push(square);


//     }
// }

// playgrid[0].xpos = 0;

// console.log(playgrid);

// var row = 10;
// var column = 10;
// var rowd = [];

// for (plug = 0; plug < row; plug++){   //these 'for' loops would make a boolean matrix (?) named playgrid like above;
//     for (jam = 0; jam < column; jam++){
//         rowd.push(true);
//     }

//     playgrid.push(rowd);
//     rowd = [];
//         console.log(rowd);

// }


// console.log(playgrid);


// for (jam = 0; jam < column; jam++){
//          rowd.push(true);
//      }
// for (plug = 0; plug < row; plug++){
//     playgrid.push(rowd);
// }

// rowd =[];
// console.log(playgrid);

// var te = 0;

// for (i = 0; i < 9; i++){
//     rowd.push(te);
//     te = te + 1;
// }

// console.log(rowd);

// var grid = [];
// for (i = 0; i < 10; i++){
//     playgrid.push(grid)

// }
// grid = [1];

// console.log(playgrid);

