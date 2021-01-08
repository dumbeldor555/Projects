import React, {Component} from 'react';
import { Consumer } from '../../Context'; 
import Question from './question';
{/* <AiOutlineMinus /> */}
class Questions extends Component {

  toggleText(dispatch, id) {
    dispatch({type: 'TOGGLE_TEXT', id: id});
  }

  render() {
    return(
     <Consumer>
     {value => {
       const {questions} = value;
       const {dispatch} = value;
       const {selectedId} = value;
       console.log(value);
       return(
         <React.Fragment>
           {
             questions.map(question => {
               return(
                <Question key={question.id} title={question.title} info={question.info} id={question.id} dispatch={dispatch}  />
               )
             })         
           }
         </React.Fragment>
       )
     }
     }
     </Consumer>
      // return questions here 
    )
  }
}

export default Questions;