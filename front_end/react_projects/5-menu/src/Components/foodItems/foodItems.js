import React, {Component} from 'react';
import {Consumer} from '../../Context';
import FoodItem from './foodItem';

class FoodItems extends Component {

  render() {
    return(
      <Consumer >
        {value => { 
          const {menu} = value;
          return(
            <React.Fragment>
            {menu.map(foodItem => {
              return(
                <FoodItem foodItem={foodItem} />
              )
            })
            }
            </React.Fragment>
          )
        }
        }
      </Consumer>
    )
  }
}
export default FoodItems;