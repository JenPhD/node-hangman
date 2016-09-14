//check guessed letters and compare them to the president name that is the random word
var Letter = require("./letter.js");


function Word(president) {
    //empty array to push letters into
    this.lets = [];
    //the random president that is the word to be guessed put in upper case
    this.answer = president.toUpperCase().split("");
    //boolean if guessed correctly or not
    this.correctPresident = false;

    //methods
    //first check to see if the word is guessed
    this.answerGuessed = function () {
        var presAnswer = [];
        for(var i = 0; i < this.answer.length; i++){
            presAnswer.push(this.lets[i].letterRender())
        }
        if(presAnswer.join("").toUpperCase() === this.answer.join("").toUpperCase()){
            this.correctPresident = true;
        }
        return this.correctPresident;
    };

    //final display when answer is correct
    this.display = function () {
        //loop through letters and replace placeholder with letters guessed correctly
        var finalPres = [];
        for(var letter in this.lets){
            finalPres.push(this.lets[letter].letterRender())
        }
        console.log(finalPres.join(" "));
    }

    this.generateWord = function () {
        for (var i= 0; i < this.answer.length; i++) {
            this.lets.push(new Letter(this.answer[i].toUpperCase()));
        }
    }

    //render what to return when a letter is guessed.
    this.letterCheck = function (guessLetter) {
        var returnLetters = false;
        for (var i = 0; i < this.answer.length; i++) {
            console.log(this.display[i].correctLetter);
            console.log(guessLetter.toUpperCase());
            if (guessLetter.toUpperCase() === this.lets[i].correctLetter){
                console.log(this.display[i]);
                this.lets[i].guessed = true;
                returnLetters = true;
            }
        }
        return returnLetters;
    }
}
// var word = new Word("hello-world");
// word.generateDisplayWord();
// console.log(word.letterCheck('l'));
// word.display();
// for(var i=0;i<word.answer.length;i++) {
//     word.lets[i].guessed = true;
// }
// word.display();
// console.log(word.answerGuessed())



module.exports = Word;