

function setup(){
    createCanvas(1000,1000);
    background(225);

}

var a = ["baby baby"];

var i = 0
function draw(){
    
    textSize(20);
    text("Please type this: ", 50, 50);
    text(a[i], 80, 80);
    
}

var b = ""


function keyTyped() {
  b = b + key;
  print(b);
  
  return false
}

function keyPressed() {
  if (keyCode == ENTER) {
    if (b == a[i]){
        text("nice job", 100, 100);
    }

    else {
        text("you suck dog", 100, 100);
    }
}

}
