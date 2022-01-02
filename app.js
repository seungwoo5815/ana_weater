
const storage = new Storage();


const weatherLocation = storage.getLocationData();


const weather = new Weather(weatherLocation.city, weatherLocation.country);


const ui = new UI();


document.addEventListener("DOMContentLoaded", getWeather);


document.querySelector("#w-change-btn").addEventListener("click", (e) => {
  const city = document.querySelector("#city").value;
  const country = document.querySelector("#country").value;

  weather.changeLocation(city, country);

  storage.setLocationData(city, country);

  getWeather();

  const modalEl = document.querySelector("#locModal");
  const modal = bootstrap.Modal.getInstance(modalEl);

  modal.hide();
});

function getWeather() {
  weather.getWeather()
  .then((weatherData) => {
    ui.paint(weatherData);
  })
  .catch(err => {
    console.log(err);
  });
}
