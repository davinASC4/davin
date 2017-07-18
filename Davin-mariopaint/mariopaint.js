

function setup(){
    createCanvas(700,700); 
    background(225)
}

function mouseDragged(){
    //var b = Math.round(Math.random()*10);
    var a = Math.round(Math.random()*10);
    var b = Math.round(Math.random()*20);
    setTimeout(a);
    strokeWeight(2);
    if (a >= 0 && a <= 3){
        rect(mouseX, mouseY, b, b);
    }

    else if (a >= 4 && a <= 6){
        ellipse(mouseX, mouseY, b, b);
    }

    else if (a >= 7 && a <= 10){
        triangle(mouseX, mouseY, mouseX + b, mouseY + b, mouseX - b, mouseY + b);
    }

    

}