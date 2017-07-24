// 
function enemy(xp, yp, size, boolean){
    this.xp = xp;
    this.yp = yp;
    this.size = size;
    this.boolean = boolean;

}


var column = 5;
var row = 4;
var startsq = new enemy (35, 25, 10, true);
var playgrid = []

for(i = 0; i < row; i++){
    playgrid.push([]);
    for(j = 0; j < column; j++){
    playgrid[i].push({});
    playgrid[i][j] = new enemy (startsq.xp + startsq.size * j , startsq.yp + startsq.size * i, startsq.size, true);
    }
}

playgrid[1][2].boolean = false;
console.log(playgrid);



