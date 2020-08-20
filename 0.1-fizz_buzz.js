fizzBuzz();

function fizzBuzz() {
    for (let i = 1; i < 101; i++) {
        let whatToPrint = '';
        if (i % 3 === 0) {
            whatToPrint = 'Fizz'
        }
        if (i % 5 === 0) {
            whatToPrint += 'Buzz';
        }
        else {
            whatToPrint = i;
        }
        console.log(whatToPrint);
    }
}