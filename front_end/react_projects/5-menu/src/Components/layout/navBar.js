
import React, {Component} from 'react';
import {Consumer} from '../../Context';

class NavBar extends Component {

  sortFood = (dispatch, reload, category) => {

    console.log(category);
    if(category !== 'All') {
      reload();
      dispatch({type: 'SORT', category: category});
    } else {
      dispatch({type: 'ALL'});
    }
  }

  render() {
    return(
      <Consumer>
        {value => {
          const  {navItems, dispatch, reload} = value;
          return(
            <ul className="navBar">
            {navItems.map(category => {
              return(
                <li onClick={this.sortFood.bind(this, dispatch, reload, category)}  className="navItem">{category}</li>
              );
            })}
            </ul>
          )
        }
        }
      </Consumer>
    )
  }
}

export default NavBar;