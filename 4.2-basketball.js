
function calculateAverage(game1Score, game2Score, game3Score) {
    return Math.round(((game1Score + game2Score + game3Score)/3) * 100) / 100;  
}

let averageJohn = calculateAverage(89, 120, 103);  //104
let averageMike = calculateAverage(116, 94, 123);  //111
let averageMary = calculateAverage(97, 134, 105);  //112


//one winner
if(averageJohn > averageMike && averageJohn > averageMary) {
    console.log(`John's team is the winner with an average score of ${averageJohn} !`);
}

else if (averageMike > averageJohn && averageMike > averageMary) {
    console.log(`Mike's team is the winner with an average score of ${averageMike} !`);
}

else if (averageMary > averageJohn && averageMary > averageMike) {
    console.log(`Mary's team is the winner with an average score of ${averageMary} !`);
}

//else: there is a draw of two teams
else if ((averageJohn == averageMike) && (averageJohn > averageMary)) {
    console.log(`There is a draw! John's and Mike's teams got the best score with an average of ${averageJohn}`);
}

else if ((averageJohn == averageMary) && (averageJohn > averageMike)) {
    console.log(`There is a draw! Mary's and John's teams got the best score with an average of ${averageMary}`);
}

else if ((averageMary == averageMike) && (averageMary > averageJohn)) {
    console.log(`There is a draw! Mary's and Mike's teams got the best score with an average of ${averageMike}`);
}

//if none of the above is true, all the 3 teams have the same average score:
else {
    console.log(`There is a draw! All 3 teams got the same average score of ${averageMike}! cool!`);
}