import React, { Component } from 'react';
import { Consumer } from '../../Context';


class ReloadBtn extends Component {

Reload = (reload) => {
    reload({type: 'RELOAD'});
}
  render() {
    return(
      < Consumer >
      { value => {
      const  {BtnName} = this.props;
      const { dispatch } = value;
        return(
        <button onClick={this.Reload.bind(this, dispatch)} className="reloadBtn">
          {BtnName}
        </button>
        )
      }
      }  
      </Consumer> 
    )
  }
}

// const ReloadBtn = (props) => {

// const Reload = (reload) => {
// reload({type: 'RELOAD'});
// }
 
//   const {BtnName} = props;
//   return(
  
//   < Consumer >
//   { value => {
//   const { dispatch } = value;
//     return(
//     <button onClick={this.Reload.bind(this, dispatch)} className="reloadBtn">
//       {BtnName}
//     </button>
//     )
//   }
//   }  
//   </Consumer> 
//   );
// }

export default ReloadBtn;