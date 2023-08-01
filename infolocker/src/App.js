import BackgroundWrapper from "./components/backgroundWrapper/BackgroundWrapper";
import Login from "./components/logincomponent/Login";
import LoginForm from "./components/logincomponent/LoginForm";
import {BrowserRouter , Routes  , Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import { useSelector } from 'react-redux';

import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@mui/material';
import HomePage from "./components/homepage/HomePage";
import DataForm from "./components/dataForm/DataForm";
import { useEffect, useState } from "react";


import {login} from './store/loginSlice';
import ProtectedRoutes from './components/typeOfRoute/ProtectedRoutes';
import Footer from "./components/footer/Footer";
import AboutUs from "./components/AboutUs";
import HowToUse from "./components/HowToUse";
import TnC from "./TnC"
import PrivacyPolicy from "./PrivacyPolicy";
// const customTheme = createTheme({


//   typography: {
//     fontFamily: 'Roboto', // Replace 'Your Desired Font' with your preferred font
//   },
// });







function App() {


  return (


    <BrowserRouter>
    {/* <ThemeProvider theme={customTheme}> */}

    
    <BackgroundWrapper variantt="blue">
    



      
        <Routes>
        <Route  path="/" element={<LandingPage/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/aboutus" element={<AboutUs/>} />
        <Route  path="/howtouse" element={<HowToUse/>} />
        <Route  path="/tnc" element={<TnC/>} />
        <Route  path="/privacy" element={<PrivacyPolicy/>} />
        </Routes>
        <Routes>
             <Route exact path="/profile" element={<ProtectedRoutes><HomePage/></ProtectedRoutes>} />
        <Route exact path="/dataForm" element={<ProtectedRoutes><DataForm /></ProtectedRoutes>} />
        </Routes>
     
     

  

        
      
      </BackgroundWrapper>
    {/* </ThemeProvider> */}
    
    </BrowserRouter>
   
  );
}

export default App;
