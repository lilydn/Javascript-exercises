/*
1. Create a function that returns a random number between 1-20.
2. Create another function that takes two arguments, a number and a callback
function.
- This functions calls the callback function until it returns a number equal to
the number it got from the user.
After it found the number, the function prints to the screen how many
attempts it took to receive it.
*/


// 1
const generateNumBetween1to20 = () => Math.floor(Math.random()*20) + 1;

// 2
const howManyAttemptsToGuessNum = (num, generateNum) => {
    let counter = 0;
    if(typeof generateNum)
    while (generateNum() !== num) {
        counter++;
    }

    console.log(`It took ${counter} attempts to recieve the given number`);
}

// execute example
howManyAttemptsToGuessNum(9, generateNumBetween1to20);