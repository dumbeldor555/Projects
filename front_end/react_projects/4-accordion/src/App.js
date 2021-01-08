import logo from './logo.svg';
import './MannualCss/style.css';
import Provider from './Context'; 
import Heading from './Components/layout/heading';  
import Questions from './Components/questions/questions';

function App() {
  return (
    <Provider>
    <div className="container">
    < Heading heading="Question And Answer About Login" />
      <div className="questionContainer">
        < Questions />
      </div>
    </div>
    </Provider>
  );
}

export default App;
