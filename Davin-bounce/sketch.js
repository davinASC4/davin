
function setup(){
    createCanvas(500,500);
    background(10);

}

var a = 40; //x 
var b = 40; //y
var c = 1;
var d = 1;
var p = 10;
var coloro = ["Red", "White", "Green", "Orange"];
var q = 0;
var backco0 = Math.random()*250;
var backco1 = Math.random()*250;
var backco2 = Math.random()*250;
function draw(){

createCanvas(500,500);
background(backco0, backco1, backco2);
fill(coloro[q]);
  a = a + c
  b = b + d
  ellipse(a, b, 50, 50);

  if (a >= 475){
      backco0 = Math.random()*250;
      backco1 = Math.random()*250;
      backco2 = Math.random()*250;
      q = 0;
      c = -1 * Math.round(Math.random() * p); //if the circle approaches this line it's comming from the left with a positive value of c
      //d = d * -1;
  }

  else if (b <= 25){
      //c = c * -1;
      backco0 = Math.random()*250;
      backco1 = Math.random()*250;
      backco2 = Math.random()*250;
      q = 1;
      d = Math.round(Math.random() * p);
  }

  else if (b >= 475){
      //c = c* -1;
      backco0 = Math.random()*250;
      backco1 = Math.random()*250;
      backco2 = Math.random()*250;
      q = 2;
      d = Math.round(Math.random()* p) * -1;

  }

  else if (a <= 25){
      backco0 = Math.random()*250;
      backco1 = Math.random()*250;
      backco2 = Math.random()*250;
      q = 3;
      c = Math.round(Math.random() * p);
      //d = d * -1
  }

}
