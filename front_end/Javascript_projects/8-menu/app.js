const item = [

  {
     id : 1,
    img: '../../freeCodeCamp__instructorCode/javascript-basic-projects/8-menu/final/images/item-1.jpeg',
    foodName: 'Buttermilk Pancakes' ,
    category: 'breakfast',
    price: '$15.99',
    discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, laboriosam?'   
  }, 

  {
     id : 2,
    img: '../../freeCodeCamp__instructorCode/javascript-basic-projects/8-menu/final/images/item-2.jpeg',
    foodName: 'diner double' ,
    category: "lunch",
    price: '$13.99',
    discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, laboriosam?'   
  },

  {
     id : 3,
    img: '../../freeCodeCamp__instructorCode/javascript-basic-projects/8-menu/final/images/item-3.jpeg',
    foodName: 'godzilla milkshake' ,
    category: "shakes",
    price: '$6.99',
    discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, laboriosam?'   
  },

  {
      id : 4,
     img: '../../freeCodeCamp__instructorCode/javascript-basic-projects/8-menu/final/images/item-4.jpeg',
    foodName: 'country delight',
    category: 'breakfast',
    price: '$20.99',
    discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, laboriosam?'   
  },

  {  id : 5,
     img: '../../freeCodeCamp__instructorCode/javascript-basic-projects/8-menu/final/images/item-5.jpeg',
    foodName: 'egg attack' ,
    category: "lunch",
    price: '$22.99',
    discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, laboriosam?'   
  },

  {
    id : 6,
    img: '../../freeCodeCamp__instructorCode/javascript-basic-projects/8-menu/final/images/item-6.jpeg',
    foodName: 'oreo dream' ,
    category: "shakes",
    price: '$18.99',
    discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, laboriosam?'   
  },

  { 
    id : 7,
    img: '../../freeCodeCamp__instructorCode/javascript-basic-projects/8-menu/final/images/item-7.jpeg',
    foodName: 'bacon overflow' ,
    category: 'breakfast',
    price: '$8.99',
    discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, laboriosam?'   
  },

  {
    id : 8,
    img: '../../freeCodeCamp__instructorCode/javascript-basic-projects/8-menu/final/images/item-8.jpeg',
    foodName: 'american classic' ,
    category: "lunch",
    price: '$12.99',
    discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, laboriosam?'   
  },

  { 
    id : 9,
    img: '../../freeCodeCamp__instructorCode/javascript-basic-projects/8-menu/final/images/item-9.jpeg',
    foodName: 'quarantine buddy' ,
    category: "shakes",
    price: '$16.99',
    discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, laboriosam?'   
  },

  { 
    id : 10,
    img: '../../freeCodeCamp__instructorCode/javascript-basic-projects/8-menu/final/images/item-10.jpeg',
    foodName: 'bison steak' ,
    category: "dinner",
    price: '$22.99',
    discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, laboriosam?'   
  },

]

window.addEventListener('DOMContentLoaded', showDishes);

function showDishes() {

let divs =  item.map((elemnt) => {
    return `<div class="container">
            <div class="img"><img src="${elemnt.img}" alt=""></div>
            <div class="text">
              <div class="priceAndName">
                <p>${elemnt.foodName}</p>
                <p>${elemnt.price}</p>
              </div>
              <hr>
              <div class="discription">
                ${elemnt.discription}
              </div>
            </div>
          </div>`;
  });

// getting parent element to display divs  into the dom
let parent = document.querySelector('.mainContent');
// inserting food items inside html dom
for(let i = 0; i < divs.length; i++) {

  parent.innerHTML += divs[i];
}
}


// showing selected items 
function showSelectedItems(category) {

  let parent  =  document.querySelector('.mainContent');

   // removing all the elements from mainContent element 
   parent.innerHTML = '';

   // filtering items
  const divs = item.map((elemnt, i) => {
    if(elemnt.category === category) {
      
     return `<div class="container">
     <div class="img"><img src="${elemnt.img}" alt=""></div>
     <div class="text">
       <div class="priceAndName">
         <p>${elemnt.foodName}</p>
         <p>${elemnt.price}</p>
       </div>
       <hr>
       <div class="discription">
         ${elemnt.discription}
       </div>
     </div>
   </div>`;
    }
  })

  // inserting into dom
 for(let i = 0; i < divs.length; i++) {
  if(divs[i] !== undefined) {
    parent.innerHTML += divs[i];
  } 
 }  
}


const navContainer = document.querySelector('.navContainer');
navContainer.addEventListener('click' , function(x) {

if(x.originalTarget.classList.contains('Lunch')) {
  
  showSelectedItems('lunch');
} else if(x.originalTarget.classList.contains('Breakfast')) {

  showSelectedItems('breakfast');
} else if(x.originalTarget.classList.contains('Dinner') ) {

  showSelectedItems('dinner');
} else if(x.originalTarget.classList.contains('Shakes')) {

  showSelectedItems('shakes');
} else if(x.originalTarget.classList.contains('All')) {

  let parent  =  document.querySelector('.mainContent');
  // removing all the elements from mainContent element 
  parent.innerHTML = '';
  showDishes(); 
}
})
