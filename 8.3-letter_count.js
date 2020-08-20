/* Create a function to count over all the letters and return an object with the letter as the key
and the letter count as the value */

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function letterCount(arrayToCount) {
    const letterObj = {};
    for (let i = 0; i < arrayToCount.length; i++) {
        for (let j = 0; j < arrayToCount[i].length; j++) {
            let prop = arrayToCount[i].toLowerCase().charAt(j);
            if (prop !== ' ') {
                if(letterObj[prop]) {
                    letterObj[prop]++;
                }
                else {
                    letterObj[prop] = 1;
                }
            }
        }
    }
    return letterObj;
}

//console.log(letterCount(array));







/* - - - - - - - - Another Way - - - - - - - - */

function letterCount2(arrayToCount) {
    let result = arrayToCount.join('').toLowerCase().split('').filter(letter => letter != ' ');
    result = result.reduce(
        (letterObj, currentLetter) => {
            return letterObj[currentLetter] = (letterObj[currentLetter] || 0) + 1, letterObj
        }, 
        {}
    );
    return result;
}

// console.log(letterCount2(array));



/* - - - - - - - - - - Extra - - - - - - - - - - */
/* return the letter with the most occurrences as well */

let max = 0;
let maxKey = '';
Object.entries(letterCount(array)).forEach(([key,value])=> {
    value > max ? (max = value, maxKey = key) : max = max;
});

//console.log(`the most repeated letter is: ${maxKey}`); // o




/* - - - - - - - - - Pini Sol - - - - - - - - - - - */

const letterCount3 = (array) => {
    const joinArray = array.join("").toLowerCase().split("");
    const letters = {};
  
    for (let i = 0; i < joinArray.length; i++) {
      if (joinArray[i] === " ") {
        continue;
      }
      // if (letters[joinArray[i]]) {
      //   letters[joinArray[i]] = letters[joinArray[i]] + 1;
      // } else {
      //   letters[joinArray[i]] = 1;
      // }
      letters[joinArray[i]] = letters[joinArray[i]] + 1 || 1;
    }
    const highestLetter = Object.keys(letters).sort((a, b) => {
      return letters[b] - letters[a];
    });
  
    return [letters, highestLetter[0]];
  };
  
  console.log(letterCount3(array));
