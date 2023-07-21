import React from 'react'
import './login.css'
import LoginForm from './LoginForm'
import BackgroundWrapper from '../backgroundWrapper/BackgroundWrapper'
import { Grid, Box , Container  } from '@mui/material';

function Login() {
  return (
   <Container>
    <BackgroundWrapper></BackgroundWrapper>
    <div className='left'>
      <LoginForm/>
    </div>
  
    </Container>
    
   
  )
}

export default Login