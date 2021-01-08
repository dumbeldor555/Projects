// initializing weather class
const weather = new Weather(); 

//initializing ui class 
const ui = new UI;

//initializing store class
const storeItem = new storeData;



// changing city
document.getElementById('w-change-btn').addEventListener('click', (x) => {
const city = document.getElementById('city').value;

//insert city into the weather class
weather.changeCity(city);

//call getWeather to get new data about new city
weather.featchApi();
getWeather();

//store data to local storage 
storeItem.storeToLS(city);

})


// when document load 
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.featchApi()
  .then(data => {
    ui.displayData(data);
    console.log(data);
  })
  .catch(error => console.log(error));
  
}

// clear ui
document.getElementById('clear').addEventListener('click', (x) => {
  ui.clearUI();

  //clearing from local storage
  localStorage.removeItem('city');
})