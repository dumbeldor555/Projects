
const preBtn = document.getElementById('pre');
const nextBtn = document.getElementById('next');
const container = document.querySelector('.container');
let i = 0;
// hiding pre btn when content gets loaded
document.addEventListener('DOMContentLoaded', function() {

  preBtn.style.display = 'none';
  });

///////////////////////////////**************************sliding forward*****************/////////////////////////////// */
nextBtn.addEventListener('click', slideForward);
function slideForward() {

i++;
console.log(i);
console.log(container.children[i - 1]);
container.children[i - 1].style.transform = `translateX(-100%)`;

if(i === container.children.length - 1) {
  
  nextBtn.style.display = 'none'; 
  preBtn.style.display = 'inline'; 
} else {

  preBtn.style.display = 'inline';
  nextBtn.style.display = 'inline';
}
}

//////////////////////////****************sliding backwards********************************///////////////////////////////// */
preBtn.addEventListener('click', slideBackwards);
function slideBackwards() {
 
    i--;
  console.log(i);
  container.children[i].style.transform = `translateX(0%)`;
  preBtn.style.display = 'inline';
  if(i === 0) {
    
    preBtn.style.display = 'none';
    nextBtn.style.display = 'inline';
  } else {

    nextBtn.style.display = 'inline';
    preBtn.style.display = 'inline';
  }
}



