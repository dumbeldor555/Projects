

const CenterBtn = (props) => {
  const {centerBtn} = props;
  const {dispatch} = props

  const handleClick = (dispatch) => {
    dispatch({type: 'TOGGLE_CONTENT'});
  }

  return(
    <button onClick={handleClick.bind(this, dispatch)} className="CenterBtn">{centerBtn}</button>
  )
}

export default CenterBtn;