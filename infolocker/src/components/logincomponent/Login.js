import React from 'react'
import './login.css'
import LoginForm from './LoginForm'
import BackgroundWrapper from '../backgroundWrapper/BackgroundWrapper'
import { Grid, Box , Container  } from '@mui/material';
import Navbar from '../Navbar';

function Login() {
  return (
   <div>
    <Navbar />
    <div className='left'>
      <LoginForm  />
    </div>
  
    </div>
    
   
  )
}

export default Login