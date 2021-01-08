// get input 
// add an event listner

const searchUser = document.querySelector('#searchUser');

// instatiating callases 
github = new Github();
ui = new UI();


// adding an event listner 
searchUser.addEventListener('keyup' ,(x) => {
 const searchText =  x.target.value;

if(searchText !== ''){
  // make an http request 
  github.getUser(searchText)
  .then(data => {
if(data.profile.message === 'Not Found'){
ui.displayError(`user doesn't exist`);

}else {
  ui.displayUser(data.profile);
  ui.displayRepos(data.userRepos);
}
  })
}else {
 ui.clearDisplay();
}

})
