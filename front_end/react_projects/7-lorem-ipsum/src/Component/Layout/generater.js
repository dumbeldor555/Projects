import {Component} from 'react';
import {Consumer} from '../../Context';

class Generater extends Component {

  
  generate = (dispatch) => {
    const numOfPara = document.querySelector('.numberInput').value;
    dispatch({type: 'GENERATE', numOfPara: numOfPara});
  }

  checkNumOfPara = (dispatch) => {
    console.log('checking');
    const numOfPara = document.querySelector('.numberInput').value;
    dispatch({type:'CHECK_NUM_OF_PARA', numOfPara: numOfPara});
  }

  render() {
    return(
      <Consumer>
        {value => {
          const {dispatch, initialNumOfPara} = value;
          return(
            <div className="controlPanel">
              <span className="NumOfParaHeading">
                paragraph:
              </span>
              <input
               type="number" 
               className="numberInput"
               placeholder={initialNumOfPara}
               onChange={this.checkNumOfPara.bind(this, dispatch)}
               />   
              <button onClick={this.generate.bind(this, dispatch)} className="generater">generate</button>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Generater;