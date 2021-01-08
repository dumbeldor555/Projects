
function myObject () {
  // funciton constructor
  this.myArray = [];

}

myObject.prototype = {


  // get currunt numberElement
  getCurrentNumber: function () {  
  const number = document.querySelector('.currentNumber');
  return number;
  },

  // get current index 
  getCurrentindex: function() {
    const index = document.querySelector('.currentIndex');
    return index;
  },

  // set index to 0
  setToZero: function() {
    const index = document.querySelector('.currentIndex');
    index.innerHTML = 0;
  },

  // get current index of the number
  getIndex: function (inc, dec) {
    if(inc) {

      let index = document.querySelector('.currentIndex').innerHTML;
      index++;
      document.querySelector('.currentIndex').innerHTML = index;
  
      return index;
    } else if (dec){
      
      if(document.querySelector('.currentIndex').innerHTML > 0) {

        let index = document.querySelector('.currentIndex').innerHTML;
        index--;
        document.querySelector('.currentIndex').innerHTML = index;  
        return index;
      }      
    } else {
      currentIndex = document.querySelector('.currentIndex').innerHTML;
      return currentIndex;
    }
  },

  // increment number
  increment: function(n = this.getIndex(true, false)) {
    if(n === 0) {
      result = 1;
      return result;
    } else if(n === -2) {
      result = 0;
      return result;
    } else if (n === -1) {
      result = 0;
      return result;
    } else if(n === 1) {
      result = 0;
     this.myArray.push(result);
      return 0;
    } else if(n === 2) {
      result = 1;
      this.myArray.push(result);  
      return result;
    } else if (n === 3) {
      const result = 1; 
      this.myArray.push(result);
      return result;
    } else {
    
    const result =  this.myArray[n-2] + this.myArray[n-3];
    this.myArray.push(result);
    return result;
    }
  },

  // decrements number
  decrement: function() {
    const returnedNumber = this.search(this.getIndex()).returnedNumber; 
    this.getIndex(false, true); 
    this.myArray.pop();
    return returnedNumber; 
  },
  
    // searching the number by the index provided
    search: function(index = document.querySelector('.indexOfSequence').value) {
    console.log(typeof(index));
    // let index  = document.querySelector('.indexOfSequence').value;
    if(typeof(index) === 'number') {
      // do nothing becuse the provided number is alredy a number
    } else if((index.charCodeAt() >= 65 && index.charCodeAt() <= 122) || (index.charCodeAt() >= 0 && index.charCodeAt() <= 47)) {
      // do nothing becuse its an alphabetical value
      return alert('must be a positvie integer');   
    } else if(index%1 !== 0) {
      // do nothing becuse the provided input is a float
      return alert('must be a positvie integer');
    }else {
      // parse the string into a number
      index = parseInt(index); 
    }
    
    let returnedNumber;

    // cheking if index is 0
    if(index === 1) {
      returnedNumber = 0;
    }else if(index === 0) {
      returnedNumber = 0;
    } else if(index > this.myArray.length) {
        for(let i = 1; i < index + 1; i++) {

          if(i === 1) {
            this.myArray = [];
            this.setToZero();
          }
          returnedNumber = this.increment(i);
          this.getIndex(true, false);
        }
    }else if(index < this.myArray.length) {

        returnedNumber = this.myArray[index - 1];
        this.setToZero();
    } else {

      returnedNumber = this.myArray[index - 2];
    }
    return {returnedNumber, index};
    }

}

const doFibonnaci = new myObject();

document.querySelector('.increment').addEventListener('click', function() {
const currentNumber = doFibonnaci.getCurrentNumber();
const returnedNumber = doFibonnaci.increment();
 currentNumber.innerHTML = returnedNumber;
});

document.querySelector('.decrement').addEventListener('click', function() {
  const currentNumber = doFibonnaci.getCurrentNumber();
  const returnedNumber = doFibonnaci.decrement();
  currentNumber.innerHTML = returnedNumber; 
});

document.querySelector('.typedInput').addEventListener('click', function() {
  const currentNumber = doFibonnaci.getCurrentNumber();
  const currentIndex = doFibonnaci.getCurrentindex();
  currentNumber.innerHTML = doFibonnaci.search().returnedNumber;
  currentIndex.innerHTML = doFibonnaci.search().index;
});

/////////////////////////// trial code ////////////////////////////////
// very poor tachnic to write fibinoacci sequenc by recurrsion
// function my(n) {

// if(n === 1) {
//   return 0;
// } else if(n === 2) {
//   return 1; 
// } else {
//   return my(n - 1) + my(n - 2);
// }
// }

// a better way to write the above code
// function my(n) {

// if(n === 1) {
//   result = 0;
//   myArray.push(result);
//   return 0;
// } else if(n === 2) {
//   result = 1;
//   myArray.push(result);  
//   return result;
// } else if (n === 3) {
//   const result = 1;
//   myArray.push(result);
//   return result;
// } else {

// const result = myArray[n-2] + myArray[n-3];
// myArray.push(result)
// return result;
// }

// }

// document.querySelector('.typedInput').addEventListener('click', function() {
  
//   my();
// });

// function my() {

// let index  = document.querySelector('.indexOfSequence').value;
// if((index.charCodeAt() >= 65 && index.charCodeAt() <= 122) || (index.charCodeAt() >= 0 && index.charCodeAt() <= 47)) {
//   // do nothing becuse its an alphabetical value
// } else if(index%1 !== 0) {
//    // do nothing becuse the provided input is a float
// } else {
//   index = parseInt(index);
// }

// // check the provided input by user 
// if(typeof(index) === 'string') {

//   return alert('must be an integer');
// }

// let returnedNumber;
// let returnedIndex;

// // cheking if index is 0
// if(index === 0) {

//   returnedNumber = 0;
//   returnedIndex =0;
// }
// for(let i = 1; i < index + 1; i++) {

//   if(index > doFibonnaci.myArray.length) {
//     console.log('if is working');
//     if(i === 1) {
//       doFibonnaci.myArray = [];
//       doFibonnaci.setToZero();
//     }
//     returnedNumber = doFibonnaci.increment(i);
//     returnedIndex = doFibonnaci.getIndex(true, false);
//   } else if (index < doFibonnaci.myArray.length) {
   
//    returnedNumber = doFibonnaci.myArray[index - 1];
//    doFibonnaci.setToZero();
//    returnedIndex = index; 
//   }
 
// }

// const currentNumber = document.querySelector('.currentNumber');
// currentNumber.innerHTML = returnedNumber;
// const currentIndex = document.querySelector('.currentIndex');
// currentIndex.innerHTML = returnedIndex;
// }

// document.querySelector('.increment').addEventListener('click', function(params) {

//   console.log(doFibonnaci.myArray);
// })
// 5
// 0 1 1 2 3
// 1 2 3 4 5