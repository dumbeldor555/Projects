class UI {
constructor() {
this.location = document.getElementById('w-location');
this.desc = document.getElementById('w-desc');
this.string = document.getElementById('w-string');
this.details = document.getElementById('w-details');
this.icon = document.getElementById('w-icon');
this.humidity = document.getElementById('w-humidity');
this.feelsLike = document.getElementById('w-feels-like');
this.dewpoint = document.getElementById('w-dewpoint');
this.wind = document.getElementById('w-wind');
}

displayData(data) {
  this.location.textContent = data.name;
  this.desc.textContent = data.weather[0].description;
  this.string.textContent = data.main.temp;
  this.icon.setAttribute('src',data.weather[0].icon);
  this.humidity.textContent = `Reletive Humidity: ${data.main.humidity}`;
  this.dewpoint.textContent = `SunRise: ${data.sys.sunrise}`;
  this.feelsLike.textContent = `Feels like:${data.main.feels_like}`;
  this.wind.textContent = `Wind is from ${data.wind.speed} and ${data.wind.deg}`;
}

clearUI() {
  this.location.textContent = '';
  this.desc.textContent = '';
  this.string.textContent = '';
  this.icon.setAttribute('src',null);
  this.humidity.textContent = '';
  this.dewpoint.textContent = '';
  this.feelsLike.textContent = '';
  this.wind.textContent ='';
}
}
