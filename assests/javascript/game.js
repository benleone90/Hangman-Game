// Create variables for the game
var words = [
    "lightsaber",
    "jedi",
    "force",
    "naboo",
    "tatooine",
    "skywalker",
    "vader"
];
var guessWord = [];
var won = 0;
var loss = 0;
var maxAttempts = 10;
var guessLetters = [];
var gameStart = false;
var gameFinish = false;

// Reset game variables for new game
function resetGame() {
    maxAttempts = 10;
    gameStart = false;

    // Get random word from the words array
    currentWord = Math.floor(Math.random() * words.length);

    // Clear Word and Letters arrays
    guessLetters = [];
    guessWord = [];

    // Push underscores to selected word
    for (var i = 0; i < words[currentWord].length; i++) {
        guessWord.push("_")
    }

    // Update Screen
    updateScreen();
}

// Updates data on HTML Page
function updateScreen() {
    document.getElementById("wins").innerHTML = won;
    document.getElementById("wordGuess").innerHTML = "";
    for (var j = 0, j < guessWord.length; i++) {
        document.getElementById("wordGuess").innerHTML += guessWord[i];
    }
}




//Choosing word from array and displaying to console
// var pickWord =  words[Math.floor(Math.random()*words.length)];
// console.log(pickWord);

// document.getElementById("wins").innerHTML = "Your Wins: " + won;
// document.getElementById("losses").innerHTML = "Your Losses: " + loss;
// document.getElementById("guessLeft").innerHTML = "Remaining Guesses: " + attempts;
// document.getElementById("pastGuess").innerHTML = "Your Guesses: " + usedArray;
// document.getElementById("wordGuess").innerHTML = "Guess the Word: " + answerArray;

// //Function to fill pickWord length with underscores//
// var answerArraySetup = function(_pickWord){
//     for (var i=0; i<pickWord.length; i++){
//         answerArray.push("_");
//     }
//     return answerArray
// }

 