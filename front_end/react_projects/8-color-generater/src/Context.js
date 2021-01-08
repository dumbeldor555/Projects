import React, {Component} from 'react';
import Values from 'values.js';
const Context = React.createContext();

const reducer = (state, action) => {

try{
  const ValueColor = new Values(action.color);
  const colors = ValueColor.all(10);
  console.log(colors);
  switch(action.type) {
    case 'CLICKED':
      return{
        ...state,
        colorError: false,
        colors: colors
      }
  }
}catch {
  return{
    colorError: true
  }
}

}

class Provider extends Component {

  state = {
    heading : 'color generater',
    dispatch: (action) => {
      this.setState((state) => {
        return reducer(state, action);
      })
    },
   colors: '#f15025',
   placeHolderColor: '#f15025',
   colorError: false,
  }

  componentWillMount() {
     console.log('this is calling');
    this.state.dispatch({type:'CLICKED', color: this.state.placeHolderColor});
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
export {Consumer};
