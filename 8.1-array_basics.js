const people = ['Greg', 'Mary', 'Devon', 'James'];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]); 
}

// remove "Greg" from the array
people.shift();

// remove "James" from the array
people.pop();

// add "Matt" to the front of the array
people.unshift('Matt');

// add your name to the end of the array
people.push('Lily');

// Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]); 
    if (people[i] === 'Mary') {
        break;
    }
}

// a command to make a copy of the array using slice. 
// the copy should NOT include "Mary" or "Matt"
const lessPeople = people.slice(2);

// a command that gives the indexOf where "Mary" is located.
let indexMary = people.indexOf('Mary');

// a command that gives the indexOf where "Foo" is located (this should return -1).
let indexFoo = people.indexOf('Foo');

// redefine the people variable with the value you started with.
people.shift(); 
people.unshift('Greg');
people.pop();
people.push('James');

// using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie".
people.splice(2,1,'Elizabeth','Artie');

// create a new variable called withBob
// set it equal to the people array concatenated with the string of "Bob".
const withBob = people.concat('Bob');
const withBob2 = [...people, 'Bob'];
const withBob3 = [people, 'Bob']; // Not good!



