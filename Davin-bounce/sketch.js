
function setup(){
    createCanvas(windowWidth,windowHeight);
    background(10);

}

var a = 40; //x 
var b = 40; //y
var c = 1;
var d = 1;
var p = 50; //speed
var coloro = ["Red", "White", "Green", "Orange"];
var q = 0;
var s = 50; //size of circle
var backco0 = Math.random()*250;
var backco1 = Math.random()*250;
var backco2 = Math.random()*250;

function draw(){

createCanvas(windowWidth,windowHeight);
background(backco0, backco1, backco2);
fill(coloro[q]);
  a = a + c
  b = b + d
  ellipse(a, b, s, s);

  if (a >= windowWidth - s/2){ //right wall
      backco0 = Math.random()*250;
      backco1 = Math.random()*250;
      backco2 = Math.random()*250;
      q = 0;
      c = -1 * Math.round(Math.random() * p); //if the circle approaches this line it's comming from the left with a positive value of c
      d = Math.round(Math.random() * p);
  }

  else if (b <= s/2){ //ceiling
      //c = c * -1;
      backco0 = Math.random()*250;
      backco1 = Math.random()*250;
      backco2 = Math.random()*250;
      q = 1;
      d = Math.round(Math.random() * p);
  }

  else if (b >= windowHeight - s/2){ //floor
      //c = c* -1;
      backco0 = Math.random()*250;
      backco1 = Math.random()*250;
      backco2 = Math.random()*250;
      q = 2;
      d = Math.round(Math.random()* p) * -1;

  }

  else if (a <= s/2){ //right wall
      backco0 = Math.random()*250;
      backco1 = Math.random()*250;
      backco2 = Math.random()*250;
      q = 3;
      c = Math.round(Math.random() * p);
      d = Math.round(Math.random() * p);
  }

}
