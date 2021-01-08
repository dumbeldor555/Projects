    // Storage controller
       
    // Item Controller
    //     item object constructor
    //     data object wich containes item [{},{}] each object holds newly created object 
    //     from object constructor, and also hold currentItem, and totalCalories
    //        return methods wich are public methods
    //          getItem() ;;makes a new id in incremant order;; parses calaories in integer;; creat new object from ItemFunctionCunsroctor;; push new data in item arry ;; finnaly returns newly created object 

    //          addItem()
    //          getItemById()
    //          setCurrentItem()
    //          getCurrentItem()
    //          getTotalCalories()
    //          logData()

    // UI Controller
    //    UISelctor object, wich holds HTML ids and classes
    //       return object wich are public methods
    //          populateItemList()
    //          getItemInput()
    //          addListItem()
    //          clearInput()
    //          addItemToForm()
    //          hideList()
    //          showTotalCalories()
    //          clearEditState()
    //          showEditState()
    //          getSelector()

    // App Controller
      //  loadEventListeners()
      //  itemAddSubmit()
      //  itemUpdateSubmit()
        //  return object wich are public methods
          //  init() // wich contains below calls methods
            //  UI.clearEditState()
            //  itemCtrl.getItems()
              // loadEventListners()



// ******************************************************************************** */             
//Item Controller
const ItemCtrl = (function() {

  const Item = function(id, name, calorie) {

    this.id = id
    this.name = name
    this.calorie = calorie
  }

  const data = {

    items: [],
    currentId: null,
    totalCalories: 0
  }

  //public method
  return {

    getItems: function() {

    return data.items;
    },

    addItem: function(meal, Inputcalorie) {

    let id;
    // making new id for each object dynamically
    if(data.items.length > 0) {
    id = data.items[data.items.length - 1].id + 1;
    }else {
      id = 1;
    }
    // convert calories to number
    calorie = parseInt(Inputcalorie);

    // creating new object 
    const newItem = new Item(id, meal, calorie);
    // pushing new object into the arry 
    data.items.push(newItem);
    
    // returning new object
    return newItem;
  },
  logData: function() {

  return data;
  },
  
  deleteItem: function(id) {
    // spliting the id like "item"--"2"
  const idNum =  id[5];
  // converting and idNum into a number and storing it into the newVariable
  const intIdNum = parseInt(idNum);
  // const arryLen = data.items.length;
  data.items.splice(intIdNum -1 , 1);
  // console logging remaining items in an data arry
  console.log(data.items);
  // getting item from arry
  //   
   // deleting id from data arry
  //  for(let i = 0; i < arryLen; i++) {
  //   if( intIdNum  === data.items[i].id){
  //     data.items[intIdNum - 1].delete();
  //    break;
  //   }
  //  };
  },

  editIDs: function(id) {
    console.log('calling from editIDs (itm ctrl)')
    const intId = parseInt(id[5]);
  data.items[intId - 1].calorie = document.querySelector(UICtrl.getUISelectors().itemCal).value;
  data.items[intId - 1].name = document.querySelector(UICtrl.getUISelectors().ItemName).value;
  }

  }
})();

             
// *************************************************************************************************
//storage controller
 
