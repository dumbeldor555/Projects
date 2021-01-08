import { Profiler } from "react";
import {FaQuoteRight} from 'react-icons/fa';
import React,{ Component } from 'react';
import {Consumer} from '../../Context';

class Profile extends Component {
  render() {
    return(
      <Consumer>
        {value => {
        const   {curruntPerson} = value;
          return(
            <div className={`ProfileContainer person${curruntPerson.id}`}>
         
              <div className="curruntFrame">
              <img src={curruntPerson.image} alt="PersoneImage" className="image"/>
              <p className="personName">{curruntPerson.name}</p>
              <p className="job">{curruntPerson.title}</p>
              <p className="about">{curruntPerson.quote}</p>
              <FaQuoteRight className="quoteIcon" />
              </div>
           
             </div>
          )
        }}
      </Consumer>
    )
  }
}
export default Profile;