
let now = new Date ();
let h4 = document.querySelector ("h4");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thuersday", "Friday", "Saturday"];
let day = days [now.getDay()];
h4.innerHTML = day + " " + hours + ":" + minutes;
let searchForm = document.querySelector ("#search-form")  
searchForm.addEventListener ("submit", search)
function displayWeatherCondition (response) {
document.querySelector ("#city").innerHTML = response.data.name; 
document.querySelector ("#maintemperature").innerHTML = Math.round (response.data.main.temp) + " ° C"; 
document.querySelector ("#humidity").innerHTML = response.data.main.humidity;  
document.querySelector ("#wind").innerHTML = Math.round(response.data.wind.speed);
document.querySelector ("#description").innerHTML = response.data.weather[0].main;  
}
function search(event) {
event.preventDefault ();
let apiKey = "c224c09e7e6870befba06c4b2e769168";
let city = document.querySelector ("#city-input").value;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(displayWeatherCondition);
}
