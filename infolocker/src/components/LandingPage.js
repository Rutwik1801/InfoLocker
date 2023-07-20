import React from 'react'
import Navbar from './Navbar'
import background from "../assets/bg.png";
import { Typography,Container } from '@mui/material';
function LandingPage() {
  return (
    <div className='container' style={{backgroundImage:`url(${background})`,height:"100vh",backgroundSize:"40%",backgroundRepeat:"no-repeat",backgroundPosition:"right"}}>
            <Navbar isLoggedIn={false}/>
            <Container sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',marginTop:'8%',textAlign:'center'}}>
                <Typography  fontSize={40} >
                    Beat The Hassle,
                </Typography>
                <Typography fontSize={40}>
                    All Your Information In a Single Place.
                </Typography>
                <Typography fontSize={20} sx={{marginTop:"30px"}}>
                    Save all your documents,details and links in a single place 
                </Typography>
                <Typography fontSize={20}>
                   with InfoLocker.
                </Typography>
            </Container>
        {/* <img src={background} style={{position:"absolute",right:-40,top:-80,height:"140vh"}} /> */}
    </div>
  )
}

export default LandingPage