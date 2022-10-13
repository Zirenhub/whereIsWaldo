import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import LevelOne from './components/LevelOne';
import LevelTwo from './components/LevelTwo';
import LevelThree from './components/LevelThree';
import { AuthContextProvider } from './context/AuthContext';
import SignIn from './components/SignIn';
import Dropdown from './components/Dropdown';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        {/* <SignIn /> */}
        <Dropdown />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/level-one" element={<LevelOne />} />
          <Route path="/level-two" element={<LevelTwo />} />
          <Route path="/level-three" element={<LevelThree />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default RouteSwitch;
