// pick a random president for the user.
var Word = require('./word.js');

var presidents = [
	'WASHINGTON',
    'ADAMS', 
    'JEFFERSON',
    'MADISON',
    'MONROE',
    'JACKSON',
    'VANBUREN',
    'HARRISON',
    'TYLER',
    'POLK',
    'TAYLOR',
    'FILLMORE',
    'PIERCE',
    'BUCHANAN',
    'LINCOLN',
    'JOHNSON',
    'GRANT',
    'HAYES',
    'GARFIELD',
    'ARTHUR',
    'CLEVELAND',
    'HARRISON',
    'MCKINLEY',
    'ROOSEVELT',
    'TAFT',
    'WILSON',
    'HARDING',
    'COOLIDGE',
    'HOOVER',
    'TRUMAN',
    'EISENHOWER',
    'KENNEDY',
    'NIXON',
    'FORD',
    'CARTER',
    'REAGAN',
    'BUSH',
    'CLINTON',
    'OBAMA'
   ];

//The game keeps track of wins, losses, the number of guesses remaining, the current president,
//and the letters already guessed
function Game() {
	this.wins = 0;
	this.losses = 0;
	this.guessRemaining = 0;
	this.lettersGuessed = [];
	this.currentPres = null;
	
	//Starting a new game with 10 guesses, a new random word, and empty array of letters guessed
	this.startGame = function(){
		this.guessRemaining = 10;
		this.lettersGuessed = [];
		this.currentPres = this.generatePres();
		console.log("Ready to play President Hangman!");
	};
	//get a random president from the array
	this.generatePres = function () {
		var randPres = presidents[Math.floor(Math.random()*presidents.length)];
		console.log(randPres);
		var newPres = new Word(randPres);
		newPres.generateWord();
		return newPres;
	};
};

//
// var game = new Game();
// game.startGame();
// game.word.displayWord();

module.exports = Game;
