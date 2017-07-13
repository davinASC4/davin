var playChoice = "r";
var compChoice = "s";
if (playChoice == "r" && compChoice == "s"){
    console.log("you won rock beats paper")
}

if (playChoice == "r" && compChoice == "p"){
    console.log("you lost paper smacks rock")
}

if (playChoice == compChoice){
    console.log("tie")
}

if (playChoice == "s" && compChoice == "p"){
    console.log("you win")
}

if (playChoice == "s" && compChoice == "r"){
    console.log("you lose")
}

if (playChoice == "p" && compChoice == "s"){
    console.log("you lost")
}

if (playChoice == "p" && compChoice == "r"){
    console.log("you win")
}




