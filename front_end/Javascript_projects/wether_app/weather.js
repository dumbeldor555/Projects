class Weather {
  constructor(city) {
     this.apiKey = 'c66b6103e2e307f36b9e45892368ba44';
     this.City = localStorage.getItem('city');
    // const State = state;

  }

  //change city
  changeCity(city) {
    this.City = city
  }

  // featch apis
  async featchApi() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.City},{state}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }


}