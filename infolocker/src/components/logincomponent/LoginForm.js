import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography , Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import  signUpHandler  from '../../firebase';
import app from '../../firebase';
import firebase from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {  signOut ,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import store from '../../store/store';
import {loginSliceActions} from '../../store/loginSlice';
import {useDispatch} from 'react-redux';
import { createUserData } from '../../asyncFunctions';
import { alertSliceActions } from '../../store/alertSlice';


export default function LoginForm() {


const dispatch = useDispatch();
const [signUpFlag , setSignUpFlag] = useState(false); 
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [confirmPassword,setConfirmPassword]=useState("");
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');
const navigate=useNavigate();
const auth=getAuth()
const provider = new GoogleAuthProvider();





const handleClick=async ()=>{

  // email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailPattern)) {
    setEmailError('Invalid email address');
    return;
  }
  // password length validation
  if (password.length < 6) {
    setPasswordError('Password must be at least 6 characters long');
    return ;
  }
  setPasswordError('');
  setEmailError('');

  if(signUpFlag){
    if(password===confirmPassword){

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user.uid)
        // ...
      })
      .catch((error) => {
          console.log(error)
          // dispatch(alertSliceActions.fireTrue({flag:true,alertMessage:error.message}))
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

      
  }else{
    setPasswordError("passwords do not match");
    return;
  }
}
else {
  signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  console.log(user.uid)
  createUserData(user.uid);
  dispatch(loginSliceActions.login({id:user.uid}));
  navigate("/profile")
  // ...
})
.catch((error) => {
  console.log(error)
  const errorCode = error.code;
  const errorMessage = error.message;
});

}}

const handleGoogleClick=async()=>{

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user.uid);
    createUserData(user.uid)
    dispatch(loginSliceActions.login({id:user.uid}));
    navigate("/profile")
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

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
        
        required
          id="username"
          label="Username"
          variant="outlined"
          helperText={emailError}
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          sx={{width:'100%' }}
        />
      </Grid>
    </Grid>

    <Grid container>
      <Grid item xs={10} md={7}  sx={{ width: '100%', margin: 'auto', mt: 2, mb: 2 }}>
        <TextField
          id="password"
          label="Password"
          type='password'
          onChange={(e)=>{setPassword(e.target.value)}}
          variant="outlined"
          required={true}
          helperText={passwordError}
          value={password}
          sx={{width:'100%' }}
        />
      </Grid>
    </Grid>

    {signUpFlag && <Grid container>
      <Grid item xs={10} md={7}  sx={{ width: '100%', margin: 'auto', mt: 2, mb: 2 }}>
        <TextField
          id="confirm password"
          type='password'
          value={confirmPassword}
          required
          onChange={(e)=>{setConfirmPassword(e.target.value)}}
          label="Confirm Password"
          variant="outlined"
          sx={{width:'100%'}}
        />
      </Grid>
    </Grid>}



    <Grid container>
      <Grid item xs={10} md={7}  sx={{ width: '100%', margin: 'auto', mt: 2, mb: 2 }}>
      <Button onClick={handleClick} variant='outlined' sx={{width:"100%" , margin:'auto' ,  color:'#9E465B'  , border:'#9E465B solid 1px'  }}>{signUpFlag?'Sign Up':'Log In'}</Button>
      </Grid>
    </Grid>

   





    <Typography onClick={()=>{setSignUpFlag(!signUpFlag)}} variant='p' sx={{mt:2,  zIndex:1 }}>{signUpFlag?'Already have an account? Login':"Don't have an account? Sign Up"}</Typography>

    <Grid container>
      <Grid item xs={10} md={7}  sx={{ width: '100%', margin: 'auto', mt: 2, mb: 2 }}>
      <Button onClick={handleGoogleClick} variant='outlined' sx={{width:"100%" , margin:'auto' ,  color:'#9E465B'  , border:'#9E465B solid 1px'  }}>Log In With Google</Button>
      </Grid>
    </Grid>

    </Box>
  );
}
