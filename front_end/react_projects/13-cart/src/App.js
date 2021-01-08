import Provider from './Context';
import {Consumer} from './Context';
import NavBar from './Component/layout/navBar';
import Cart from './Component/cartComponent/cart';
import Heading from './Component/layout/heading';
import './MannualCss/style.css';

function App() {
  return (
    <Provider>
      <Consumer>
        {value => {
         const {navBarHeading, mainHeading, cartData, dispatch, emptyCartMsg, cartTotal, totalCartItem} = value;
          return(
            <div className="WholeContainer">
              <NavBar totalCartItem={totalCartItem}  heading={navBarHeading} /> 
              <Heading mainHeading={mainHeading}/>
              <Cart cartTotal={cartTotal} emptyCartMsg={emptyCartMsg} dispatch={dispatch} cartItem={cartData} mainHeading={mainHeading}/>
            </div>
          );
        }}
      </Consumer>
    </Provider>
  );
}

export default App;
