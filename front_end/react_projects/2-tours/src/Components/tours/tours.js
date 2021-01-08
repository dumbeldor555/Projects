import React, { Component } from 'react';
import {Consumer} from '../../Context';
import Tour from './tour';

class Tours extends Component {

  render() {
    return(
      <Consumer lantgh='jf'>
        {value => {
        const {toursArray} = value;
        // for some wierd reason the function is called twice and and the firs time toursArray is undifined and the 
        // second time its defined so you made a if statement to display the content correctly
        if(toursArray !== undefined) {
           return(
            // html goes here
            <React.Fragment>
               { 
               toursArray.map((tour) => {
                return(                    
                  <Tour
                   key={tour.id}
                   data = {tour}
                  />
                  );
              })
            }
            </React.Fragment>
          )
        }
        }}
      </Consumer>
    )
  }
}

export default Tours; 