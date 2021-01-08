import React , {Component} from 'react';
import  data from './Data/data';
const Context = React.createContext();

// heres a reducer funciton 
const reducer = (state, action) => {
  
switch (action.type) {
  case 'SORT':
    return{
      ...state,
      menu: state.menu.filter((food) => food.category === action.category)
    };
  case 'ALL':
    return{
      ...state,
      menu: data
    }
  default: 
  return state;
}
}

class Provider extends Component {

  state = {
    data: data,
    menu : data,
    heading: 'Our Menu',
    navItems: [
      'All',
      'Breakfast',
      'Lunch',
      'Shakes'
    ],
    reload: () => {
      this.setState((state) => {
        return {
          ...state,
          menu: data
        }
      })
    },
    dispatch: (action) => {
      this.setState((state) => {
        return reducer(state, action);
      })
    }
}

  render() {
    return(
      <Context.Provider value={this.state}>
        {this.props.children}        
      </Context.Provider>
    )
  }
}

const Consumer =  Context.Consumer;
export default Provider; 
export {Consumer}