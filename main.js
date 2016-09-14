/*
	Hangman Game Play through

	- Start Game
	- Welcome the user
	- display the banks of the word
	- ask the user to enter a guess.
	-- check to see if the user already made the guess
	-- check to see if the guess is a valid character

 	-- Check to see if the guess is in the word

	- if the guess is correct
	-- make the appropriate changes to the word that displays
 	-- display the word
 	-- ask for a new guess

	- if the guess is not correct
	-- take away a guess number
	-- check to see if the guesses remaining is zero
	--- if guesses is greater then zero keep asking for more guesses
	--- if the guesses remaining is zero end the game
	--- ask the user if they'd like to play again

 */
//Begin a new game with inquirer. Main runs the main logic of the game.
var inquirer = require('inquirer');
var Game= require('./game.js');
var game = new Game();

//Initialize the game
function initHangman() {
	//Ready to begin!
	game.startGame();
	//Display placeholders
	//console.log("placeholders");
	game.currentPres.display();

	//below is a test to make sure if there is a letter in the guessed array it will be caught
	// game.lettersGuessed.push('a');

	//- ask the user to enter a guess.
	promptInput();
}

function promptInput() {
	inquirer.prompt([
		{
			type:"input",
			name:"userGuess",
			message:"Enter guess (letter A-Z): ",
			validate:function(value){
				var validInputs = /[a-z]|[A-Z]/i;
				//check to make sure the inputs are valid
				if(value.length === 1 && validInputs.test(value)){
					console.log("tested input");
					//this check to see if the letter has been guessed already
					if(game.lettersGuessed.length > 0) {
						console.log("letters guessed!")
						for (var items in game.lettersGuessed) {
							console.log(game.lettersGuessed[items])
							if (value.toUpperCase() === game.lettersGuessed[items]) {
								return "This letter has already been guessed.\nPlease enter another guess (A-Z):"
							}
						}
					}
					return true;
				}

				return	"Please enter a letter (A-Z): "
			}
		}
	]).then(function(answer){
		//- Check to see if the letter guessed is in the word
		//console.log(answer.userGuess);
		game.lettersGuessed.push(answer.userGuess);
		if(game.currentPres.letterCheck(answer.userGuess)){
			//console.log("Correct");
			// -- display the currentPres
			game.currentPres.display();
			// -- ask for a new guess
			if(game.currentPres.answerGuessed()){
				winGame();
			}
			else {
				promptInput();
			}
		}
		else{
			game.guessRemaining--;
			console.log("Guesses Remaining: " + game.guessRemaining);
			game.currentPres.display();
			if(game.guessRemaining <= 0){
				loseGame();
			}
			else{
				promptInput();
			}
		}

	})
}

function winGame(){
	game.wins++;
	console.log("Congratulations you won!\nCurrent wins: " + game.wins + " Current losses: " + game.losses);

	playAgainPrompt();
}
function loseGame(){
	game.losses++;
	console.log("So sorry you lost!\nYour current record is: " + game.wins + " wins and: " + game.losses + " losses");
	console.log("The word you were trying to guess was: " + game.currentPres.answer)
	playAgainPrompt();
}

function playAgainPrompt(){
	inquirer.prompt([
		{
			type:'confirm',
			name:'playAgain',
			message:'Play again?',
		}
	]).then(function(answer){
		if(answer.playAgain){
			initHangman();
		}
		else{
			console.log("See ya!");
			return;
		}
	});
}
initHangman();