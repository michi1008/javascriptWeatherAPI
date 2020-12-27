class Storage {
  constructor() {
    this.city;
    this.unit;
    this.defaultCity = 'New York';
    this.defaultUnit = 'metric';
    
  }

  getLocationData() {
    if(localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    if(localStorage.getItem('unit') === null) {
      this.unit = this.defaultUnit;
    } else {
      this.unit = localStorage.getItem('unit');
    }

    return {
      city: this.city,
      unit: this.unit
    }
  }

  setLocationData(city, unit) {
    localStorage.setItem('city', city);
    localStorage.setItem('unit', unit);
  }
}