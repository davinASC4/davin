//
var prompt = require('prompt-sync')();
 
var money = 1000;

var lbdpack = [];

while (money > 100){
    var answer = prompt("you can buy yeezy's for 400, gucci flip flops for 200, or ray bans for 100 ");

       if (answer.toLowerCase == "yeezy's" && money >= 500) {
            money = money - 400;
            lbdpack.push("yezzy's");
            console.log("you have successfully bought these pairs of yeezy's");    
        }  

        else if(answer.toLowerCase == "gucci flip flops" && money >= 300){
            money = money - 200;
            lbdpack.push("gucci flip flops");
            console.log("you have successfully bought these pairs of gucci flip flops");    
        }

        else if (answer.toLowerCase == "ray bands" && money >= 200){
            money = money - 100;
            lbdpack.push("ray bands");
            console.log("you have successfully bought these ray bands");    
        }

        else{
            console.log("you can't buy that");
        }

}

console.log("Leave you're broke!");
