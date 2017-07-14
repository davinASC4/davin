//

function randLetter(){
    var alphabet = ["a", "b", "c", "d",
    "e", "f", "g", "h", "i", "j", "k","l",
    "m", "n", "o", "p", "q", "r","s", "t",
    "u","v", "w", "x", "y", "z"];
    var ran = Math.round(Math.random() * 26);
    return alphabet[ran]
}

function randWord(){
    var word = "";
    var leng = Math.round(Math.random()*10);
    for (i = 0; i < leng; i ++){
        word+= randLetter()
    }
    return word
}

function randSentence(){
    var sentence = " ";
    var amount = Math.round(Math.random()*26);
    for (b = 0; b < amount; b++){
        if (b == 0){
        sentence = sentence + randLetter().toUpperCase() + randWord() ;

        }
        if (b > 0 && b < amount -2){
        sentence = sentence + " " + randWord() ;
        }       
       if (b == amount - 1){
           sentence = sentence+ "."
       }

    }
    return sentence
}
//console.log(randLetter())
//console.log(randWord())
console.log(randSentence())



