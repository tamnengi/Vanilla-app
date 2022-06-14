function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "405fl0bae34e07976044dc55f313e16a";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=405f10bae34e07976244dc55f313e16a&units=metric";
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
