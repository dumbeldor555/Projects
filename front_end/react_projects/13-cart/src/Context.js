import React,{Component} from 'react';
// import reducer from '../../../FreeCodeCampReact-Projects-Code/react-projects/14-cart/final/src/reducer';
import data from './data';

const Context = React.createContext();

const reducer = (state, action) => {
switch(action.type) {
  case 'CLEAR_ALL_ITEM': 
  return{
    ...state,
    cartData: ''
  }
  case 'DO_TOTAL':
    return{
      ...state,
      cartTotal: (() => {
       let price = 0;
        action.data.forEach(element => {
         price += element.price*element.quantity;
        })
       return price.toFixed(3);
      })(),
      totalCartItem: (() => {
        let quantity = 0;
         action.data.forEach(element => {
          quantity += element.quantity
         })
        return quantity;
       })()
    } 
    case 'INCREMENT':
      return{
        ...state,
        cartData: state.cartData.map((element) => {
          // console.log(element.id, action.id);
          if(element.id === action.id) {
            element.quantity = element.quantity + 1 ;
            console.log(element);
          }
          return element;
        })
      }
    case 'DECREMENT':
      return{
        ...state,
        cartData: state.cartData.map((element) => {
          // console.log(element.id, action.id);
          if(element.quantity > 1) {
            if(element.id === action.id) {
              element.quantity = element.quantity - 1;
              console.log(element);
            }
          }
          return element;
        })
      }
}  
}

class Provider extends Component {

  state = {
    navBarHeading: 'use reducer',
    mainHeading: 'your bag',
    cartData: data,
    emptyCartMsg: 'is curruntly empty',
    cartTotal: '',
    totalCartItem: '',
    dispatch: (action) => {
      this.setState((state) => {
        return reducer(state, action);
      })
    }
  }

  componentDidMount() {
    this.state.dispatch({type:'DO_TOTAL', data: this.state.cartData});
  }
  render() {
    return(
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}


const Consumer = Context.Consumer;
export default Provider;
export {Consumer}
