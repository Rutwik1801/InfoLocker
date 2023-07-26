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
