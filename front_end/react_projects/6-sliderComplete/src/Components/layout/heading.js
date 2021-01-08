import {MdEdit} from 'react-icons/md';
import React, {Component} from 'react';
import {Consumer} from '../../Context';

class Heading extends Component {

  render() {
    return(
      <Consumer> 
        { value => {
          const {heading} = value;
            return(
              <React.Fragment>
                <h1 className="headingCon">
                <MdEdit className="inlineBlock pencilIcon" /> <span className="heading">{heading}</span>   
                </h1>
              </React.Fragment>
            )
        }
        }
      </Consumer>
    )
  }
}

export default Heading;