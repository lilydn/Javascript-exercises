/* 
Write a function that will receive an array of strings and will return a new
array containing all the lengths of all the strings in the array it got as a
parameter. 
*/

const toCheck = ["boo", "doooo", "hoo","ro"];

function lengthOfWords(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = array[i].length;
    }
    return result;
}

console.log(lengthOfWords(toCheck));