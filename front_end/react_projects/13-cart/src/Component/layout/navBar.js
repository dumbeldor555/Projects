
const NavBar = (props) => {

  const {heading, totalCartItem } = props
  return(
    <div className="navContainer">
      <h1 className="navHeading">{heading}</h1>
      <div className="iconContainer">icon <span className="numberOfToatalItem"> {totalCartItem}</span> </div>
    </div>
  );
}

export default NavBar;