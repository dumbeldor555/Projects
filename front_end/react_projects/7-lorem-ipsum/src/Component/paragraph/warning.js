import React,{Component} from 'react';
import {Consumer} from '../../Context';

class Warning extends Component {

  render() {
    return(
     <React.Fragment>
       <Consumer>
         {value => {
           const { warning, warningText} = value;
           if(warning) {
            return(
              <p className="paragraphWarning">
                {warningText}
              </p>
            );
           } else {
            return( 
              null
            );
           }
         }}
       </Consumer>
     </React.Fragment>
    )
  }
}

export default Warning;