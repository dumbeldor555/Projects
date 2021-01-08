import './mannualCss/style.css';
import Provider from './Context';
import Heading from './Components/layout/heading';
import {Consumer} from './Context';
import NavBar from './Components/layout/navBar';
import FoodItems from './Components/foodItems/foodItems';

function App() {
  return (

    <Provider >
      <Consumer>
        {value => {
          const {heading} = value;
            return(
              <div className="container">
              <Heading heading={heading} />
              <hr className="horizontalLine"/>
              <NavBar />
              <FoodItems />
              </div>
            )
        }
        }
      </Consumer>
    </Provider>
  );
}

export default App;
