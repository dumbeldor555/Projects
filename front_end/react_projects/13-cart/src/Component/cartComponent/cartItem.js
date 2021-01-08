const CartItem = (props) => {
  const {cartItem, dispatch, identifier, allCartItem} = props;
  const handleClick = (dispatch, operation, identifier, allCartItem) => {
    // console.log(dispatch);
    if(operation === 'incremement') {
      dispatch({type:'INCREMENT', id: identifier});
      dispatch({type: 'DO_TOTAL', data: allCartItem});
    } else if(operation === 'decremement') {
      dispatch({type:'DECREMENT', id: identifier});
      dispatch({type: 'DO_TOTAL', data:allCartItem});
    }

  }

  return(
    <div className="IndividualCartContainer">
      <div className="itemDescription">
        <img src={cartItem.img} alt="" className="productImage"/>
        <span className="itemDetails">
          <span className="itemName">{cartItem.title}</span>
          <span className="itemPrice">{cartItem.price} $</span>
          <span className="itemRemoveBtn">remove</span>
        </span>
      </div>

      <div className="buttonContainer">
        <button onClick={handleClick.bind(this, dispatch, 'incremement', identifier, allCartItem)} className="incrememnt">incrememnt</button>
        <span className="numberOfIndiItem">{cartItem.quantity}</span>
        <button onClick={handleClick.bind(this, dispatch, 'decremement', identifier, allCartItem)} className="decrement">decrememnt</button>
      </div>
    </div>
  )
}

export default CartItem;