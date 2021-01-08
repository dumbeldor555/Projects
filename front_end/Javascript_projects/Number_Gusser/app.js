/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

const initialNumberOfGuesses = 3;

let min = 1,
    max = 10,
    winningNnumber = randomWinnigNumber();
    numberOfGuesses = initialNumberOfGuesses;
    
// dom element variable
  const input = document.querySelector('#guess-input');
  const button = document.querySelector('#guess-btn');
  const minNum = document.querySelector('.min-num');
  const maxNum = document.querySelector('.max-num');
  const message = document.querySelector('.message');

  // assigning values to bom max and min numbers
  minNum.textContent = min;
  maxNum.textContent = max;

  // giving a message about number of guesses 

  document.addEventListener('DOMContentLoaded',displayNumberOfGuesses);

  function displayNumberOfGuesses() {
    if(numberOfGuesses === initialNumberOfGuesses ){
      setMessage(`you have ${numberOfGuesses} Guesses` , 'black');
    }
  }

// initiating number checking function
button.addEventListener('click' ,checkinput);

//checks entered input
function checkinput(){
  if(numberOfGuesses !== 1){
    numberCheck();
  }else {
      button.value = 'PLAY AGAIN';
      setMessage(`oops..!! out of guesses, correct answer was ${winningNnumber}`, 'red');
      input.disabled = true;
      button.addEventListener('click',playAgain);
  }
  }


// number checking 

function numberCheck(e) {
const realInput = parseInt(input.value);

if(isNaN(realInput) || realInput < min || realInput > max) {
  setMessage(`please enter a number between ${min} and ${max}`, 'red');

}else if(realInput === winningNnumber) {
  // things to do if you won
  setMessage(`${winningNnumber} is correct You won` , 'green');
  input.disabled = true;
  button.value = 'PLAY AGAIN';
  button.addEventListener('click',playAgain);

 
}else {
  numberOfGuesses -= 1;
  setMessage(`${realInput} is an incorrect answer, ${numberOfGuesses} guesses left` ,'red');
  input.value = '';
}
// set message to UI  
}

function setMessage(msg ,color) {
  message.textContent = msg;
  message.style.color = color;
  input.style.borderColor = color;
}

function playAgain() {
   input.value = '';
  if(button.value === 'PLAY AGAIN'){
   window.location.reload();
  }
}

//random winning number genreter 
function randomWinnigNumber(){
  return Math.floor(Math.random() * (max - min + 1)) + min ;
}



// for some resone the belowe code (your attepmted code ) is not working

//  //  console.log('play again');
//  button.value = 'submit';
//  numberOfGuesses = initialNumberOfGuesses;
//  // reDisplayNumberOfGuesses
//  displayNumberOfGuesses();
//  //enable input fild
//  input.disabled = false;
//  // button.addEventListener('click',checkinput);