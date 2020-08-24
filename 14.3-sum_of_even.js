// fixed code:
function getSumOfEven(arr){
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];  // instead of arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
}

console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));

  


// expected output:
// [1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30



/*
The line that contains the problem is line 3
The problem is that arr[10] is out of the array so it is undefined, and the value of the sum is NaN.
Moreover, to get the desired output we need to decrease by 1 all the array indexes that we sum - to get sum of even we need to sum the odd indexes because the array starts with 1 and not with 0.

The debug method I used to find the bug is putting a breakpoint on the function call (line 6) and running the debugger and looking on the values that are inside the array. 

*/