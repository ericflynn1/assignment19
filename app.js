// Function to eliminate words
// Allow user to select how long they want the word to be from a menu
// text box for guesses
// Guess button to check input
// A way to display guessed characters
// Display guesses left
// make the guesses count down after each time the guess btn is pressed
// Make blanks for the length of the word
// Make letters that are correct appear
// Make letters that aren't correct not appear 
// Have a reset/new game button--------design
// Indicate if the user wins or loses




window.addEventListener('load', function () {
document.getElementById('guessBtn').addEventListener('click', function (){
    console.log(document.getElementById('guessBox').value);
})
function addGuess() {
    let guessList = document.createElement("li");
    let guessInput = document.getElementById('guessBox').value;
    document.querySelector('guessBank').appendChild('guessList');
};

function bopIt(words) {
    console.log('List has ' + words.length + ' words.');
    console.log(words);
}

function removeWithLetter(letter) {
    return all_words.filter(function (word) {

        return (word.split('').indexOf(letter) === -1);
    });
}
function revealOrNot(words, guess) {
    let reveal = words.map(function (word) {
        return word.split('').map(function (letter) {
            if (letter === guess) return letter;
            else return '';
        })
    })
    console.log(revealOrNot())
};

document.getElementById('resetting').addEventListener('click', function () {
    location.reload();
});

window.addEventListener('load', function () {
    bopIt(all_words);

    let lengthBtn = document.querySelector('#length-setter');
    let guessBtn = document.querySelector('#guess-time');

    lengthBtn.addEventListener('click', function () {
        let targetLength = parseInt(document.querySelector('#word-length').value);

        console.log('setting length to ' + targetLength);
        all_words = all_words.filter(function (word) {
            return (word.length === targetLength);
        });

        bopIt(all_words);
    });

    guessBtn.addEventListener('click', function () {

       if (removeWithLetter('b').length > 0) {
           console.log('nope! none of those here');

           
       } else {
           console.log('doh you got one right');
           
       }
    })
