// Test
 const arrayToCheck = [2,7,-4,15];
// console.log(doubleValues(arrayToCheck)); 
// console.log(onlyEvenValues(arrayToCheck)); 



// 1. Write a function called doubleValues which accepts an array and returns a
// new array with all the values in the array passed to the function doubled.
function doubleValues(numArr) {
    return numArr.map(element => element*2);
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


// 2. Write a function called onlyEvenValues which accepts an array and returns
// a new array with only the even values in the array passed to the function.
function onlyEvenValues(numArr) {
    const result = [];
    numArr.forEach(x => {
        x % 2 === 0 && result.push(x);
    });
    return result;
}

// (using filter is shorter)
function onlyEvenValuesUsingFilter(numArr) {
    return numArr.filter(x => x % 2 === 0);
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


// 3. Write a function called addKeyAndValue which accepts an array of objects,
// a key and a value as arguments. The function should return the array passed
// to the function with the new key and value added to each object.

function addKeyAndValue(arrayOfObjects, key, value) {
    arrayOfObjects.forEach(obj => obj[key] = value); 
    return arrayOfObjects;   
}

//console.table(addKeyAndValue(data,'favColor','green'));


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


// 4. Write a function shiftLetters that takes a string and uses .map to return an
// encoded string with each letter shifted down the alphabet by one.

function shiftLetters(str) {
    //return str.split('').map(letter => letter.charCodeAt()-1).map(letter => String.fromCharCode(letter)).join('');
    return str.split('').map(letter => {
        return String.fromCharCode((letter.charCodeAt()-1));
    }).join('');
}


//console.log(shiftLetters('abvc'));






// - - - - - - - - - - - - - - Extra - - - - - - - - - - - - - - //

/* The goal of this function is to convert a string to a new string where each
character in the new string is a “(“ if that character appears only once in the
original string.
If that character appears more than once that new string will be a “)”.
Ignore capitalization when determining if a character is a duplicate. */

function convertString(str) {
    const charArray = str.toLowerCase().split('');
    const letterCount = new Map();
    charArray.forEach(letter => letterCount.set(letter, letterCount.has(letter) ? letterCount.get(letter) + 1 : 1));
    console.log(letterCount);
    return charArray.map(letter => letterCount.get(letter) === 1 ? '(' : ')' ).join(''); 
}

// console.log(convertString('DdDd @ '));
//console.log(convertString('recede'));
// console.log(convertString('Success'));
