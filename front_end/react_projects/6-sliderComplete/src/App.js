
import './MannualCss/style.css';
import Provider from './Context';
import {Consumer} from './Context';
import Heading from './Components/layout/heading';
import Profile from './Components/profile/profiles';
import Swipers from './Components/layout/swipe';

function App() {
  return (
    <Provider >
      <Consumer >
        {value => {
          const {heading} = value;
          return(
            <div className="container">
              <Heading heading={heading} />
              <Profile />
              <Swipers />
            </div>
          )
        }}
      </Consumer>
    </Provider>
  );
}

export default App;
