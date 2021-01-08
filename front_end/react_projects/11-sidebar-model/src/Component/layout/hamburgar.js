
const Hamburger = (props) => {

  const {dispatch} = props;

  const handleClick = (dispatch) => {

    dispatch({type:'TOGGLE_MENU'});
  }

  return(
    <div onClick={handleClick.bind(this, dispatch)} className="hamburger">
      <span className="hamburgerLine"></span>
      <span className="hamburgerLine"></span>
      <span className="hamburgerLine"></span>
    </div>
  )
}
export default Hamburger;