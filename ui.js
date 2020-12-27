
class UI {
  constructor() {
    this.location = document.getElementById('location');
    this.description = document.getElementById('description');
    this.temp = document.getElementById('temp');
    this.icon = document.getElementById('icon');
    this.humidity = document.getElementById('humidity');
    this.feelslike = document.getElementById('feels-like');
    this.temp_min = document.getElementById('min');
    this.temp_max = document.getElementById('max')
    this.wind = document.getElementById('wind');    
    
  }

  
  paint(weather) {
    this.location.textContent = weather.name;
    this.description.textContent = weather.weather[0].description;
    this.temp.textContent = weather.main.temp;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
    this.feelslike.textContent = `feels-like: ${weather.main.feels_like}`;
    this.temp_min.textContent = `Minimum Temperatrue: ${weather.main.temp_min}`;
    this.temp_max.textContent = `Maximum Temperatrue: ${weather.main.temp_max}`;
    this.wind.textContent = `Wind: ${weather.wind.speed}`;
  }
}