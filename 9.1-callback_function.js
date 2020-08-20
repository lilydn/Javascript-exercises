// Write a function that receives 2 arguments, a string and a callback function.

// The function checks that the callback function is indeed a function.
// Pass the string to the callback function which logs that string to the console.

function function1(str, callback) {
    if (typeof callback === 'function') {
        callback(str);
    }
    else return; 
}

const function2 = str => console.log(str);


//execute example
function1('this is a string', function2);