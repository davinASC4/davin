//collatz

function collatz(x){
    var count = 0;
    console.log(x)
    while (number != 1){
        if (number%2 == 0){
            number = number / 2;
            console.log(number);
            count = count + 1;
        }

        else{
            number = number * 3 + 1;
            console.log(number);
            count = count + 1; 
        }
    }
    console.log("It took this many hits to reach zero: ", count)

}

var prompt = require("prompt-sync")();

var number = prompt("Give me a number: ");

collatz(number);


