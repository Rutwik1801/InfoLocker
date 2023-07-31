import * as React from 'react';
import {useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography , Grid } from '@mui/material';
import Navbar from "../Navbar"
import { postUserEnteredData, uploadFileData } from '../../asyncFunctions';
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import AlertComponent from '../alert/AlertComponent';
import { alertSliceActions } from '../../store/alertSlice';

export default function DataForm() {
const [signUpFlag , setSignUpFlag] = useState(false); 
const [file,setFile]=useState(null)
const location = useLocation();
const navigate=useNavigate()
// Access the data from the state object
// const userId=useSelector((state)=>state.loginData[0].id)
const userId=localStorage.getItem("userId")
const receivedData = location.state.data;
console.log(receivedData)
const [labelData , setLabelData] = useState(receivedData.label);
const [valueData , setValueData] = useState(receivedData.value);
const type = receivedData.type;
const setOpen=receivedData.setOpen
const docId=receivedData.docId
const edit=receivedData.edit
const action=receivedData.label.length!==0?"Edit":"Enter";
const dispatch=useDispatch()
const handleClick=async ()=>{
  if(type==="files"){
     uploadFileData(userId,type,docId,edit,file,labelData)
  }else{
    postUserEnteredData(labelData,valueData,userId,type,docId,edit)
  }
  const messageString=edit?"Edited":"Added";
  dispatch(alertSliceActions.fireTrue({flag:true,alertMessage:` ${type.substring(0,type.length-1).toUpperCase()} ${messageString} Successfully`}));
  setTimeout(()=>{
    navigate("/profile")
  },3000)


}

  return (
    <div>
      <Navbar isLoggedIn={true}/>
    <Box
      component="form"
      sx={{
        width:{sx:"100%",md:"60%"},
        paddingTop:4,
        marginTop:6,
        display:'flex',
        flexDirection:'column',
        // margin:'auto' , 
        textAlign:'center' ,
        zIndex:1 , 
       
       
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant='h4' sx={{mt:2  , zIndex:1}}>Welcome back</Typography>
      <Typography variant='h6' sx={{ mb:2 ,  zIndex:1}}>Please {action} your {type}</Typography>
      

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

    {!(type==="files") && <Grid container>
      <Grid item xs={10} md={7}  sx={{ width: '100%', margin: 'auto', mt: 2, mb: 2 }}>
        <TextField
          onChange={(e)=>{setValueData(e.target.value)}}
          label="Value"
          variant="outlined"
          sx={{width:'100%' }}
          value = {valueData}
        />
      </Grid>
    </Grid>}
    {type==="files" &&<Grid container>
      <Grid item xs={10} md={7}  sx={{ width: '100%', margin: 'auto', mt: 2, mb: 2 }}>
        <TextField
        type='file'
          onChange={(e)=>{setFile(e.target.files[0])}}
          variant="outlined"
          sx={{width:'100%' }}
          // value = {valueData}
        />
      </Grid>
    </Grid>}
   

    <Grid container>
      <Grid item xs={10} md={7}  sx={{ width: '100%', margin: 'auto', mt: 2, mb: 2 }}>
      <Button onClick={handleClick} variant='outlined' sx={{width:"100%" , margin:'auto' ,  color:'#9E465B'  , border:'#9E465B solid 1px'  }} >Save Data</Button>
      </Grid>
    </Grid>

    </Box>
    </div>
  );
}
