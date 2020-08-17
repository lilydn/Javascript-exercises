/*
    JavaScript - Primitive Data Types

    The following exercise contains the following subjects:
        * String
        * undefined

    Instructions:
        * String Tasks:
            1) Write the phrase "Welcome to Full-Stack Bootcamp" as a String in 5 different ways.
            2) Get the first letter of the word "Bootcamp" using two different ways.
            3) Write two string variables with the same word, in a way that when compared will result in false.
            4) Get the length of the String from the first task.
            5) Combine these two Strings "Hello" and "World" using as many different ways you can (at least 3).

        * undefined Tasks:
            1) Create an undefined variable in two differnet ways.
            2) Check if a variable is undefined in two differnet ways.

    Submit the file to Hive
*/


/* String Task - 1 */
let str = 'Welcome to Full-Stack Bootcamp';
console.log(str);

let st1 = 'Welcome';
let st2 = 'to';
let st3 = 'Full-Stack';
let st4 = 'Bootcamp';
console.log(st1 + st2 + st3 + st4);
console.log(`Welcome to ${st3} Bootcamp`);
console.log(`${st1} to ${st3} Bootcamp`);

let arrStr = ['Welcome','to','Full-Stack','Bootcamp'];
let answer = '';
for (let i = 0; i < arrStr.length; i++) {
    answer = answer + arrStr[i];
}
console.log(answer);




/* String Task - 2 */
let word = 'Bootcamp';
let firstLetter1 = word.charAt(0);
let firstLetter2 = word.slice(0,1);
let firstLetter3 = word[0];

/* String Task - 3 */
let word1 = 'Banana';
let word2 = ['Banana'];
console.log(word1 === word2);  /* false */

/* String Task - 4 */
let strLength = str.length;

/* String Task - 5 */
let word3 = 'Hello';
let word4 = 'World'
let way1 = 'Hello' + 'World';
let way2 = word3 + word4;
let way3 = 'Hello'.concat(' ', 'World');
let way4 = word3.concat(' ', word4);

/* Undefined Task - 1 */
let und1; 
let und2 = undefined;

/* Undefined Task - 2 */
console.log(und1);
console.log(und1 == null);













