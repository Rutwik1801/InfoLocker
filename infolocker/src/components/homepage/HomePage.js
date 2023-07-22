import React from 'react'
import Navbar from '../Navbar'
import { Box, Container, Grid, TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Header from './Header'
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function HomePage() {
  return (
    <div>
        <Navbar isLoggedIn={true}/>
        <Box sx={{position:"relative",width:{sx:"100%",md:"60%"},zIndex:2,border:"1px solid black",padding:4}}>
          <Grid sx={{marginBottom:"20px"}}>
            <Header title="Details"/>
            <Grid container spacing={2} sx={{marginTop:"20px"}}>
            <Grid  item xs={12} sm={4} lg={3}>
            <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
      
            </Grid>
            <Grid  item xs={12} sm={4} lg={3}>
            <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
           
            </Grid>
            <Grid  item xs={12} sm={4} lg={3}>
            <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
          
            </Grid>
            <Grid  item xs={12} sm={4} lg={3}>

            </Grid>
            <Grid  item xs={12} sm={4} lg={3}>
                hhhhhhhhhh            
            </Grid>
            </Grid>
            
          </Grid>
          <Grid>
          <Header title="Links" />
          </Grid>
          <Grid>
          <Header title="Files" />
          </Grid>
        </Box>
    </div>
  )
}

export default HomePage