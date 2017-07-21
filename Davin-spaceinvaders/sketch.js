

function setup(){
    createCanvas(800,800);
    background("Black");
}


// var playgrid = [ 
//         [true, true, true, true, true, true, true, true, true, true, true], 
//         [true, true, true, true, true, true, true, true, true, true, true], 
//         [true, true, true, true, true, true, true, true, true, true, true], 
//         [true, true, true, true, true, true, true, true, true, true, true], 
//         [true, true, true, true, true, true, true, true, true, true, true], 
//         [true, true, true, true, true, true, true, true, true, true, true], 
//         [true, true, true, true, true, true, true, true, true, true, true], 
//         [true, true, true, true, true, true, true, true, true, true, true], 


//  ];
var row = prompt("How many rows would you like? ");
var column = prompt("How many columns would you like? ");
 
 var playgrid = [];
 
var rowd = []
for (plug = 0; plug < row; plug++){   //these for loops would make a boolean matrix (?) called playgrid like above;
    for (jam = 0; jam < column; jam++){
        rowd.push(true);
    }

    playgrid.push(rowd);

    rowd = [];
}


var a = 25; //x coordinate of first square
var b = 25; //y coodrinate of first square
var c = 1;  //x increment
var d = 10; //y increment (decrement?)

var s = 10; 

function draw(){
   createCanvas(800,800);
    background("Black");

    


    var phtml = []; //this will make the squares
    for (ro = 0; ro < playgrid.length; ro ++){                
        for (colum = 0; colum < playgrid[0].length; colum++){
            if (playgrid[ro][colum] == true){  
                                        //these conditionals are to help change the color of the squares by associating (?) 
                                        //the parameter for fill() with the boolean matrix (?) made by the loops above
                fill("Red");
            }

            else {
                fill("Black")
            }
            phtml.push(rect(a + 2*s*(colum), b + 2 *s* (ro), s, s)); //the coordinates of the squares will be based on 
                                                                        //the very first one
        }
    }

    if (a == 400){          //these conditionals will change the location of the very first square only
                            //once it reaches a certain x-coordinate (400)
            b = b + d;      //the y-coordinate will go down by "b" which is set to 10
            c = -1;         //this changes the x-direction by which the first square will move
                        //since the locations of the other squares are based on the very first they will move too

        }

    else if (a == 10){
        b = b + d;
        c = 1;
    }
    
    a = a + c              //this line changes the location of the very first square 
                        //since the locations of the other squares are based on the very first they will move too
   
}


