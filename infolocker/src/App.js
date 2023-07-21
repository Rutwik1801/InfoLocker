import BackgroundWrapper from "./components/backgroundWrapper/BackgroundWrapper";
import Login from "./components/logincomponent/Login";
import LoginForm from "./components/logincomponent/LoginForm";
import {BrowserRouter , Routes  , Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@mui/material';

const customTheme = createTheme({
  typography: {
    fontFamily: 'Roboto', // Replace 'Your Desired Font' with your preferred font
  },
});
function App() {
  return (
    <BrowserRouter>
    <BackgroundWrapper></BackgroundWrapper>
    <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    
  
  );
}

export default App;
