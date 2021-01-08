const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

// load all event listners

function loadEventListeners() {

  document.addEventListener('DOMContentLoaded', getTasks);
  3
  form.addEventListener('submit',addTask);

  taskList.addEventListener('click', removeItem);

  clearBtn.addEventListener('click', clearAll);

  filter.addEventListener('keyup' , filterTasks);

  
}

// creat tasks list when the page is reloded

function getTasks() {
let tasks;
if(localStorage.getItem('tasks') === null){
      tasks = [];
}else {
     tasks = JSON.parse(localStorage.getItem('tasks'));
}

tasks.forEach(function(element){
// creat li element 
const li = document.createElement('li');
// give a class name to li element 
li.className = 'collection-item';
// append text to li element 
li.appendChild(document.createTextNode(element));
// creat a link element
const link = document.createElement('a');
// add class name to a element
link.className = 'delete-item secondary-content';
// add icon 
link.innerHTML = '<i class="fa fa-remove"></i>';
// append link to li
li.appendChild(link);

// append li to ul element 
taskList.appendChild(li);

  });

}


function addTask(x) {

  if(taskInput.value === '') {
   
    alert('add task');

  }
// creat li element

const li = document.createElement('li');

li.className = 'collection-item';
li.appendChild(document.createTextNode(taskInput.value));

// creat a link element

const link = document.createElement('a');
link.className = 'delete-item secondary-content';

// add icon 

link.innerHTML = '<i class="fa fa-remove"></i>';

// append link to li

li.appendChild(link);

taskList.appendChild(li);

storeData(taskInput.value);

//  task saved msg to user
alert('task saved succsecfully');

x.preventDefault();

// clear input

taskInput.value = '';

}


function storeData(task) {

  let tasks;
  
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  }else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks.push(task);


  localStorage.setItem('tasks', JSON.stringify(tasks));


  
  }

// store tasks in local storage

// i dont know why below function is not working....???

  
  
// removeing item



function removeItem(x) {
  // console.log(x.target);i
  
  if(x.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure')) {
      x.target.parentElement.parentElement.remove();


       // remove from local storage 
       removeFromLS(x.target.parentElement.parentElement);
    }
  }
}





function removeFromLS(t) {
  
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  }else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(element,index){
    if(t.textContent === element) {
      tasks.splice(index, 1);
    }
  });   

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// clear all 

function clearAll(x) {

  if(confirm('Are you sure')) {

    x.target.parentElement.children[2].remove();

  }

  x.preventDefault();
}

// filter tasks

function filterTasks(x) {
  const input = x.target.value.toLowerCase();


  // console.log(input);

  document.querySelectorAll('.collection-item').forEach(function(element){
    const item = element.firstChild.textContent;


     if(item.toLowerCase().indexOf(input) != -1) {
       element.style.display = 'block';
     } else {
       element.style.display = 'none';
     }

  })

}




// removeing items 
// my attempt

// const icon = document.querySelector('.fa fa-remove');

// icon.addEventListener('click', removeItem);

// function removeItem(y) {
  
//   icon.parentElement.parentElement.remove();

//   y.preventDefault();
// }

// taskList.addEventListener('click', removeItem);

// function removeItem (y) {
  
 
//   if(y.target.parentelement.className.contains('delete-item')) {
//     y.target.parentelement.parentelement.remove();
//   }

//   alert('removed');
  
//   y.preventDefault
// }

// lecture 034


