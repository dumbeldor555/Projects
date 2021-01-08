import './MannualCss/style.css';
import Provider, {Consumer} from './Context';
import NavBar from './Component/layout/navbar';
import Heading from './Component/layout/heading';
// import Products from './Component/hoverComponent/hoverComponent';
import {Developer, Products, Company} from './Component/hoverComponent/hoverComponent';
// import Company from './Component/hoverComponent/hoverComponent';
import StartBtn from './Component/layout/startBtn';
import Phone from './Component/layout/phone';

function App() {
  return (
    <Provider>
      <Consumer>
        {value=> {
          const {navBar, heading, about, dispatch, showProducts, showCompany, showDevelopers,
          currungDeveloperPosition, currungCompanyPosition, currungProductPosition
          } = value;
          return(
            <div className="wholeContainer">
              <NavBar navBar={navBar} dispatch={dispatch}/>
              <Heading heading={heading} about={about} />
              <StartBtn />
              <Phone />
              {/* these are the hoverComponents  */}
              {showDevelopers && <Developer curruntPosition={currungDeveloperPosition} dispatch={dispatch} linkList={navBar.developers} />}
              {showCompany && <Company curruntPosition={currungCompanyPosition} dispatch={dispatch} linkList={navBar.company} />}
              {showProducts && <Products curruntPosition={currungProductPosition} dispatch={dispatch} linkList={navBar.products} />}
            </div>
          )
        }}
      </Consumer>
    </Provider>
  );
}

export default App;
