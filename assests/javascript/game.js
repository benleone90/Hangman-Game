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
