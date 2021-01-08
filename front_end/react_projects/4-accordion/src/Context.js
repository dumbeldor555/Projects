import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
 switch(action.type) {
   case 'TOGGLE_TEXT':
    //  for obvious resone you cannot change a sub propertis of an object inside an object while returning the object
    // in setState so you had to return the whole object
    //  let myQuestions = state.questions;
    //  if(!myQuestions[action.id - 1].displayingText) {
    //   //  let info = myQuestions[action.id - 1].info;
    //   const info = state.info[action.id - 1];
    //    const PutTextquestion = myQuestions[action.id - 1];
    //    PutTextquestion.info = info;
    //    PutTextquestion.displayingText = !PutTextquestion.displayingText;

    //    myQuestions[action.id - 1] = PutTextquestion;
    //   //  console.log(myQuestions[action.id - 1]);
    //   //  myQuestions[action.id - 1] = myQuestions[action.id - 1];
    //   //  myQuestions[action.id - 1].displayingText = !myQuestions[action.id - 1].displayingText;

    //  } else if(myQuestions[action.id - 1].displayingText) {
    //   const PutTextquestion = myQuestions[action.id - 1];
    //   PutTextquestion.info = '';
    //   // flip the value of diplayingText
    //   PutTextquestion.displayingText = !PutTextquestion.displayingText;
    //   myQuestions[action.id - 1] = PutTextquestion;
    //   console.log(state);
    //   // myQuestions[action.id - 1].displayingText = !myQuestions[action.id - 1].displayingText;
    //  }

     if(!state.questions[action.id - 1].displayingText) {
       console.log('this is calling from if');
       state.questions[action.id - 1].info = state.info[action.id - 1];
       state.questions[action.id - 1].displayingText = !state.questions[action.id - 1].displayingText;
       const temp = state.questions[action.id - 1];
     } else if(state.questions[action.id - 1].displayingText) {
       console.log('this is calling from else');
       state.questions[action.id - 1].info = '';
       state.questions[action.id - 1].displayingText = !state.questions[action.id - 1].displayingText;

     }
     return {
       ...state,
      //  questions: state.questions,
     }
 }
}

class Provider extends Component {

  state = {
    questions : [
      {
        id: 1,
        title: 'Do I have to allow the use of cookies?',
        info:'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',

      },
      {
        id: 2,
        title: 'How do I change my My Page password?',
        info:  'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',

      },
      {
        id: 3,
        title: 'What is BankID?',
        info:   'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',

      },
      {
        id: 4,
        title: 'Whose birth number can I use?',
        info:  'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',

      },
      {
        id: 5,
        title: 'When do I recieve a password ordered by letter?',
        info: 'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',

      },
    ],

    dispatch: (action) => {
      this.setState((state)=> {
      return reducer(state, action);
      })
    },
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