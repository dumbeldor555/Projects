class storeData {

  // constructor(){
  //   this.city;
  //   this.defaultCity = 'new york';
  // }

  // storenig data to local storege 
  storeToLS(city) {

   city = document.getElementById('city').value;

   // stting item to local storege
   localStorage.setItem('city', city);

  }


}