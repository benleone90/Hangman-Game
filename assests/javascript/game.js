// Create variable array of words to choose from
// and variables for wins, losses, and tries
var words = [
    "lightsaber",
    "jedi",
    "force",
    "naboo",
    "tatooine",
    "skywalker",
    "vader"
];
var answerArray = [];
var won = 0;
var loss = 0;
var attempts = 10;
var usedArray = [];

//Choosing word from array and displaying to console
var pickWord =  words[Math.floor(Math.random()*words.length)];
console.log(pickWord);

document.getElementById("wins").innerHTML = "Your Wins: " + won;
document.getElementById("losses").innerHTML = "Your Losses: " + loss;
document.getElementById("guessLeft").innerHTML = "Remaining Guesses: " + attempts;
document.getElementById("pastGuess").innerHTML = "Your Guesses: " + usedArray;
document.getElementById("wordGuess").innerHTML = "Guess the Word: " + answerArray;

//Function to fill pickWord length with underscores//
var answerArraySetup = function(_pickWord){
    for (var i=0; i<pickWord.length; i++){
        answerArray.push("_");
    }
    return answerArray
}

 