const newYearEve = new Date(2022, 0, 1);

let daysHandler = null;
let hoursHandler = null;
let minutesHandler = null;
let secondsHandler = null;

window.onload = () => {
    setInterval(refreshTimer, 1000);
    daysHandler = document.getElementById("days");
    hoursHandler = document.getElementById("hours");
    minutesHandler = document.getElementById("minutes");
    secondsHandler = document.getElementById("seconds");
}

function refreshTimer() {
    let timeDifference = calcTimeDifference();

    let daysLeft = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
    let hoursLeft = Math.floor((timeDifference / 1000 / 60 / 60) % 24);
    let minutesLeft = Math.floor((timeDifference / 1000 / 60) % 60);
    let secondsLeft = Math.floor((timeDifference / 1000) % 60);

    setTimer(daysLeft, hoursLeft, minutesLeft, secondsLeft);
    console.log("fasf");
}

function setTimer(days, hours, minutes, seconds) {
    daysHandler.innerText = days;
    hoursHandler.innerText = hours;
    minutesHandler.innerText = minutes;
    secondsHandler.innerText = seconds;
}

function calcTimeDifference() {
    return newYearEve.getTime() - Date.now();
}