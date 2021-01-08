const Menu = (props) => {
 
  const {dispatch, menuHeading, linkList, socialMediaLink, slide} = props;
  const handleClick = (dispatch) => {
    
    dispatch({type: 'TOGGLE_MENU'});
  }

  return(
    <div className={ slide ? 'menuContainer showMenu' : 'menuContainer hideMenu'}>
      <div className="head">
        <h2 className="heading">{menuHeading}</h2>
        <button onClick={handleClick.bind(this, dispatch)} className="closeMenu">close</button>
      </div> 
      <div className="body">  
        <ul className="linkList">  
          {linkList.map((link, index) => {
            return(
              <li key={index} className="individualLink"><span className="logo">{link.linkLogo}</span> {link.linkName}</li>
            );
          })}
        </ul>
      </div>
      <div className="foot">
        <ul className="socialMediaList">
        {socialMediaLink.map((link, index) => {
            return(
              <li key={index} className="individualSocialMediaLink">{link.linkLogo}</li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default Menu;