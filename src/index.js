function displayTemperature(response) {
  console.log(response.data.main.temp);
}

let apiKey = "405fl0bae34e07976044dc55f313e16a";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=405f10bae34e07976244dc55f313e16a&units=metric";
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
