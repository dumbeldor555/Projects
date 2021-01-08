import React,{Component} from 'react';
import {Consumer} from '../../Context';

class Tour extends Component { 


showFullText = (dispatch) => {

  dispatch({type: 'TOGGLE_TEXT'});
}

deleteTour = (dispatch, id, switchLen) => {
  dispatch({type: 'DELETE_TOUR', id: id, flipper: switchLen});
           
}

render() {  
  return(
    <Consumer>
      {value => {
       const { id, name, image, price} = this.props.data;  
       let { info }  = this.props.data;
      info = new String(info);
       const { showFullText } = value 
       const { dispatch } = value;
        //  console.log('calling tour component');     
        return(
          // html for individual tour goes here
          <div className="individualTourContainer">
          <img className="tourImage" src={image} />
          <div className="infoContainer">
            <span className="nameOfTour">  {name} </span>  <span className="priceOfTour">$ {price} </span>          
             <p className="info">
               {showFullText ? info : 
               info.slice(0, (info.length)/2)} 
               {/* {info}     */}
             ...<span onClick={this.showFullText.bind(this, dispatch)} className="showMore"> {showFullText ? 'Read Less' :
              'Read More'}
             </span>
             </p> 
             <button onClick={this.deleteTour.bind(this, dispatch, id)} className="NotIntrested">
               Not Interested
             </button>   
          </div>
          </div>
        );   
      }}
    </Consumer>
  )
}
}

export default Tour;