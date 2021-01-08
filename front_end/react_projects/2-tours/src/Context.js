import React, {Component} from 'react';
const Context = React.createContext();

// this will take care of conditional functionallity
const reducer = (state, action) => {

  switch(action.type) {
    case 'DELETE_TOUR':
      return {
       ...state,
       toursArray: state.toursArray.filter(tour => tour.id !== action.id),
      //  toursArrayLen: state.toursArray.length
      }
    case 'RELOAD': 
    return {
      ...state,
      toursArray: state.toursArrayPreLoaded
    }
    case 'TOGGLE_TEXT': 
    return{
     ...state,
     showFullText: !state.showFullText
    }
    default:
      return state;  
  }
}

class Provider extends Component {

  // this state will be passed to every child component via consumer component
  state = {
   toursArray: [],
   dispatch: (action) => {
    this.setState((state) => {
      // returns an object from reducer function this was a silly mistake took you some time to debugg
      return(reducer(state,action))
    }); 
  },
  showFullText: false,
  loading: true
  }




 async componentDidMount() {
   this.setState((state) => {
     return{
       ...state,
       loading: true
     }
   })
  console.log(this.state);
  let response = await fetch('https://course-api.com/react-tours-project');
  response = await response.json();

  this.setState((state) => {
    return{
      ...state,
      toursArray: response,
      toursArrayPreLoaded: response,
      loading: false
    }
  });
  console.log(this.state);

}



  render() {
    return(
    < Context.Provider value={this.state} >
      {this.props.children}  
    </Context.Provider>
    )
  }
}

export default Provider; 

export const Consumer = Context.Consumer;