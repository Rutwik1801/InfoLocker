import { Container, Typography,Box } from '@mui/material'
import React from 'react'
import LOGO from "../../assets/logo.svg"
function Footer() {
  return (
    <Box sx={{display:"flex",flexDirection:{xs:"column",md:"row"},backgroundColor:"#0F172A",color:"#F0F4F8",padding:"40px 30px",alignItems:"center"}}>
        <Container sx={{textAlign:"center"}}>
         <img src={LOGO} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}  style={{height:"120px",width:"120px"}} />
        </Container>
        <Container sx={{textAlign:"center"}}>
            <Typography sx={{marginBottom:"10px"}}>About Us</Typography>
            <Typography  sx={{marginBottom:"10px"}}>Contact Us</Typography>
            <Typography>Mail</Typography>
            
        </Container>
        <Container sx={{textAlign:"center"}}>
        <Typography sx={{marginBottom:"10px"}}>Terms and Conditions</Typography>
            <Typography sx={{marginBottom:"10px"}}>How To Use</Typography>
            <Typography >Privacy Policy</Typography>
        </Container>
    </Box>
  )
}

export default Footer