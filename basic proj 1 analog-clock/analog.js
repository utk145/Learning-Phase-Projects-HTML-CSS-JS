/*
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");

// console.log(hourElement);

function updateClock() {
    const currDate = new Date();
    setTimeout(updateClock, 1000);
    // console.log(currDate);
    const hour = currDate.getHours();
    const minute = currDate.getMinutes();
    const second = currDate.getSeconds();
    const hourDegree = (hour/12)*360;
    hourElement.style.transform = `rotate(${hourDegree}deg)`; 
    const minuteDegree = (minute/60)*360;
    minuteElement.style.transform = `rotate(${minuteDegree}deg)`; 
    const secondDegree = (second/60)*360;
    secondElement.style.transform = `rotate(${secondDegree}deg)`; 
}

updateClock();

*/



// Method 2

const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");

// console.log(hourElement);

function updateClock() {
    const currDate = new Date();
    // console.log(currDate);
    const hour = currDate.getHours();
    const minute = currDate.getMinutes();
    const second = currDate.getSeconds();
    const hourDegree = (hour/12)*360;
    hourElement.style.transform = `rotate(${hourDegree}deg)`; 
    const minuteDegree = (minute/60)*360;
    minuteElement.style.transform = `rotate(${minuteDegree}deg)`; 
    const secondDegree = (second/60)*360;
    secondElement.style.transform = `rotate(${secondDegree}deg)`; 
}

setInterval(updateClock,1000);

