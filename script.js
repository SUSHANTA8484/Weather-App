const apiKey = "518eea86a8bfec1e7a12589f6995131a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&unit=imperial&q=";
const apiUrl2 = "https://api.openweathermap.org/data/2.5/weather?&unit=imperial&q=kolkata";
const  apiUrl3 = "https://api.openweathermap.org/data/2.5/weather?&unit=imperial&q=mumbai";
const  apiUrl4 = "https://api.openweathermap.org/data/2.5/weather?&unit=imperial&q=delhi";

// const serchBox = document.querySelector(".search input");
// const serchBtn = document.querySelector(".search button");

async function checkweather(city){
	const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
	var data = await response.json();
	console.log(data);

	document.querySelector(".cityname").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273.15);
	document.querySelector(".max-temp").innerHTML =  Math.round(data.main.temp_max - 273.15);
	document.querySelector(".mini-temp").innerHTML =  Math.round(data.main.temp_min - 273.15);
	document.querySelector(".feels_like").innerHTML =Math.round(data.main.feels_like - 273.15); 
	document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity);
	document.querySelector(".pressure").innerHTML =Math.round(data.main.pressure);
	document.querySelector(".wind_speed").innerHTML = data.wind.speed;
    // document.querySelector(".wind_deg").innerHTML = Math.round(data.wind.deg);
	document.querySelector(".sys_sunset").innerHTML = Math.round(data.sys.sunset);
	document.querySelector(".sys_sunrise").innerHTML = Math.round(data.sys.sunrise);
}
submit.addEventListener("click", (e)=>{
	e.preventDefault()
	checkweather(city.value);
})
checkweather("bangalore");



async function kolkataTemp(){
	const response1 = await fetch(apiUrl2 +`&appid=${apiKey}`);
	var data1 = await response1.json();
	document.querySelector(".temp1").innerHTML = Math.round(data1.main.temp - 273.15);
	document.querySelector(".max-temp1").innerHTML =  Math.round(data1.main.temp_max - 273.15);
	document.querySelector(".mini-temp1").innerHTML =  Math.round(data1.main.temp_min - 273.15);
	document.querySelector(".feels_like1").innerHTML =Math.round(data1.main.feels_like - 273.15); 
	document.querySelector(".humidity1").innerHTML = Math.round(data1.main.humidity);
	document.querySelector(".pressure1").innerHTML =Math.round(data1.main.pressure);
	document.querySelector(".wind_speed1").innerHTML = data1.wind.speed;
     document.querySelector(".wind_deg1").innerHTML = Math.round(data1.wind.deg);
}
kolkataTemp();

async function mumbaiTemp(){
	const response1 = await fetch(apiUrl3 +`&appid=${apiKey}`);
	var data2 = await response1.json();
	document.querySelector(".temp2").innerHTML = Math.round(data2.main.temp - 273.15);
	document.querySelector(".max-temp2").innerHTML =  Math.round(data2.main.temp_max - 273.15);
	document.querySelector(".mini-temp2").innerHTML =  Math.round(data2.main.temp_min - 273.15);
	document.querySelector(".feels_like2").innerHTML =Math.round(data2.main.feels_like - 273.15); 
	document.querySelector(".humidity2").innerHTML = Math.round(data2.main.humidity);
	document.querySelector(".pressure2").innerHTML =Math.round(data2.main.pressure);
	document.querySelector(".wind_speed2").innerHTML = data2.wind.speed;
     document.querySelector(".wind_deg2").innerHTML = Math.round(data2.wind.deg);
}
mumbaiTemp();

async function delhiTemp(){
	const response1 = await fetch(apiUrl4 +`&appid=${apiKey}`);
	var data3 = await response1.json();
	document.querySelector(".temp3").innerHTML = Math.round(data3.main.temp - 273.15);
	document.querySelector(".max-temp3").innerHTML =  Math.round(data3.main.temp_max - 273.15);
	document.querySelector(".mini-temp3").innerHTML =  Math.round(data3.main.temp_min - 273.15);
	document.querySelector(".feels_like3").innerHTML =Math.round(data3.main.feels_like - 273.15); 
	document.querySelector(".humidity3").innerHTML = Math.round(data3.main.humidity);
	document.querySelector(".pressure3").innerHTML =Math.round(data3.main.pressure);
	document.querySelector(".wind_speed3").innerHTML = data3.wind.speed;
     document.querySelector(".wind_deg3").innerHTML = Math.round(data3.wind.deg);
}
delhiTemp();
