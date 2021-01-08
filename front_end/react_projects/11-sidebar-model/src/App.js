import './MannualCss/style.css';
import Provider, {Consumer} from './Context';
import Menu from  './Component/layout/menu';
import Hamburger from './Component/layout/hamburgar';
import CenterBtn from './Component/layout/centerBtn';
import Content from './Component/layout/content';
function App() {
  return (
    <Provider>
      <Consumer>
        {value => {
          const {centerBtn, showContent, dispatch, content, initialMenuState, menuHeading, linkList, slide, socialMediaLink, showHamburger} = value;
        return(
        <div className="wholeContainer">
            {showHamburger && <Hamburger dispatch={dispatch}   />}
            <CenterBtn dispatch={dispatch} centerBtn={centerBtn} />
            {showContent && <Content dispatch={dispatch} content={content} />}
            {initialMenuState && <Menu slide={slide} socialMediaLink={socialMediaLink} linkList={linkList} menuHeading={menuHeading} dispatch={dispatch} /> }
       </div>
          )
        }}
      </Consumer>
    </Provider>
  );
}

export default App;
