
function setup(){
    createCanvas(500,500);
    background(10);

}

var a = 40; //x 
var b = 40; //y
var c = 1;
var d = 1;
var p = 10;
function draw(){

createCanvas(500,500);
background(10);
fill("Red");
  a = a + c
  b = b + d
  ellipse(a, b, 50, 50);

  if (a >= 475){
      c = -1 * Math.round(Math.random() * p);
      d = d * -1;
  }

  else if (b <= 25){
      c = c * -1;
      d = Math.round(Math.random() * p);
  }

  else if (b >= 475){
      c = c * -1
      d = Math.round(Math.random()* p) * -1;

  }

  else if (a <= 25){
      c = Math.round(Math.random() * p);
      d = d * -1
  }

}
