import React from 'react';
import { Link } from 'react-router-dom';
import levelOne from './assets/images/2687204.jpg';
import levelTwo from './assets/images/2687208.jpg';
import levelThree from './assets/images/OTfytjA.jpeg';
import './styles/global.css';
import './styles/app.css';

function App() {
  return (
    <div className="select-level-container">
      <div className="level-one">
        <Link to="/level-one">
          <img alt="level one" src={levelOne} />
        </Link>
      </div>
      <div className="level-two">
        <Link to="level-two">
          <img alt="level two" src={levelTwo} />
        </Link>
      </div>
      <div className="level-three">
        <Link to="level-three">
          <img alt="level three" src={levelThree} />
        </Link>
      </div>
    </div>
  );
}

export default App;
