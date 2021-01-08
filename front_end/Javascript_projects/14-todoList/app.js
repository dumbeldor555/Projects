// adding items
const inputField = document.querySelector('.inputField');
const container = document.querySelector('.container');
const clrAll = document.querySelector('.clrAll');
const events = ['keydown', 'click'];

let arr = [];
let i = 0;
events.forEach(evnt => container.addEventListener(evnt, addItem));

/////////////******************************adding item ***********************////////////////////////////////// */
function addItem(x) {


  if(x.target.innerHTML === 'submit') {
    // console.log(x.target.innerHTML);
    const submit = document.querySelector('button');
    const input = document.querySelector('.input').value;

    if(input === '') {
    const notification = document.createTextNode('please Enter Somthing in the search bar');
    const p = document.createElement('p');
    p.appendChild(notification);
    p.classList.add('alert');
    container.insertAdjacentElement("afterbegin", p);

    setTimeout(() => {
    container.children[0].remove();
    }, 1500);

    } else {
      
      // storing item to local storage
      arr[i] = input;
      arr = JSON.stringify(arr);
      localStorage.setItem('items', arr);
      arr = JSON.parse(arr);
      // making each item 
      i++;
      const item = `
      <div class="item" id=${i}>
      <p>${input}</p>
      <div class="logos">
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash"></i>
      </div>
      </div>`;
      
     // adding items in container
      container.children[2].innerHTML += item;
       const inputField = document.querySelector('.input');
       inputField.value = '';    

    // giving success msg
    const notification = document.createTextNode('item Added');
    const p = document.createElement('p');
    p.appendChild(notification);
    p.classList.add('succesMsg');
    container.insertAdjacentElement("afterbegin", p);

    setTimeout(() => {
    container.children[0].remove();
    }, 500);
 
    clrAll.style.display = 'block';
}
  }
};

////////////////*******************edit and delete  one item*******************************//////////////////////////////////
container.addEventListener('click', editItem);
this.id;
function editItem(x) {
  
  const submit = document.querySelector('.submit');
  const inputField = document.querySelector('.inputField'); 
  
  if(x.target.classList.contains('fa-edit')) {

  // filling input field with selected item
  inputField.children[0].value = x.target.parentElement.parentElement.firstElementChild.innerHTML;
  submit.innerHTML = 'edit';
    //  console.log( x.target.parentElement.parentElement.id);
    window.id = x.target.parentElement.parentElement.id;
  } else if (x.target.classList.contains('fa-trash')) {
    // this is globle i not the i which is below
     i--;
     console.log(x.target.parentElement.parentElement.parentElement.children.length);
     const remaining = (x.target.parentElement.parentElement.parentElement.children.length) - x.target.parentElement.parentElement.id;
    for(let i = 1; i < remaining + 1; i++) {

    let element = document.getElementById(parseInt((x.target.parentElement.parentElement.id))+i);  
     console.log(element);
     
     element.id -= 1;
    
    }
    // deleting from local storage 'remember you set  arr in local storage to 0 based'
    let delArr = localStorage.getItem('items');
    delArr = JSON.parse(delArr);
    for(let i = 0; i < delArr.length; i++) {
    console.log(x.target.parentElement.parentElement.firstElementChild.innerHTML, delArr[i]);
    if(x.target.parentElement.parentElement.firstElementChild.innerHTML === delArr[i]) {
      console.log('ok');
      delArr.splice( i, 1);
      arr.splice(i, 1);
    }
    }

    delArr = JSON.stringify(delArr);
    localStorage.setItem('items', delArr);

    x.target.parentElement.parentElement.remove(); 

  }

  // taking care of editing items
  if(x.target.innerHTML === 'edit') {
   const totalItemNum = x.target.parentElement.parentElement.children[2].children.length;
   
   for(let i = 0; i < totalItemNum  ; i++) {
    
   if(parseInt(x.target.parentElement.parentElement.children[2].children[i].id) === parseInt(id)){
     
    x.target.parentElement.parentElement.children[2].children[i].firstElementChild.innerHTML = inputField.firstElementChild.value;
   }
}

// editing in local storage
let arr = localStorage.getItem('items');
    arr = JSON.parse(arr);
    arr[id - 1] = inputField.firstElementChild.value;
    arr = JSON.stringify(arr);
    localStorage.setItem('items', arr);

submit.innerHTML = 'submit';
inputField.firstElementChild.value = '';
}
}

/////////////////////////////********************** removing all item from ********************************/////////////////////////
const clrAllBtn = clrAll.firstElementChild;

clrAllBtn.addEventListener('click', clearAll);

function clearAll() {
  
 
  const div = document.createElement('div');
  div.classList.add('warning');
  const p = document.createElement('p');
  const button = document.createElement('button');
  button.classList.add('warningBtn');
  const warning = document.createTextNode('Are you sure');
  const text = document.createTextNode('Clear');
  button.appendChild(text);
  p.appendChild(warning);
  div.appendChild(p);
  div.appendChild(button);

container.insertAdjacentElement('beforeend', div);

setTimeout(() => {
  
div.remove();
}, 2000);

const warDiv =  document.querySelector('.warning');
warDiv.children[1].addEventListener('click', function() {

  items = document.querySelector('.groceryList');
  items.innerHTML = '';
  // clearing from local storage
  localStorage.removeItem('items');
  // and clearing from the arr which you declerd above chek it out if you dont know that 
  arr = [];
  i = 0;
  
  clrAll.style.display = 'none';
  // giving succes msg for clearing all items
  const notification = document.createTextNode('All item removed');
  const pEl = document.createElement('p');
  pEl.appendChild(notification);
  pEl.classList.add('succesMsg');
  container.insertAdjacentElement("afterbegin", pEl);
  // removing succes msg after 1 sec
  setTimeout(() => {
  container.children[0].remove();
  }, 1000);

  // removing warning div itself
  div.remove();
})
}

////////////////********************loading from local storage when the page loads************************///////////////////////// */

document.addEventListener('DOMContentLoaded', loadFromLocal);

function loadFromLocal() {

let arr = localStorage.getItem('items');
if(arr !== null) {

  arr = JSON.parse(arr);
  arr.forEach(item => {
     i++;
    container.children[2].innerHTML += `
    <div class="item" id=${i}>
    <p>${item}</p>
    <div class="logos">
      <i class="fas fa-edit"></i>
      <i class="fas fa-trash"></i>
    </div>
    </div>`;

  clrAll.style.display = 'block';
  })
}
}







