//factorial recursion

function factorial (x){

    if (x>1){
        return x * factorial(x-1);

    }
    
    if (x==1){
        return 1;
    }

    
}

var prompt = require("prompt-sync")();


var y = prompt("Let's find the factorial of a number: ");

console.log(factorial(y));


