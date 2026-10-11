let n = 65;

let guess = prompt("Guess the no.");
guess = parseInt(guess);

while(guess != n) {
    console.log("wrong");

    if(guess > n) console.log("guess is too large , please reguess");
    else console.log("guess is too small , please reguess");

    guess = prompt("reguess");
    guess = parseInt(guess);
}

console.log("You win!");