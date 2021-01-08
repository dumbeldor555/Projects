
import handleClick from '../../utilites/hoverCondition';

const NavBar = (props) => {
  const {navBar, dispatch} = props;
  
  return(
    <div className="navBarContainer">
        <img src='./image/logo.svg' className="stripeLogo" alt="logo"/>
        <ul className="navBar"> 
        <li className="navItem" onMouseLeave={handleClick.bind(this, dispatch, 'productsLeave')}  onMouseEnter={handleClick.bind(this, dispatch, 'products')}> products</li>
        <li className="navItem" onMouseLeave={handleClick.bind(this, dispatch, 'developerLeave')} onMouseEnter={handleClick.bind(this, dispatch, 'developers')} > developers</li>
        <li className="navItem" onMouseLeave={handleClick.bind(this, dispatch, 'companyLeave')} onMouseEnter={handleClick.bind(this, dispatch, 'company')} > company</li>
        </ul>
        <button className="signIn"> sign in</button>
    </div>
  );
}

export default NavBar;