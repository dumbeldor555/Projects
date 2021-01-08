import people from './Data/data';
import React,{Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'FORWARD':
      console.log('going forward', action.id); 
      return {
        ...state,
        curruntPerson: (action.id === state.people.length - 1) ? state.people[0] : state.people[action.id + 1]
      }
    case 'BACKWARD': 
    console.log('going backward', action.id);
      return {
        ...state,
        curruntPerson: (action.id === 0) ? state.people[state.people.length - 1] : state.people[action.id - 1 ]
      }
  }
}

class Provider extends Component {

  state = {
    heading : 'Reviews',
    people: people,
    curruntPerson: people[0],
    dispatch: (action) => {
      this.setState((state) => {
        return reducer(state, action);
      })
      // take care of sliding here
    }
  }

swipe() {
  this.setState((state) => {
    return  reducer(state, {type: 'FORWARD', id: state.curruntPerson.id});
  })
}
perpetucateSwiping = () => {
  setInterval(this.swipe.bind(this), 5000);
}
componentDidMount() {
  window.addEventListener('load', this.perpetucateSwiping.bind(this));
}

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Provider;
const Consumer = Context.Consumer;
export {Consumer};