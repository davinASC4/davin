
playgrid = [];

for (plug = 0; plug < 3; plug++){
       //these 'for' loops would make a boolean matrix (?) named playgrid like above;
     playgrid.push([])
     
    for (jam = 0; jam < 4; jam++){  
        playgrid[plug].push (true);
    }

}


playgrid[1][1]= false;
console.log(playgrid);

console.log(playgrid[1][1]);

