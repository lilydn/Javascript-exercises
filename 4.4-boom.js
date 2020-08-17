boom(18);

function boom(num) {
    let numArr = [];
    let result = '1';
    for (let i = 2; i < num; i++) {
        numArr[i] = i.toString();
        if (i % 7 == 0) {
            if (numArr.includes('7',i-1)) result = result + ',BOOM-BOOM';
            else result = result + ',BOOM';
        }
        else result = result + ',' + numArr[i]; 
    }
    console.log(result);
}