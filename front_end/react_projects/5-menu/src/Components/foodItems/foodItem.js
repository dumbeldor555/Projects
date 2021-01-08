// import React, {Component} from 'react';


// class FoodItem extends Component {
//   render() {
//     return(
//       <h1>food</h1>
//     )
//   }
// }

const FoodItem = (props) => {

  const {foodItem} = props;
return(
  <div className="singleFoodContainer">
      <img src={foodItem.img} alt="foodImg" className="foodImg"/>
       <p className="singleFoodHeading"> 
       <span className="singleFoodTitle">{foodItem.title}</span>
       <span className="singleFoodPrice"> ${foodItem.price}</span>
       <hr className="singleFoodHorizontalLine"/>
       </p>
       <p className="aboutFood">
         {foodItem.desc}
       </p>
  </div>
);
}


export default FoodItem;