
let now = new Date ();
let h4 = document.querySelector ("h4");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thuersday", "Friday", "Saturday"];
let day = days [now.getDay()];
h4.innerHTML = day + " " + hours + ":" + minutes;
function search (event) {
event.preventDefault();
let apiKey = "f4b1afad08e0c84c66913649d9143761";
let cityElement = document.querySelector ("#city-input").value;
let cityInput = document.querySelector ("#city-input");
cityElement.innerHTML = cityInput.value;
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Tallinn&appid=f4b1afad08e0c84c66913649d9143761&units=metric";
axios.get(apiUrl).then(displayWeatherCondition);
}
function displayWeatherCondition (response) {
document.querySelector ("#city").innerHTML = response.data.name;  
document.querySelector ("#maintemperature").innerHTML = Math.round (response.data.main.temp)+ " °C"; 
let description = document.querySelector ("#maintemperature-description");
document.querySelector ("#humidity").innerHTML = response.data.main.humidity;  
document.querySelector ("#wind").innerHTML = Math.round(response.data.wind.speed); 
}
let searchForm = document.querySelector ("#search-form")  
searchForm.addEventListener ("submit", search)
function showTemperature (response) {
document.querySelector ("#city").innerHTML = response.data.name;
document.querySelector ("#maintemperature").innerHTML = Math.round (responce.data.main.temp);
}
