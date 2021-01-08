//getting plus btn 

const btn = document.querySelector('body');

btn.addEventListener('click', showContent);

let toggler = 0;
function showContent(x) {
  if(x.originalTarget.classList.contains('far')) {
    
    const identifyer = x.originalTarget.classList[1];
    const logoIdentifyer = x.originalTarget.classList[2]; 
    const questions = x.originalTarget.parentElement.parentElement.parentElement.parentElement; 
     
    for(let i = 1; i < questions.children.length; i++) { 
      i = '_' + i;
       if(identifyer == i) {
         lenthenDiv(i, logoIdentifyer);
       }
      i = i.substr(1);
    }
  }

  function lenthenDiv(classN, logoIdentifyer) {
   
 classN = '.' + classN;

 const logo = document.querySelector(classN);
  console.log(logo);
  // getting question logo
  const question = logo.parentElement.parentElement.parentElement;  
  // toggling content
  question.classList.toggle('showContent');  

  // toggling plus and minus logo 
 if(logoIdentifyer === 'fa-plus-square') {

  logo.classList.remove('fa-plus-square');
  logo.classList.add('fa-minus-square');
 } else if(logoIdentifyer = 'fa-minus-square') { 

  logo.classList.remove('fa-minus-square');
  logo.classList.add('fa-plus-square');
 }
  }
}


