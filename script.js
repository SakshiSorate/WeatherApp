async function fetchWeatherData(cityName){
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b13a97989859634e1a1243dac49f105a`
	const response = await fetch(url)
	const data = await response.json();
	let city = document.getElementById("city");
	city.innerHTML = data.name;

	let windSpeed = document.getElementById("wind_speed");
	windSpeed.innerHTML = data.wind.speed + "km/hr";

	let humidity = document.getElementById("humidity");
	humidity.innerHTML = data.main.humidity+" g/kg";

	let temp = document.getElementById("temp");
	temp.innerHTML = Math.round((data.main.temp)-273.15)+"ºC";
	console.log(data);
}
//demo()

function fetchCity(){
	let cityName = document.getElementById("City_name");
	if(cityName.value===""){
		alert("Enter a City Name");
	}
	else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}
}