const StorageController = (function() {

  const clearAllInStorage = function() {
  
  // making whole object in local storage to null
   localStorage.setItem('items', null);

  }

  const addInStorage = function() {
 // getting arry of users from the itemctrl
 const listOfUser =  ItemCtrl.logData();
 // stringifying list 
 const stringList = JSON.stringify(listOfUser);
 // storeing data into the local storage
 localStorage.setItem('items', stringList);
  }
 
const editInStorage =  function() {
  // getting an id from itemCtrl
  const currentId = ItemCtrl.logData().currentId[5];
  // parsing that id into a number
  const currentIntId = parseInt(currentId)
  // getting arrys from localStorage
  const listOfUser = localStorage.getItem('items');
  // parsing into javascript object from string
  const paresedArry = JSON.parse(listOfUser);
  // updating arry in the locla storage
  const item = paresedArry.items[currentIntId - 1];
  // setting new name and calories 
   const domSelecters = UICtrl.getUISelectors();
  item.name = document.querySelector(domSelecters.ItemName).value;
  item.calorie =  document.querySelector(domSelecters.itemCal).value;
  // setting new total in local storage
  paresedArry.totalCalories = ItemCtrl.logData().totalCalories;
  // setting the updated ids in local storage as a string 
  localStorage.setItem('items',JSON.stringify(paresedArry));
}

const delteInStorage = function() {
   // getting an id from itemCtrl
   const currentId = ItemCtrl.logData().currentId[5];
   // parsing that id into a number
   let currentIntId = parseInt(currentId);
   // getting string  from localStorage 
   const listOfUser = localStorage.getItem('items');
   // parsing string  into javascript object from string
   const paresedArry = JSON.parse(listOfUser);
   // updating ids of list items
   const left = paresedArry.items.length - currentIntId;
   for(let i = 0; i < left; i++) {
     paresedArry.items[currentIntId].id = currentIntId;
     currentIntId++;
     
   }
   // setting current Int id agian to its orignal id
   currentIntId = parseInt(currentId);
   // deleting from local storage
    paresedArry.items.splice(currentIntId - 1, 1);
    // updating new total calories into the local storage
    paresedArry.totalCalories = ItemCtrl.logData().totalCalories;
    console.log(paresedArry);
    // setting the remaing ids in local storage as a string 
   localStorage.setItem('items',JSON.stringify(paresedArry));
}
 
  // public methods
  return {
    addInLocalStorage: function() {
      return addInStorage();
    },
    getFromLocal: function() {
      return loadListfromStorage();
    },
    editInLocalStorage: function() {
      return editInStorage();
    },
    deleteInLocalStorage: function() {
      return delteInStorage();
    },
    clearAllInLocalStorage: function() {
      return clearAllInStorage();
    }

  }

})();


//***************************************************************************** */

//UI Controller 
const UICtrl = (function() {
const UISelectors = {
  editBtn:'.update-btn',
  deleteBtn: '.delete-btn',
  backBtn: '.back-btn',
  addBtn: '.add-btn',
  itemList: '#item-list',
  ItemName: '#item-name',
  itemCal: '#item-calories',
  totalCalories: '.total-calories',
  clearAllBtn: '.clear-btn',

}

  //public method
  return {

  clearEditState: function() {
   // clearing edit delete and back btn from UI
   document.querySelector(UISelectors.editBtn).style.display = 'none';
   document.querySelector(UISelectors.deleteBtn).style.display = 'none';
   document.querySelector(UISelectors.backBtn).style.display = 'none';
   document.querySelector(UISelectors.addBtn).style.display = 'inline';
  },

  getUISelectors: function() {
  return UISelectors;
  },

  getItemInput: function() {
  return {
    name: document.querySelector(UISelectors.ItemName).value,
    calories: document.querySelector(UISelectors.itemCal).value
  }
  },

  addListItem: function(itemObj) {
  // creating an li element
  const li = document.createElement('li');
  // setting a class name for li element
  li.className = 'collection-item';
  // setting a id name for li element 
  li.id = `item-${itemObj.id}`;
  //inserting HTML into li element 
  li.innerHTML = `
  <strong>${itemObj.name}</strong> <em>${itemObj.calorie}</em>
  <a href="#" class="secondary-content">
    <i class="edit-item fa fa-pencil"></i>
  </a>
  `;
  // inserting li element into the dom
  document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);

  },

  getTotalCalories: function(calorie) {
    // parsing input calorie data into integer
  const cal = parseInt(calorie);
   // returning data from data object
  return ItemCtrl.logData().totalCalories += cal;
  },

  editTotalCal: function(id) {
   console.log('calling from editTotalCal');
   const oldCal = document.querySelector(`#${id}`).children[1].textContent;
   // parsing the oldCal into the integetr from string
   const oldIntCal = parseInt(oldCal);
   // getting old total calories from data
    const oldTotalCal = ItemCtrl.logData().totalCalories;
    // getting newly typed calories 
    const newCal = UICtrl.getItemInput(id).calories;
    // parsing newly typed calories
    const IntNewCal =  parseInt(newCal);
    // updating total caloies
    const newTotel = oldTotalCal - oldIntCal + IntNewCal;
    //inserting newTotal calories into the data 
    ItemCtrl.logData().totalCalories = newTotel;
  },

  decrementTotalCal: function(id) {
    // getting old calorie from clicked id <li>
    const oldCal = document.querySelector(`#${id}`).children[1].textContent;
    // parsing the oldCal into the integetr from string
    const oldIntCal = parseInt(oldCal);
    // getting old total calories from data
     const oldTotalCal = ItemCtrl.logData().totalCalories;     
    // decrementing total calories
     const newTotel = oldTotalCal - oldIntCal;
    //   //inserting newTotal calories into the data 
    ItemCtrl.logData().totalCalories = newTotel;
  },

  showTotalCalories: function() {
    // getting total calories from data arry
  const totalCal =  ItemCtrl.logData().totalCalories;
  
  // inserting total calories into the dom 
  document.querySelector(UISelectors.totalCalories).textContent = totalCal;
  },

  showTotalCaloriesPageLoad: function() {
  const list = localStorage.getItem('items');
  const parsedList = JSON.parse(list);
  document.querySelector(UISelectors.totalCalories).textContent = parsedList.totalCalories;
  localStorage.setItem('items', JSON.stringify(parsedList));
  },

  clearFeilds: function() {

  document.querySelector(UISelectors.ItemName).value = '';
  document.querySelector(UISelectors.itemCal).value = '';
  },

  showEditBtns: function() {

  document.querySelector(UISelectors.editBtn).style.display = 'inline';
  document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
  document.querySelector(UISelectors.backBtn).style.display = 'inline';
  },
  hideAddBtn: function() {
  
    document.querySelector(UISelectors.addBtn).style.display = 'none';
  },

  deleteItem: function(id) {
   const intId = parseInt(id[5]);
  //  console.log(intId);
   const arryLen = ItemCtrl.getItems().length;
   const arry = ItemCtrl.getItems();
   const currentItm = arry[intId - 1].id;

  // console.log(arryLen);
    for(let i = 0; i < arryLen; i++) {
     if( intId === currentItm){
      document.querySelector(`#${id}`).remove();
      break;
     }
    };
  },

  InsertInInputs: function(id) {
    //getting inputs 
   const name = document.querySelector(`#${id}`).children[0].textContent;
   const calorie = document.querySelector(`#${id}`).children[1].textContent;
    // inserting them into input feilds
    document.querySelector(UISelectors.ItemName).value = name;
    document.querySelector(UISelectors.itemCal).value = calorie;
  },

  editIDs: function(id) {
    console.log('calling from editId');
  document.querySelector(`#${id}`).children[0].textContent = document.querySelector(UISelectors.ItemName).value;
  document.querySelector(`#${id}`).children[1].textContent = document.querySelector(UISelectors.itemCal).value;
  },

  decrementIdByOne: function(id) {

  let idNum = parseInt(id[5]);  
  // getting lenthg of an arry
  const items = ItemCtrl.logData().items.length; // 1 2 2 3 4
  const left = items - idNum;
  for(let i = 0; i < left; i++ ) {
    // decrementing id in the data arry
   ItemCtrl.logData().items[idNum].id = idNum;
   
  // decrementing id in UI li elements
  const ul = document.querySelector(UISelectors.itemList).children;
  ul[idNum].id = `item-${idNum}`;
   idNum++;
  }
  },

  hideUl: function() {
    document.querySelector(UISelectors.itemList).style.display = 'none';
  }
  
  }
})();



