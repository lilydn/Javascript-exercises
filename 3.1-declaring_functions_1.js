/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.

    Submit the file to Hive

*/

// From function declarations to function expressions
const welcome = () => 'Welcome to Appleseeds Bootcamp!';

const power = a => Math.pow(a,2);

const add = (a, b = 5) => {
    b = 7;
    return a+b;
}


// From function expressions to function declarations
function hello() {
    return "Hello!";
}

function squareRoot(a) {
    return Math.sqrt(a);
}

function randomNumbers(a, b) {
    return Math.random() * (a - b) + b;    
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/
 

// From function declarations to explicit and implicit return functions (one of each).

// Explicit
const welcome_2 = () => {  
    return 'Welcome to Appleseeds Bootcamp!';
}

// Implicit
const power_2 = a => Math.pow(a, 2);


// From function expressions to IIFE functions.
const squareRoot_2 = (function(a) {
    return Math.sqrt(a);
})();

const randomNumbers_2 = (function(a, b) {
    return Math.random() * (a - b) + b;
})();











