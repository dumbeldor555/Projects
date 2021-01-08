import { Link } from 'react-router-dom';  

const NavBar = (props) => {
  const {logo} = props;


  return(
    <nav className="navContainer">
      <div className="logoContainer">{logo}</div>
      <div className="links">
        <ul className="linkList">
        <Link to="/"> <li className=" individualLink homeLInk">home</li> </Link>  
         <Link to="/about">  <li className=" individualLink aboutLink"> about </li> </Link>
        </ul> 
      </div>
    </nav>
  )
}

export default NavBar;