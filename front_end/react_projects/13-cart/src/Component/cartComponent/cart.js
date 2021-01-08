import React from 'react';
import CartItem from './cartItem';

const Cart = (props) => {

const handleClick = (dispatch) => {
    dispatch({type:'CLEAR_ALL_ITEM'});
  }

  const {cartItem, dispatch, emptyCartMsg, cartTotal } = props;
  console.log(cartTotal);
  if(cartItem) {
    return(
      <div className="CartContainer">
       {cartItem.map((Item, index) => {
          return(
             
          <CartItem allCartItem={cartItem} dispatch={dispatch} identifier={Item.id} key={Item.id} cartItem={Item} />
          )
        })}
        <hr className="horizontalRow"/>
        <div className="totalContainer">
          <p className="total">total</p>
          <p className="totalAmount">{cartTotal} $</p>
        </div>
        <button onClick={handleClick.bind(this, dispatch)} className="clearAllBtn"> clear cart</button>
      </div>
     )
  } else {
    return(
      <h2 className="emptyCartMsg">{emptyCartMsg}</h2>
    )
  }

}

export default Cart;