//************************************************************************************* */

//App Controller

const App = (function() { 

  // loading list items from localstorage
  const loadListItems = function() {

    // getting all list items from the local storage
    const listItems = localStorage.getItem('items');
    // parsing string from local storage into the jacascript obj
    const parsedArry =  JSON.parse(listItems);
     console.log(parsedArry);

     if(parsedArry !== null ) {
     // insertin items into the data arry first 
     for(let i = 0; i < parsedArry.items.length; i++) {
     
       ItemCtrl.getItems()[i] = parsedArry.items[i]; 
     }
     // inserting items into the dom when the page is being loaded
     for(let i = 0; i < parsedArry.items.length; i++) {
       
       UICtrl.addListItem(parsedArry.items[i]);
     }
     // stringifiying an obj befor showTotalCaloriesPageLoad can retrive it in its function again
     localStorage.setItem('items',JSON.stringify(parsedArry));
     
     // showing total calories from local storage
     UICtrl.showTotalCaloriesPageLoad(); 
     };
   
  }

  //load event listners 
  const loadEventListeners = function() {
   //getting UI selectors
    const Domselecter = UICtrl.getUISelectors();
    // adding item into the ui  
    document.querySelector(Domselecter.addBtn).addEventListener('click', itemAddSubmit);
    // disableing enter key to prevent adding item in ui
    document.addEventListener('keypress', function(x) {
      if(x.keyCode === 13 || x.which === 13) {
      x.preventDefault();
      return false;
      }
    })
    //displaying edit btns in the ui
    document.querySelector(Domselecter.itemList).addEventListener('click', displayEditBtn);
    // updating id's in the ui and in the data arry
    document.querySelector(Domselecter.editBtn).addEventListener('click', updateId);
    // clearing all item from UI
    document.querySelector(Domselecter.clearAllBtn).addEventListener('click', clearAll);
    // deleteing an id from ui
    document.querySelector(Domselecter.deleteBtn).addEventListener('click', deleteItem);
    // hiding edit btn again and showing add btn 
    document.querySelector(Domselecter.backBtn).addEventListener('click', hideEditBtn);

  }


  // clear all items from UI
  const clearAll = function(x) {

  const DomSelecter = UICtrl.getUISelectors();

 // making Ul empty in the dom // clearing all the list items that has been typed by user
 document.querySelector(DomSelecter.itemList).innerHTML = '';
 
 // delteting all items from data arry 
  ItemCtrl.getItems().splice(0, ItemCtrl.getItems().length);
  // set total calories to 0 again 
  ItemCtrl.logData().totalCalories = 0;
  // showing new calories
  UICtrl.showTotalCalories();
  // clearing all items from local storage
  StorageController.clearAllInLocalStorage();
 
    x.preventDefault();
  }     


  // delteing an id from ui
  const deleteItem = function(x) {
      // getting current id from data arry 
      const itemId = ItemCtrl.logData().currentId;
     // make sure to call "UICtrl.decrementTotalCal(itemId);" before any other in this block of funciton
      // decrementing total calories
      UICtrl.decrementTotalCal(itemId);
      // showing total calories
      UICtrl.showTotalCalories();
      // decrementing html element id by one and decrementing data arrys id by one// 1 2 3 4 5 6 7 8
      UICtrl.decrementIdByOne(itemId);
      const y = ItemCtrl.getItems();
      console.log(y);
      
      // deleting from UI  // below method is diffrent dispite the same name look at the code from the start of the line the function resides in diffrent iffs(immidiatly invoce function)
      UICtrl.deleteItem(itemId);
      // deleting item from data arry
      ItemCtrl.deleteItem(itemId);
      // clearing input feilds
      UICtrl.clearFeilds();
      // deleteing from the local storage
      StorageController.deleteInLocalStorage();
    
    x.preventDefault();
  }


  //updating an id 
  const updateId = function(x) {
    const itemId = ItemCtrl.logData().currentId;
      // make sure to call this function "UICtrl.editTotalCal(itemId)" befor calling the below function
            // updating total calories and storing it into the data arry
            UICtrl.editTotalCal(itemId);

            // updating ids calorie and name in the ui
            UICtrl.editIDs(itemId);

            // updatin ids calorie and name in the data arry this funciton resides in ItemCtrl
             ItemCtrl.editIDs(itemId);

             // updating id in local storage
            StorageController.editInLocalStorage();

            //showing total calories with new total calories 
            UICtrl.showTotalCalories(itemId);
          
            // clearInputFrom input feild
            UICtrl.clearFeilds();

              
                          
            x.preventDefault();
  }


  // displaying edit btns in the ui
  const displayEditBtn = function(x) {
    if(x.target.classList.contains('edit-item')) {

      // showing edit btns
      UICtrl.showEditBtns();
      //hidiing add btn
      UICtrl.hideAddBtn();
      // getting id of that clickd li
      const itemId =   x.target.parentNode.parentNode.id;
      // putting data into the input feilds
      UICtrl.InsertInInputs(itemId);
      // updating current id in the data arry
      ItemCtrl.logData().currentId = itemId;
    }
    
   x.preventDefault();
  }

   
  // hiding edit btn and showing add btn again when a back btn is clicked
  const hideEditBtn = function(x) {
    UICtrl.clearEditState();

    x.preventDefault();
  }


  // adding an list item into the ui
  const itemAddSubmit = function(x) {
    //get input from UI controller
    const input = UICtrl.getItemInput();

    if(input.name !== '' && input.calories !== '') {

      //making a new object with new name and new calories
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      //adding newItem to UI 
      UICtrl.addListItem(newItem);
      //updating new total new calories
     const totalCalories = UICtrl.getTotalCalories(input.calories);
      //displaying total calories in the ui
     UICtrl.showTotalCalories(totalCalories);
     //clear feilds
     UICtrl.clearFeilds();
     // storing it into the localstoreg
     StorageController.addInLocalStorage();
     
    }

    x.preventDefault();
  }


  //public methods
  return {
    Init: function() {
     //clearing edit delete and back button from ui
     UICtrl.clearEditState();
  
    // loading event listners
    loadEventListeners();

    // getting list items from localstorage and displaying them in UI
    loadListItems();
    },
  }

})();//wiuv2611
   

App.Init();
// 1 2 3 4 5 6 7 8 9
