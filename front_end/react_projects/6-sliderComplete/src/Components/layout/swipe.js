import {Component} from 'react';
import { FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {Consumer} from '../../Context';

import React from 'react';

// class Swipers extends Component {

//   goForward = (dispatch) => {

//     dispatch({type: 'FORWARD'});
//   }

//   goBackward = (dispatch) => {

//     dispatch({type: 'BACKWARD'});    
//   }

//   render() {
//     return(
//       <React.Fragment>
//       <Consumer>
//          {value => {
//            const {dispatch} = value;
//            return(
//             <div className="swipeBtn">
//                 <div onClick={this.goForward.bind(this, dispatch)}  className="btnCon">
//                    <FiChevronLeft /> 
//                    </div>
//                    <div onClick={this.goBackward.bind(this, dispatch)}className="btnCon">
//                    <FiChevronRight /> 
//                    </div>
//               </div>
//            )
//          }
//          }
//     </Consumer>
//     </React.Fragment>
//     )
//   }
// }

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const Swipers = () => {

const  goForward = (dispatch, id) => {

dispatch({type: 'FORWARD', id: id});
}

const  goBackward = (dispatch, id) => {

dispatch({type: 'BACKWARD', id:id});    
}

  return(
    <React.Fragment>
    <Consumer>
         {value => {
           const {dispatch} = value;
           const {curruntPerson} = value;
           return(
            <div className="swipeBtn">
                   <div onClick={goBackward.bind(this, dispatch, curruntPerson.id)} className="btnCon">
                   <FiChevronLeft /> 
                   </div>
                   <div onClick={goForward.bind(this, dispatch, curruntPerson.id)} className="btnCon">
                   <FiChevronRight /> 
                   </div>
              </div>
           )
         }
         }
    </Consumer>
    </React.Fragment>
  )
}


export default Swipers;