// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words and capitalize
// them, and then the second function, sortWords(), will sort the words in
// alphabetical order. If the array contains anything but strings, it should throw
// an error.
// Call the functions once with an array of words and call it once with an array
// that includes at least one item that is not a word. Print the resolve and reject
// in a .then, .catch.

function makeAllCaps(words) {
  return new Promise((resolve, reject) => { 
    words.forEach((word,index) => {
      if(typeof(word) !== 'string') {
        reject('The array includes an element which is not a string. Bye!');
      }
      else {
        words[index] = word.toUpperCase();
      }
    });
    resolve(words);
  });
}


function sortWords(words) {
  return new Promise((resolve) => {
    resolve(words.sort());
  });
}

let testarr1 = ['sort','method','zebra','async','elements'];
let testarr2 = ['sort', true ,'zebra','async','elements'];

// makeAllCaps(testarr2)
// .then(result => {
//   console.log(result);
//   return sortWords(result);
// })
// .then(result => {
//   console.log(result);
// })
// .catch(err => {
//   console.log('Ohh noooo!!');
//   console.log(err);
// });

// easier way to work with promises:
async function doWork() {
  try {
    const response = await makeAllCaps(testarr2);
    console.log(response);
    const processedResponse = await sortWords(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }

}

doWork();


