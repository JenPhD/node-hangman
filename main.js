var inquirer = require('inquirer');

var Game = require('./game.js')

function initHangman() {
	game.startNewGame();
	promptAndProcessInput();
}

function promptAndProcesInput () {
	inquirer.prompt([
	{
		type: 'input',
		name: 'userGuess',
		message: 'Enger guess(letter a-z or number 0-9):',
		validate: function(value) {

			var validInputs = /[a-z]|[0-9]/i;

			if(value.length === 1 && validInput.test(value))
				return true;

			return 'Please enter a valid guess (letter a-z or number 0-9):';
		}
	}]).then(function (answer) {
		var userGuess = answer.userGuess.toUpperCase();

		if(game.lettersUsed.indexOf(userGuess) === -1) {

			game.lettersUsed.push(userGuess);

			var correct = game.word.checkLetterInput(userGuess);

			if (correct) {
				game.printresults(" Your guess was right! ")
			}
			else {
				game.livesRemaining--;
				game.printResults("WRONG!!!");

			}
		}
		else {
			game.printResults("YOU'VE ALREADY USED THAT LETTER.");
		}

		var userWon = game.word.getDisplayWord() === game.word.getTargetWord();

		if(userWon) {
			game.wins++;
			endCurrentGame('YOU WON!');
		}
		else if (game.livesRemaining > 0 ) 
			promptAndProcesInput();
		else {
			game.losses++;
			endCurrentGame("DEAD DEAD!";)
		}

	});
//DO YOU WANT TO PLAY AGAIN, GAME.STARTNEWGAME

}

//APPLICATION GO!
initHangman();