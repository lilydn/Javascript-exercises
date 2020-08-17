// If the passwords length is more than 7 characters return “Strong”. If it is less than 7 characters long return “Weak.
//  a function that uses a if/else conditional expression
function validatePassword1(pass) {
    if (pass.length > 7) {
        return 'Strong';
    }
    else {
        return 'Weak';
    }
}

// a function that uses a ternary conditional expression
function validatePassword2(pass) {
    return pass.length > 7 ? 'Strong' : 'Weak';
}

// a function that uses a conditional abuse expression
function validatePassword3(pass) {
    return (pass.length > 7 && "Strong") || 'Weak';
}

// an “advanced” password validation function
function validatePassword4(pass) {
     //If the password length is more than 7 characters long and has at least one capital letter.
    let result = (pass.length > 7 && hasUpperCase(pass)) 
    ? 'Very Strong' 
    : pass.length >= 7   //password length in only 7 characters long (at least)
    ? 'Strong'
    : 'Weak';   //password length is less than 7 characters long

    return result;
}

// a function to check if a string contains least one capital letter
function hasUpperCase(str) {
    return str.toLowerCase() != str;
}


// tester
//console.log(validatePassword4('retee4'));
//console.log(validatePassword4('sdf4fdvFcaacc'));



/* ---------------------------------- */
/* conditional abuse */

let x = true;

x && 'blabla' && console.log('execute the code');

funcA() && funcB();