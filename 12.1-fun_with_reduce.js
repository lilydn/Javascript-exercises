
//1. max function using the reduce built-in function
const findMax = arr => {
    return arr.reduce = (accumulator, currentValue) => 
    accumulator > currentValue ? accumulator : currentValue;
}

let arr = [8,6,1,5,9,3];
console.log(findMax(arr));

// function minMax(items) {
//     var minMaxArray = items.reduce(
//        (accumulator, currentValue) => {
//             return (accumulator < currentValue ? accumulator : currentValue);
//        }
//    );

//     return minMaxArray;
// }


// const reducer = (accumulator, currentValue) => accumulator + currentValue;


//2. sum of even numbers using the reduce built-in function


//3. average function using the reduce built-in function
