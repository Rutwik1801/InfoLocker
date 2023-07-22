import * as React from 'react';
import {useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography , Grid } from '@mui/material';

export default function DataForm() {
const [signUpFlag , setSignUpFlag] = useState(false); 
const location = useLocation();

// Access the data from the state object
const receivedData = location.state.data;
const [labelData , setLabelData] = useState(receivedData.label);
const [valueData , setValueData] = useState(receivedData.value);
const title = receivedData.title;


  return (
    <Box
      component="form"
      sx={{
        paddingTop:4,
        marginTop:12,
        display:'flex',
        flexDirection:'column',
        margin:'auto' , 
        textAlign:'center' ,
        zIndex:1 , 
       
       
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant='h4' sx={{mt:2  , zIndex:1}}>Welcome back</Typography>
      <Typography variant='h6' sx={{ mb:2 ,  zIndex:1}}>Please enter your details</Typography>
      

      <Grid container > 
      <Grid item xs={10} md={7} sx={{  width: '100%', margin: 'auto', mt: 2, mb: 2  }}>
        <TextField
          onChange={(e)=>{setLabelData(e.target.value)
          
          }}
          label="Label"
          variant="outlined"
          sx={{width:'100%' }}
          value={labelData}
        />
      </Grid>
    </Grid>

    <Grid container>
      <Grid item xs={10} md={7}  sx={{ width: '100%', margin: 'auto', mt: 2, mb: 2 }}>
        <TextField
          onChange={(e)=>{setValueData(e.target.value)}}
          label="Value"
          variant="outlined"
          sx={{width:'100%' }}
          value = {valueData}
        />
      </Grid>
    </Grid>

   

    <Grid container>
      <Grid item xs={10} md={7}  sx={{ width: '100%', margin: 'auto', mt: 2, mb: 2 }}>
      <Button variant='outlined' sx={{width:"100%" , margin:'auto' ,  color:'#9E465B'  , border:'#9E465B solid 1px'  }} >Save Data</Button>
      </Grid>
    </Grid>

    </Box>
  );
}