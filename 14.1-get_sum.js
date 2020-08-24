// fixed method:

function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
        sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
        sum += arr2[i];
    }
    return sum;
}
console.log(getSum([1,2,3],[5,66,23])); 


/*
There were three bugs:
1) There was no return statement in the function to return the sum
2) In the function call, there was no comma between the arguments passed to the function (between the two arrays)
3) The variable sum that is declared in line 4 was const, but then when we try to assign value to this constant variable in line 6 it throws exception.

The debug method I used was putting a break-point on the function call
and debugging on vs code with node js preview environment, and pressing step into to see the value of every variable at each step.
*/