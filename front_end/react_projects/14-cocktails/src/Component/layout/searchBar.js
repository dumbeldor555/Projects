const SearchBar = (props) => {

  const {heading, dispatch, url, defaultQuerry} = props;
  console.log(defaultQuerry);
  const handleClick = (dispatch, event) => {
    // console.log(event);
  if((event.keyCode > 64 && event.keyCode < 91) || event.keyCode == 8) {
  const input = document.querySelector('.serchBarInput').value;
console.log(input);
   dispatch({type:'SHOW_LOADING'});
   


  if(input) {  
    const getCocktail = async () => {
      const data = await fetch(url.concat(input));
      const response = await data.json();
      return response;
    }

    getCocktail().then(
      (response) =>{
       dispatch({type:'SEARCH', response: response})
      }
    ).catch(new Error('somthing went wrong during fetching')); 

  }else {

    const getCocktail = async () => {
      const data = await fetch(url.concat(defaultQuerry));
      const response = await data.json();
      return response;
    }

    getCocktail().then(
      (response) =>{
       dispatch({type:'SEARCH', response: response})
      }
    ).catch(new Error('somthing went wrong during fetching')); 
}
} 
      
  }
  return(
    <div className="SearchBar">
       <p className="searchBarHeading">{heading}</p>
        <input type="text" onKeyUp={(e) => {
          //applying bind to a function does not call the funciton by itself you have to call it by adding an 
          // extra pair perenthisis 
          handleClick.bind(this, dispatch, e)();
        }}  className="serchBarInput"/>   
    </div>
  )
}


export default SearchBar;