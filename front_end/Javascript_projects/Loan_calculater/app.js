// a little improvement note for a  code 
// write extra code that display all output value in dome as 0 if a user enters amount 0.



// storing elemnts in the variable

const enteredAmountD = document.getElementById('amount');
const enteredIntrestD = document.getElementById('intrest');
const enteredYearsD = document.getElementById('years');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalIntrest = document.getElementById('total-intrest');
const formD = document.getElementById('loan-form');
// calling calculate function

formD.addEventListener('submit', function(x){
  document.getElementById('loading').style.display = 'block';
  setTimeout(calculateNumbers, 1500);

  x.preventDefault();
});

// calculateing numbers

function calculateNumbers() {

const amount = enteredAmountD.value;  
const intrest = enteredIntrestD.value;
const years = enteredYearsD.value;
const totalMonth = years*12;

const x =  (1 + ((intrest / 100) / totalMonth) );
const y =   Math.pow(x , totalMonth); 
const z =   amount * y;   // gives total payable amount
console.log(z);  


if(intrest === null || intrest === 0) {
  const c = amount / totalMonth;
  monthlyPayment.value = parseFloat(c.toFixed(3));
}

if (z !== 0) {
  totalPayment.value = parseFloat(z.toFixed(3));
  monthlyPayment.value = parseFloat((z / totalMonth).toFixed(3));   // i had to write this much code becose "tofixed" converts a number to a string, and we need to convert it back to a number
  totalIntrest.value = parseFloat((z - amount).toFixed(3));
  document.getElementById('results').style.display = 'block';
  document.getElementById('loading').style.display = 'none';
} else {
  showError('please enter a valid number');
}

}

function showError(error) {
// clearing loading img
document.getElementById('loading').style.display = 'none';

// clearing the result block
document.getElementById('results').style.display = 'none';
//creat a div 
const errorBlock = document.createElement('div');

// get element 
const card = document.querySelector('.card');
const heading = document.querySelector('.heading');

// give a class to a element 
errorBlock.className = 'alert alert-danger';

//creat a text and appent it 
errorBlock.appendChild(document.createTextNode(error));

card.insertBefore(errorBlock, heading);

setTimeout(clearError, 3000);

}

function clearError() {
  document.querySelector('.alert').remove();
}
