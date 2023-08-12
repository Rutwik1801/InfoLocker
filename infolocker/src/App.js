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
import PublicRoutes from "./components/typeOfRoute/PublicRoutes";
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
        <Route  path="/" element={<PublicRoutes><LandingPage/></PublicRoutes>} />
        <Route  path="/login" element={<PublicRoutes><Login/></PublicRoutes>} />
        <Route  path="/aboutus" element={<PublicRoutes><AboutUs/></PublicRoutes>} />
        <Route  path="/howtouse" element={<PublicRoutes><HowToUse/></PublicRoutes>} />
        <Route  path="/tnc" element={<PublicRoutes><TnC/></PublicRoutes>} />
        <Route  path="/privacy" element={<PublicRoutes><PrivacyPolicy/></PublicRoutes>} />
        </Routes>
        <Routes>
             <Route exact path="/profile" element={<ProtectedRoutes><HomePage/></ProtectedRoutes>} />
        <Route exact path="/dataForm" element={<ProtectedRoutes><DataForm /></ProtectedRoutes>} />
        <Route  path="/profile/aboutus" element={<ProtectedRoutes><AboutUs/></ProtectedRoutes>} />
        <Route  path="/profile/howtouse" element={<ProtectedRoutes><HowToUse/></ProtectedRoutes>} />
        <Route  path="/profile/tnc" element={<ProtectedRoutes><TnC/></ProtectedRoutes>} />
        <Route  path="/profile/privacy" element={<ProtectedRoutes><PrivacyPolicy/></ProtectedRoutes>} />
        </Routes>
     
     

  

        
      
      </BackgroundWrapper>
    {/* </ThemeProvider> */}
    
    </BrowserRouter>
   
  );
}

export default App;
