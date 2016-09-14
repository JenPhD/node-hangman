//A guess should be a letter, upper or lower case. Convert to upper case in game.
var regEx = /[A-Z]|[a-z]/i;

function Letter(char) {
//set the value of each letter property
	this.placeholder = "_";
	this.correctLetter = char;
	this.guessed = false;
	
	//render the letters as guessed or the placeholder if not guessed correctly
	this.letterRender = function () {
		if(this.guessed) {
			return this.correctLetter;
		}
		else if(!regEx.test(this.correctLetter)){
			return this.correctLetter;
		}
		else{
			return this.placeholder;
		}
	}
}

module.exports = Letter;