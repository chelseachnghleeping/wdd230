let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let curDate = new Date();
let dayName = dayNames[curDate.getDay()];
let monthName = months[curDate.getMonth()];
let year = curDate.getFullYear();
let currentDate = `${dayName}, ${curDate.getDate()}, ${monthName} ${year}`;

document.getElementById("currentDate").innerHTML = currentDate

/* display banner only wednesday */
if(dayName === "Wednesday") {
    document.getElementById("banner-top").style.display = "block";
}