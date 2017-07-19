

function setup(){
    createCanvas(windowWidth,windowHeight);
    background("Black");
}

var x = 5;
var y = 250;
var a = Math.round(Math.random()*300); // center x of circle
var b = 40; // center y of circle
var c = 1; // increment horizontal
var d = 1; // increment vertical
var p = 10; //how random the changes are
var s = 50 //size of circle
function draw() {
 
  if (keyIsDown(UP_ARROW))
    y-=5;

  if (keyIsDown(DOWN_ARROW))
    y+=5;

  clear();
  createCanvas(windowWidth, windowHeight);
  background("Black");
  fill("Green");
  rect(x, y, 10, 70);

  fill("Red");
  a = a + c
  b = b + d
  ellipse(a, b, s, s);

  if (a >= windowWidth - s/2){ //right wall
      c = -1 * c;
      //d = d * -1;
      
  }

  else if (b <= s/2){ //ceiling
      //c = c * -1
      d = -1 * d;
      
  }

  else if (b >= windowHeight - s/2){ //floor
      //c = c * -1
      d = d * -1;
    

  }

  //else if (a <= 25){     //left wall
      //c = Math.round(Math.random() * p);
      //d = d * -1
    
    else if (a <= x + 10/2 + s/2 && b <= y + 60){
        c = (c - p) * -1;
        //d = d * -1;
    
    }

    
  //}

}


