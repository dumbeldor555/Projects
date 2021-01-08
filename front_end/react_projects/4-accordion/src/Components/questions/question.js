import React,  { Component } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

class Question extends Component {

  // toggleText(dispatch, id) {
  //   dispatch({type: 'TOGGLE_TEXT', id: id});
    
  // }

  toggleText = () => {
    console.log('calling toggle function');
    
    this.setState((state) => {
      return {
        displayText: !state.displayText,
      }
    })
  }

  state = {
    displayText: false,
  }

  render() {
    const { id, title, info, } = this.props;
    console.log(this.state.displayText);
    return(
           <React.Fragment>
          <div key={id} className="singleQuestionContainer">
              <h3 className="question">
               <span className="questionTitle"> {title} </span>  
              <span onClick={this.toggleText} className="PlusMinus"> 
                    <span> {(!this.state.displayText)  ? <AiOutlinePlus />  : <AiOutlineMinus />} </span>  
              </span>   
              </h3>
              {/*  */}
          {this.state.displayText ? 
            <p className="info">
            {info} 
            </p> : 
            null
          }
            
            </div>
         </React.Fragment>
    )
  }
}

export default Question;