
function gradeAssigner(score) {
    if(score >= 0 && score <= 64) return 'F';
    else if(score > 64 && score <= 69) return 'D';
    else if(score > 69 && score <= 79) return 'C';
    else if(score > 79 && score <= 89) return 'B';
    else if(score > 89 && score <= 100) return 'A';
}