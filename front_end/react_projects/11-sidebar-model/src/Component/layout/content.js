
const Content = (props) => {
  const {content, dispatch} = props;

  const handleClick = (dispatch) => {
    dispatch({type:'TOGGLE_CONTENT'});
  }
  return(
    <div className="ContentDiv">
    <button onClick={handleClick.bind(this, dispatch)} className="closeBtn">
      close
    </button>
    <p> {content} </p>  
    </div>
  )
}

export default Content;