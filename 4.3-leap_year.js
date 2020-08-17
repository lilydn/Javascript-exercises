function isALeapYear(year) {
    if(year % 4 == 0) { //divisible by 4
        if(year % 100 == 0 && year % 400 != 0) { 
            return false; //divisible by 100 and not divisible by 400
        }
        else return true; 
    }
    else return false; //not divisible by 4
}