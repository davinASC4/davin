
function setup(){
    createCanvas(700,700);
    background(10);

}

var x = Math.round(Math.random()*600 + 50);
var y = Math.round(Math.random()*600 + 50);
var a = Math.round(Math.random()*10);
function draw(){
    x = x + a;
    y = y + a;
    print(x);
    print(y);
    createCanvas(700,700);
    background(10);
    fill("brown");
    ellipse(x , y, 50, 50);
    if (x >= 675 || x <= 25 ){
        if (a <= 0){
            a = Math.round(Math.random()*10 * -1);
        }
        
        if (a >= 0){
            a = Math.round(Math.random()*10) ;
        }
    }

    else if (y >= 675 || y <= 25 ){
        if (a <= 0){
            a = Math.round(Math.random()*10);
        }
        
        if (a >= 0){
            a = Math.round(Math.random()*10) * -1;
        }

    }    
    print(a);
}



