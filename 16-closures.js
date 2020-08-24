// Without running the code below, explain in your own words what the result
// of each block of code will be and why

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Block 1 */

var b = 1;
function someFunction(number) {   
	function otherFunction(input) {
		return b;
	}
	b = 5;
	return otherFunction;
}
var firstResult = someFunction(9); // firstResult value will be what someFunction returns 
// so firstResult will be a reference to otherFunction function 
var result = firstResult(2); 
// result will be 5 -> 
// we call otherFunction which returns b
// because of the closure it "remembers" the last value of b in the father scope which is 5
// the input argument is not used and it has no influence


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Block 2 */
var a = 1;
function b2() {
  a = 10;
	return;
	function a() {}
}
b2();
// what happens in the function b2 is that:
// function a() {}  is activated first because of hoisting
// a is now a function: 
// var a from the father scope is overriden by the function a() which has the same name
// then the function is overriden by a = 10
// a is now a variable and its value is 10 but it is so only inside the b2() scope
// the function is finished (and returns nothing)
console.log(a); 
// prints 1
// because the update of a in the b2() function is not saved anywhere, and the global scope sees the previous value of a which is 1


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Block 3 */

let i;
for (i = 0; i < 3; i++) {
	const log = () => {
		console.log(i);
  };
	setTimeout(log, 100);
}
// will print 
// 3
// 3
// 3
// because i is promoted every loop iteration (0 then 1 then 2), 
// setTimeout is not activated on those iterations 
// but every iteration it "remembers" that is should execute log inside the setTimeout() one time.
// i is promoted until i === 3 then the for loop is finished 
// and only then it starts to execute the setTimeout() method. 
// it waits 100ms and executes the log function
// but i === 3 so it prints 3 times 3 

