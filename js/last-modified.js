let lastModified = new Date(document.lastModified)
let fullDate = lastModified.toLocaleDateString('en-US', {month: "2-digit", day: "2-digit",
year: "numeric"});
let time = lastModified.toLocaleTimeString('en-US', {hour: "2-digit", minute: "2-digit",
second: "2-digit"});
let dateTime = `Last Updated: ${fullDate} ${time}`;
document.getElementById("lastModified").innerHTML = dateTime