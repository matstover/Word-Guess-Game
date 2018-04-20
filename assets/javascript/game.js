var artMovements = ["Art Brut", "Folk Art", "Pop Art", "Cubism", "Impressionism", "Surrealism", "Modern Art", "Dada", "Neoclassical"];
var userGuess;
var randomWord = artMovements[Math.floor(Math.random() * artMovements.length)];
console.log(randomWord)
var dashes = []
// Show wins.
var wins = 0;
// Press any key to start.
for (var i = 0; i < randomWord.length; i++) {
    dashes.push("-")
}
console.log(dashes)
// After start populate with dashes.
document.onkeyup = function (event) {
    var userGuess = event.key;
    for (var i = 0; i < randomWord.length; i++) {
        // Determines which key was pressed.
        if (userGuess === randomWord[i].toLowerCase()) {
            // Upon correct letter keyup
            console.log(i)
        }
    }


}
// Fill in letter in correct space/change dash to correct letter.
if (userGuess === artMovements.text) { 
    
} else userGuess === dashes;{
    console.log()
    
}



// Upon wrong letter keyup...
if (userGuess === i++) {
    console.log()

}
// Lower the guess counter by one.
// document.getElementById('score').innerHTML = "Score: " + score;


// Add wrong letter to wrong letter bank

// Upon all letters guessed correctly

// i++ to Array 

var artMovements = document.getElementsByClassName("card-title");

for (var i = 0; i < artMovements.length; i++) {
    var randomWord= document.createElement("card-title");
    randomWord = userGuess

}

function artMovements() {
    document.write("userGuess");
}
// Upon all guess counters being used up

    // i++ to Array