// Global varialbes for the game
// Array of words that can be chose
var words = [
  "lightsaber",
  "jedi",
  "force",
  "naboo",
  "tatooine",
  "skywalker",
  "vader"
];
// Word chosen from array will be stored here
var chosenWord = "";
// This will contain number of letters from chosen word to be stored in an array
var wordLetters = [];
// Number of blanks shown with the correct solution
var numBlanks = 0;
// Holds mix of the correct letters and blanks
var mixedArr = [];
// Array to hold all of the wrong letters guessed
var wrongGuesses = [];

// Global game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// startGame funtion to start and reset the game
function startGame() {
  // Reset guesses to 0
  numGuesses = 9;

  // One of the words from the array is randomly chosen
  chosenWord = words[Math.floor(Math.random() * words.length)];
  // chosenWord is then broken into the individual letters
  lettersInWord = chosenWord.split("");
  // Count the number of letters in the chosen word
  numBlanks = lettersInWord.length;

  // Console log the chosen word to ensure it's being read
  console.log(chosenWord);

  // Reset the arrays holding the letters and blanks and the wrong guesses
  mixedArr = [];
  wrongGuesses = [];

  // Use a for loop to fill the mixedArr with the correct number of blanks
  for (var i = 0; i < numBlanks; i++) {
    mixedArr.push("_");
  }
  console.log(mixedArr);

  // Print blanks in the html work-blanks area
  document.getElementById("word-blanks").innerHTML = mixedArr.join(" ");
  // Prints number of guess back to 9
  document.getElementById("guesses-left").innerHTML = numGuesses;
  // Clear the wrong guesses from the previous round
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

//Function to check the letters in the word
function checkLetters(letter) {
  var letInWord = false;

  // Check to see if the letter is in the word with loop
  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      letInWord = true;
    }
  }
  // If the letter exsits in the word, find out exactly what index
  if (letInWord) {
    for (j = 0; j < numBlanks; j++) {
      if (chosenWord[j] === letter) {
        mixedArr[j] = letter;
      }
    }
  }
}
