const MyDate = new Date();
const  weekday = document.querySelector('.weekday');
const dateEl = document.querySelector('.date');
const weekEl = document.querySelector('.weekday');

// getting dates data
const date = MyDate.getDate();  
const month = MyDate.getMonth();
const year = MyDate.getFullYear();
document.addEventListener('DOMContentLoaded', showTIme);

function showTIme() {

  const months = [

    'january',
    'fabruary',
    'march',
    'april',
    'may',
    'june',
    'july',
    'augest',
    'september',
    'october',
    'nobember',
    'december',
  ];

  const week = [

     'sunday', 
     'monday',
     'tuesday',
     'wednesday',
     'thursday',
     'friday',
     'saturday'
  ]
const tempDate = new Date(year, month , date + 10).getDate();
const tempMonth = new Date(year, month , date + 10).getMonth();
const tempYear = new Date(year, month , date + 10).getFullYear();
const tempWeek = new Date(year, month, date + 10).getDay();

dateEl.innerHTML = tempDate + " "+ months[tempMonth] + " "+ tempYear;
weekEl.innerHTML = week[tempWeek];

const days = 1000*60*60*24;
const hours = 1000*60*60;
const min = 1000*60;
const sec = 1000;

let Ftime = new Date(tempYear, tempMonth, tempDate, 11, 29, 59).getTime();
const Ntime = new Date().getTime();
const box = document.querySelectorAll('.box');

setInterval(decreseTime, 1000);

function decreseTime() {

if(Ftime > Ntime) {
// decresing time by second 
Ftime -= 1000;

// remaining days
let rdays = Math.floor((Ftime- Ntime)/days);
// remaining hours
let rhours;
(Ftime - Ntime)%(24* hours) === 0 ? rhours = 0 : rhours = Math.floor(((Ftime - Ntime)% (hours*24))/hours);
// remaining min
let rmin;
(Ftime - Ntime)%(60 * min) === 0 ? rmin = 0 : rmin = Math.floor(((Ftime - Ntime)%(60 * min))/min);
// remaining sec
let rsec;
(Ftime - Ntime)%(60 * sec) === 0 ? rsec = 0 : rsec = Math.floor(((Ftime - Ntime)%(60 * sec))/sec);

timeArr = [rdays, rhours, rmin, rsec];

for(let i = 0; i < box.length && i < timeArr.length; i++) {
  
  box[i].children[0].innerHTML = timeArr[i];
}
} else {

dateEl.innerHTML = "sorry offer has ended :(";
for(let i = 0; i < box.length && i < timeArr.length; i++) {
  box[i].children[0].innerHTML = 0;
}
}
}
}


 

