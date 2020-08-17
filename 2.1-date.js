currentDateAndTime();

function currentDateAndTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = daysArr[today.getDay()];

    console.log(`Today is: ${day} \nCurrent time is: ${hours}:${minutes}:${seconds}`);
}

