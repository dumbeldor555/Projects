import React from 'react';
import './MannualCss/style.css';
import Provider from './Context';
import  {Consumer} from './Context';
import Heading from './Components/layout/heading';
import Search from './Components/layout/search';
import ColorPallate from './Components/pallate/color-pallate';
function App() {
  return (
    <Provider>
      <Consumer>
           {value => {
             const {heading} = value;
             const {colors} = value;
             const {dispatch} = value; 
             const {placeholderColor} = value;
             return(
               <React.Fragment>
                  <Heading heading={heading} />
                  <Search />
                  <ColorPallate placeholder={placeholderColor} dispatch={dispatch} colors={colors} />
               </React.Fragment>
              )
           }}
      </Consumer>
    </Provider>
  );
}

export default App;
