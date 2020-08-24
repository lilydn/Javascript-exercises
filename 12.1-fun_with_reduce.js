
//1. max function using reduce 
const findMax = arr => {
    return arr.reduce((acc, current) => 
    acc > current ? acc : current, 0);
}


//2. sum of even numbers using reduce 
const sumEven = arr => {
    return arr.reduce((acc, current) =>
    current % 2 ===0 ? acc + current : acc ,0);
}



//3. average function using reduce 
const average = arr => {
    return (arr.reduce((acc, current) =>
    acc + current, 0))/arr.length;
}







/* - - - - - - - - - - - - - - - - - */

let arr = [5,8,1,2,-10];
console.log(findMax(arr));
console.log(sumEven(arr));
console.log(average(arr));

