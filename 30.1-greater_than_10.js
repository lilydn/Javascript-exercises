// Write a function that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a .then, .catch.

function numIsGreaterThan10(num) {
  return new Promise((resolve, reject) => {
    // reject if num is less than 10
    if (num <= 10) {
      reject('The number is not greater than 10');
    }
    else {
      resolve('The number is greater than 10');
    }
  });
}

numIsGreaterThan10(9)
.then(result => {
  console.log('Excellent!!');
  console.log(result);
}).catch(err => {
  console.log('Ohh noooo!!');
  console.log(err);
});