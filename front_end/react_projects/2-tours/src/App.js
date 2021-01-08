
import React, { Component } from 'react';
import './ManualCss/style.css';
import Heading from './Components/layouts/heading';
import Tours from './Components/tours/tours';
import Provider from './Context';
import { Consumer } from './Context';
import ReloadBtn from './Components/layouts/reloadBtn';
import Loading from './Components/layouts/loading';

class App extends Component {

  render() {
    return (
      <Provider  >
        
        <Consumer >
 
      
          {value => {   
          const { length } = value.toursArray;
          const { loading } = value;
          if(loading) {
            return(
              <div> 
             <Heading heading='Our Tours'/>
             <Loading waitingMsg='Loading'/> 
              </div>              
            )
          }else {
            return(
            
              <div className="container">
                 
                  {length > 0 ? 
                  <Heading heading='Our Tours'/> :
                  <Heading heading='No Tours'/>
                  }
                  {/* that is how a tyipical if statment is written in react remember that */}
  
                  {length > 0 ? 
                  <Tours /> :
                   <ReloadBtn BtnName="Refresh" />
                  }
              </div>
              )
          }
        
          }
            
          }
        </Consumer>
         
      </Provider>
    )
  }
}

export default App;
