//regular arrow function
const inchToCM = (inches) => {
    return inches * 2.54;
}

//only one argument and only one line (which is the return line)
const inchToCM = inches => inches * 2.54;

// ------------------------------ //

//the b argument is optional - if you dont pass it, it is 3 by default, 
//add(5) will be 8
// add(5,2) will be 7
function add(a, b=3) {
    const total = a + b;
    return total;
}

const add = (a, b=3) => a+b;



// ------------------------------ //

//a function that returns an object:
function makeAbaby(first, last) {
    const baby = {
        name: `${first} ${last}`,
        age: 0
    }
    return baby;
}

//arrow function
const makeAbaby = (first,last) => {
    return {
        name: `${first} ${last}`,
        age: 0
    }
}

//shorter arrow function
const makeAbaby = (first,last) => ({name: `${first} ${last}`, age: 0});


// ------------------------------ //

//a function inside a property (תכונה) of an object - 3 different ways
const wes = {
    name: 'wes bos',
    sayHiLong: function () {
        console.log('Hi');
    },
    sayHiShort() {          
        console.log('Hi!');
    },
    sayHiArrow: () => {
        console.log('Hi!!');
    }
}


// ------------------------------ //

//a callback function - something that will happen when something is done

const myButton = document.querySelector('.clickMe');

function handleClick() {
    console.log('Great Clicking!!');
}

myButton.addEventListener('click', handleClick); //browser please call this function when someone clicks the button

//write a function directly in the call
myButton.addEventListener('click', function(){
    console.log('Nice Job!!');
});

//timer callback - call a method of an object after 1s 
setTimeout(wes.yellHi, 1000);

//timer callback - also with arrow function 
setTimeout(() => {
    console.log('Done!Time to eat!');
}, 1000);



// ------------------------------ //
 

/*
IIFE
Immediately Invoked Function Expression
*/

(function(age) {
    console.log('calling this anonimus IIFE function');
    return `Your age is ${age}`;
})(10);


