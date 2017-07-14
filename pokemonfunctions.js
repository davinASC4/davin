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
    var sentence = "";
    var amount = Math.round(Math.random()*10);
    var first = randLetter()
    var upper = first.toUpperCase()
    for (i = 0; i < amount; i++);{
        if (i == 0) {
        sentence = sentence + upper + randWord() + ""
        }
        if (i > 0 && i < amount - 2){
        sentence = sentence + randWord() + ""
    }
        if (i == amount - 1){
            sentence = sentence + "."
        }

    }
    return sentence
}
//console.log(randLetter())
//console.log(randWord())
console.log(randSentence())