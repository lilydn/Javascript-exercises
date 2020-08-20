const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Ice-cream","Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza","Ice-cream", "Olives", "Hamburgers"];


// Create a function that takes these two arrays as arguments.
// Compare these two arrays and return the items that are the same. 
// If none are the same return false.


function compareTwoArrays(arr1, arr2) {
    const res = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) res.push(arr1[i]);
        }
    }
    //remove duplicates from the array
    return res.filter((item, ind) => res.indexOf(item) === ind);
}

//console.log(compareTwoArrays(food,food1));