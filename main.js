const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let year = 2023


let x = setInterval(function () {
    let newYear = new Date(`December 31, ${year} 23:59:59`);
    let today = new Date()
    let difference = newYear - today;
    if (difference <= 1000) {
        year++
    }
    days.textContent = Math.floor(difference / (1000 * 60 * 60 * 24));
    hours.textContent = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.textContent = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    seconds.textContent = Math.floor((difference % (1000 * 60)) / 1000);
}, 1000)

