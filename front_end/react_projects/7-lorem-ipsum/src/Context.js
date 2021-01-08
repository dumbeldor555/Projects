import React, {Component} from 'react';
import text from './data';
const Context = React.createContext();

const reducer = (state, action) => {

switch(action.type) {
case 'GENERATE':
  return{
    ...state,
    curruntNumberOfPara: action.numOfPara
  }
  case 'CHECK_NUM_OF_PARA': 
  return{
    ...state,
    warning: (action.numOfPara > state.paragraphs.length || action.numOfPara < 0) ? true : false
  }
}
}

class Provider extends Component {


  state = {
    header: 'tierd of boring lorem ipsum ?',
    dispatch: (action) => {
        this.setState((state) => {
        return reducer(state, action);
      })
    },
    paragraphs: text,
    curruntNumberOfPara: 0,
    initialNumOfPara: 0,
    warningText: `Can only disply from 0 to ${text.length} paragraph`,
    warning: false
  }
  
  render() {
    return(
      <Context.Provider value = {this.state}>
        {this.props.children}
      </Context.Provider>  
    )
  }
}

const Consumer = Context.Consumer;
export default Provider;
export {Consumer};