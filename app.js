// Init storage
const storage = new Storage();
// Get Sotred location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.unit);

// Init UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const unit = document.querySelector('input[name="choice"]:checked').value;
  
    
  // change location
  weather.changeLocation(city);
  weather.changeUnit(unit);  
  // Set location in LS
  storage.setLocationData(city, unit);
  // Get and display weather
  getWeather();
  
  // Close modal
  $('#locModal').modal('hide');

});

function getWeather(){
  weather.getWeather()
    .then(results => {
      
      ui.paint(results);
      
    })
    .catch(err => console.log(err));
}