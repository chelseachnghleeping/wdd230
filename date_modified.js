var string = document.lastModified;
let LastModified = new Date(document.lastModified);
let day = (LastModified.getMonth() + 1) + "/" + LastModified.getDate() + "/" + LastModified.getFullYear();
let hour = LastModified.getHours() + ":" + LastModified.getMinutes() + ":" + LastModified.getSeconds();
document.getElementById("LastModified").innerHTML = day + " " + hour;