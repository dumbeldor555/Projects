import './MannualCss/style.css';
import Header from './Component/Layout/header';
import {Consumer} from './Context';
import Provider from './Context';
import Generater from './Component/Layout/generater';
import Paragraph from './Component/paragraph/paragraph';
import Warning from './Component/paragraph/warning';

function App() {
  return (
    <Provider>
      <Consumer>
        {value => {
          const {header} = value;
          return(
        <div className="Container">
            <Header header={header} />
            <Generater />
            {/* warning will only display on the condition go to the warning file to check */}
            <Warning />
            <Paragraph />
        </div>
          );
        } 
        }
      </Consumer>
    </Provider>
  );
}

export default App;
