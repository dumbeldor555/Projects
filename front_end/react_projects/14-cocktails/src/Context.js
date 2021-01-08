import React,{Component} from 'react';
import {AboutText} from './Utilites/text';
// importing logo from utilites folder
// import logo from  './Utilites/logo.svg';
const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'SEARCH':
      console.log(action.response);
      return{
        ...state,
        data: action.response,
        isLoading: false
      }
    case 'ALL_COCKTAILS':
      // console.log(action.data);
      return{
        ...state,
        data: action.data,
        isLoading: false
      }
    case 'DISPLAY_INDIVIDUAL_DRINK':
      return{
        ...state,
        clickedCocktail: action.cocktail
      } 
    case 'SHOW_LOADING':
      return{
        ...state,
        isLoading: true,
      } 

    case 'SHOW_HOME':
      return{
        ...state,
        showAbout: false,
        showSearchBar: true, 
        showCocktails: true
      }
  }
}

class Provider extends Component {

  state = {
    url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    // don't forgate to bring logo instead below in navHeading
    curruntQuery: '',
    defaultQuerry:'a',
    navHeading: 'here goes the logo',
    searchBarHeading: 'search your favorite cocktial',
    cocktailHeading: 'cocktails',
    clickedCocktail: '',
    aboutHeading: 'about us',
    notFoundError: 'cocktail not found',
    didFoundCocktail: '',
    isLoading: true,
    about: AboutText,
    // showAbout: false,
    showSearchBar: true,
    showCocktails: true, 
    data: '',
    dispatch: (action) => {
      this.setState((state) => {
        return reducer(state, action);
      })
    }
  }
// making call to api to get default cocktail data

async componentDidMount() {
   
  const data = await fetch(this.state.url.concat(this.state.defaultQuerry));
  const response = await data.json();
  this.state.dispatch({type:'ALL_COCKTAILS', data: response});
}

  render() {
    return(
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Provider;
const Consumer = Context.Consumer;
export {Consumer}