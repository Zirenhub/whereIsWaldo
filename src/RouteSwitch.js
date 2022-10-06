import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import LevelOne from './components/LevelOne';
import LevelTwo from './components/LevelTwo';
import LevelThree from './components/LevelThree';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/level-one" element={<LevelOne />} />
        <Route path="/level-two" element={<LevelTwo />} />
        <Route path="/level-three" element={<LevelThree />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
