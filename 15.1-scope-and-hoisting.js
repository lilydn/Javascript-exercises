// Without running the code below, explain in your own words what the result
// of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix them.

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Block 1 */

console.log('Block 1');
function funcA() {
    console.log(a); // prints undefined -> because of hoisting 'var a' is declared but not it's value so a is still undefined
    console.log(foo()); // prints 2 ->  because of hoisting 'function foo' is defined 
    var a = 1;
    function foo() {
        return 2;
    }
}
funcA();


// fix: put var a = 1; before console.log(a); 
function funcA_fix() {
    var a = 1;
    function foo() {
        return 2;
    }
    console.log(a); 
    console.log(foo());
}





/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Block 2 */

console.log('Block 2');
var fullName = "John Doe";
var obj = {
    fullName: "Colin Ihrig",
    prop: {
        fullName: "Aurelio De Rosa",
        getFullName: function () {
            return this.fullName;  //"this" will refer only inside its scope
        },
    },
};
console.log(obj.prop.getFullName());  // prints 'Aurelio De Rosa' -> because the function "getFullName" is activated
var test = obj.prop.getFullName;  
console.log(test()); 
// prints 'John Doe' (when we run the code in the browser. On Node.js it will be undefined. Node.js doesn't put var on global scope, but in one level inside).
// -> because test is getting the value of the "getFullName" function
// test = function () {return this.fullName;} 
// so test is another function that returns the fullName of the global scope which is "John Doe"





/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Block 3 */

console.log('Block 3');
function funcB() {
    // let a;
    // b;

    // a = 0;
    // b = 0;

    let a = (b = 0);
    a++;
    return a;
}

funcB();
console.log(typeof a); // prints 'undefined' -> because a is only recognized inside the function funcB
console.log(typeof b); // prints 'number' -> because b is global variable so it is recognized






/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Block 4 */

console.log('Block 4');
function funcC() {
    console.log("1");
}
funcC(); // prints 2 -> funcC declaration is hoisted and the second funcC overrides the first one
function funcC() {
    console.log("2");
}
funcC(); // prints 2 -> the second funcC 
  

// fix - dont call two different functions with the same name
function funcC1() {
    console.log("1");
}
function funcC2() {
    console.log("2");
}
funcC1(); // prints 1 
funcC2(); // prints 2 
    


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Block 5 */

console.log('Block 5');
function funcD1() {
    d = 1;
}
funcD1();
console.log(d); // prints 1 -> because d has no type keyword so it becomes a global variable and can be accessed from anywhere

function funcD2() {
    var e = 1;
}
funcD2();
console.log(e); // throws exception -> e is not defined because it is not global and it is recognized only inside its scope (inside funcD2)


// fix - make d and e local variables and return their values from their functions to access them outside the function scope,
// and declare new variables outside the functions scope to get what is returned from the functions

function funcD1() {
    var d = 1;
    return d;
}
function funcD2() {
    var e = 1;
    return e;
}
var d = funcD1();
console.log(d); 
var e = funcD2();
console.log(e); 


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Block 6 */

console.log('Block 6');
function funcE() {
    console.log("Value of f in local scope: ", f); // prints 1 and is activated second because the function activation is last
}
console.log("Value of f in global scope: ", f); // prints 'undefined' and is activated first
var f = 1;
funcE();


// fix: declare the variable and give it a value first
var ff = 1;
function funcE_fix() {
    console.log("Value of ff in local scope: ", ff);
} 
funcE_fix();
console.log("Value of ff in global scope: ", ff); 