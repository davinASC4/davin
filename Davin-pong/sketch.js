

function setup(){
    createCanvas(500,500);
    background("Black");
}

var x = 5;
var y = 250;
var a = Math.round(Math.random()*300); // center x of circle
var b = 40; // center y of circle
var c = 1; // increment horizontal
var d = 1; // increment vertical
var p = 10; //how random the changes are
function draw() {
 
  if (keyIsDown(UP_ARROW))
    y-=5;

  if (keyIsDown(DOWN_ARROW))
    y+=5;

  clear();
  createCanvas(500, 500);
  background("Black");
  fill("Green");
  rect(x, y, 10, 70);

  fill("Red");
  a = a + c
  b = b + d
  ellipse(a, b, 50, 50);

  if (a >= 475){
      c = -1 * Math.round(Math.random() * p);
      //d = d * -1;
      print(c,d);
  }

  else if (b <= 25){
      //c = c * -1;
      d = Math.round(Math.random() * p);
      print(c,d);
  }

  else if (b >= 475){
      c = c * -1
      d = Math.round(Math.random()* p) * -1;
      print(c,d);

  }

  //else if (a <= 25){     //this is the left wall
      //c = Math.round(Math.random() * p);
      //d = d * -1
    
    else if (a <= x + 25 && b <= y + 60){
        c = Math.round(Math.random() * p);
        d = d * -1
        print(c,d);
    }

    
  //}

}

