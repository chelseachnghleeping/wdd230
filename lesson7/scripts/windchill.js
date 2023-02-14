const speedInMPH = 3.5; //mph
const kmh = speedInMPH * 1.609344; //convert mph to kmh

const windChill = (tempF, speed) => {
	if (tempF <= 50 && speed > 3) {
		let f =35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16)
		return f.toFixed(0)
	}else{
        return 'N/A'
    }
}

document.getElementById('windChill').innerHTML = windChill(50, speedInMPH) + '&deg;F';
document.getElementById('windSpeed').innerHTML = kmh.toFixed(0) + ' km/h';
