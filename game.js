var Word = require('./Word.js');

var wordBank = [ 'FirstWord', 'Second-Word', 'ThirdWord 64' ];

function Game() {
	this.wins = 0;
	this.losses = 0;
	this.livesRemaining = 0;
	this.lettersUsed = [];
	this.word;

	this.startNewGame = function() {
		this.livesRemaining = 10;
		this.lettersUsed = [];
		this.word = this.generateRandomWord();

		console.log(' Welcome to hangman 1.0' );

	}

	this.generateRandomWord = function () {

		var len = wordBank.length;
		var randomWord = wordBank[ Math.floor(Math.random() * len) ];
		var currentWord = new Word(randomWord);

		return currentWord;

	}
}


this.printResults = function() {
	//PRINTS RESULTS BETWEEN GUESSES.

}

this.endGame = function() {
	//PRINTS END OF GAME RESULTS.

}

module.exports = Game;
