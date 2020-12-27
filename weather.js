class Weather {
  constructor(city, unit) {
    this.apiid = '206a2589ac181188c35e26504a2b4bb8';
    this.city = city;
    this.unit = unit;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiid}&units=${this.unit}`);

    const responseData = await response.json();
   
    return responseData;
    
  }
  // Change weather locations
  changeLocation(city) {
    this.city = city;
  }

  // Chane unit
  changeUnit(unit) {
    this.unit = unit;
  }

}