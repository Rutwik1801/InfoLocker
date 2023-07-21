import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography , Grid } from '@mui/material';

export default function LoginForm() {
const [signUpFlag , setSignUpFlag] = useState(false); 


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
        backgroundColor:'#000000'
       
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant='h4' sx={{mt:2  , zIndex:1}}>Welcome back</Typography>
      <Typography variant='h6' sx={{ mb:2 ,  zIndex:1}}>Please enter your details</Typography>
      

      <Grid container sx={{backgroundColor:'white'}}> 
      <Grid item xs={10} md={7} sx={{  width: '100%', margin: 'auto', mt: 2, mb: 2  }}>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          sx={{width:'100%'}}
        />
      </Grid>
    </Grid>

    <Grid container>
      <Grid item xs={10} md={7}  sx={{ width: '100%', margin: 'auto', mt: 2, mb: 2 }}>
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          sx={{width:'100%'}}
        />
      </Grid>
    </Grid>

    {signUpFlag && <Grid container>
      <Grid item xs={10} md={7}  sx={{ width: '100%', margin: 'auto', mt: 2, mb: 2 }}>
        <TextField
          id="password"
          label="Confirm Password"
          variant="outlined"
          sx={{width:'100%'}}
        />
      </Grid>
    </Grid>}



    <Grid container>
      <Grid item xs={10} md={7}  sx={{ width: '100%', margin: 'auto', mt: 2, mb: 2 }}>
      <Button variant='outlined' sx={{width:"100%" , margin:'auto' ,  color:'#9E465B'  , border:'#9E465B solid 1px'  }}>{signUpFlag?'Sign Up':'Log In'}</Button>
      </Grid>
    </Grid>

   





    <Typography onClick={()=>{setSignUpFlag(!signUpFlag)}} variant='p' sx={{mt:2,  zIndex:1 }}>{signUpFlag?'Already have an account? Login':"Don't have an account? Sign Up"}</Typography>

    <Grid container>
      <Grid item xs={10} md={7}  sx={{ width: '100%', margin: 'auto', mt: 2, mb: 2 }}>
      <Button variant='outlined' sx={{width:"100%" , margin:'auto' ,  color:'#9E465B'  , border:'#9E465B solid 1px'  }}>Log In With Google</Button>
      </Grid>
    </Grid>

    </Box>
  );
}
