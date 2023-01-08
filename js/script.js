//get current year
let currentYear = new Date().getFullYear()
document.querySelector('span#year').innerHTML = currentYear


//get last modified date of file
document.querySelector('p.lastUpdated').innerHTML = 'Last Updated: ' + document.lastModified