// brad's way

// const User = function(name) {
//   this.name = name;
//   this.cahtroom = null;

// }

// User.prototype = {
//  send : function(msg, to) {
//   this.chatroom.send(msg, this, to);
//  },
//  recive : function(msg, from) {
//    console.log(`${from.name} to ${this.name} : ${msg}`);
//  }
// }

// const Chatroom = function() {
//  let users = {};
 
//  return {
//    register: function(user) {
//      users[user.name] = user;
//      user.chatroom = this;
//    },
//    send: function(msg, from, to) {
//     if(to) {
//       to.recive(msg, from);
//     }else {
//       for(key in users) {
//         if (users[key] !== from) {
//           users[key].recive(msg,from);
//         }
//       }
//     }
//    }
//  }
// }

// const aadil = new User('aadil');
// const ujef = new User('ujef');
// const aafrin = new User('aafrin');

// const chatroom = new Chatroom();


// chatroom.register(aadil);
// chatroom.register(ujef);
// chatroom.register(aafrin);

// aadil.send('hello', aafrin);

// somewhat understood brad's way it needs more practice
// keep learning

// my way to build a chatting functions with a bit of a challange and twist
// give it a delet funcitonality
// and when the page reload all chat shoud remain as it is, unless clear manually

const userArry = []; // will store all user object 

const User = function(name) {
  this.name = name;
}

//declaring index ;
let index = 0;


//uers prototype function
User.prototype = {

  send: function(msg, reciver, sender, to, from,) {
    // creat a new element from scretch
    let newDiv = document.createElement('div');
    newDiv.className = 'send'; 
    newDiv.id = 'sendID';
   
    // getting div element from dom to append chiled
    let Div = document.querySelector('#msgContent');

     //creating user div
     let userDiv = document.createElement('div');
     userDiv.className = 'h5-sender';
     userDiv.id = 'id-sender';
     userDiv.innerHTML = `
     ${sender}
     `;
     Div.appendChild(userDiv);

    // inserting HTML in the newDiv element
    newDiv.innerHTML += `
    <p>${msg}</p>
    <p>:to ${reciver}</p>
    `;

    //inserting element into the dom or displaying content on the dom
    Div.appendChild(newDiv);


    // console.log(`${from.name} sent a msg to ${to.name}: ${msg}`);
    // console.log(this.recieve(to, from));
  },
  recieve: function(msg, reciver, sender,from, to,){
    // creat a new element from scretch
    let newDiv = document.createElement('div');
    newDiv.className = 'recive';
    newDiv.id = 'reciveID';

    //getting a div element from dom to append chiled
    let Div = document.querySelector('#msgContent');

    //creating user div
    let userDiv = document.createElement('div');
    userDiv.className = 'h5-reciver';
    userDiv.id = 'id-reciver';
    userDiv.innerHTML = `
    ${reciver}
    `;
    Div.appendChild(userDiv);

    // inserting HTMl in newDiv 
    newDiv.innerHTML += `
    <p>${msg}</p>
    <p>:from ${sender}</p>
    `;

    //inserting element into the dom or displaying content on the dom
    Div.appendChild(newDiv);

  //  console.log(`received msg for ${to.name} from ${from.name}:  ${msg} `)
  }
}



// const aadil = new User('aadil');
// const  ujef = new User('ujef');
// aadil.send('hello', ujef, aadil);

// adding event listner 
const strBtn = document.querySelector('.str-btn');
strBtn.addEventListener('mousedown', makeNewUser());
strBtn.addEventListener('mouseup', clear());

// making new user
function makeNewUser() {
  return  function() {
    // const name = document.querySelector('.inputName').value;
    let sender = document.querySelector('.sender').value;
    let reciver = document.querySelector('.reciver').value;
    let msg = document.querySelector('.msg').value;

    const newUser = new User(sender);
    const newUser1 = new User(reciver);

    newUser.send(msg, reciver, sender);
    newUser1.recieve(msg, reciver, sender);
    // newUser.recieve(msg, reciver, sender );

    index++;

  }
}

// clearing input fields
function clear() {
  return function() {
    document.querySelector('.sender').value = '';
    document.querySelector('.reciver').value = '';
    document.querySelector('.msg').value = '';

    delete newUser;
    delete newUser1
  }

}

// clearing chat when clearChat button is clicked
// addinng event listner to button 

document.querySelector('#clearChat').addEventListener('click', clearChat);

// making clear chat funciton
function clearChat() {
  // lazy way and short way of clearing all chat from DOM
//  window.location.reload();
//  little bit harder way
 
if(index !== 0) {
  
 for(let index1 = 0; index1 < index;) {
  const container = document.querySelectorAll('#msgContent');
  const allSendDiv = document.querySelectorAll('#region sendID');
  const allReceiveDiv = document.querySelectorAll('#reciveID');
  const senderName = document.querySelectorAll('#id-sender');
  const reciveName = document.querySelectorAll('#id-reciver');


  // container.removeChild(senderName[index1]);
  // container.removeChild(reciveName[index1]);
  // container.removeChild(allSendDiv[index1]);
  // container.removeChild(allReceiveDiv[index1]);
  console.log(allSendDiv);
  console.log(senderName);
  console.log(reciveName);
  console.log(allReceiveDiv);
  senderName[index1].remove();
  reciveName[index1].remove();
  allSendDiv[index1].remove();
  allReceiveDiv[index1].remove();
  
   index1++;
 }
}

}


// 1 and 9
//2 3 and 5 7 10
//4 
// 8



