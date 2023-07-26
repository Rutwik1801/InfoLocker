import React from 'react'
import DownloadIcon from '@mui/icons-material/DownloadForOfflineRounded';
import { Grid, TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/FileCopyTwoTone';
import EditIcon from '@mui/icons-material/EditTwoTone';
import DeleteIcon from '@mui/icons-material/DeleteTwoTone';
import {Navigate, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { deleteData } from '../../asyncFunctions';
function DataComponent({label,value,type,docId,handleDelete,url}) {
    const userId=useSelector((state)=>state.loginData[0].id)
    const navigate = useNavigate();
    const handleClick=()=>{
        if(type==="files"){
            console.log(url)
            window.open(url)
            console.log("downoad")
        }else{
            navigator.clipboard.writeText("hello")
            console.log("copy")
        }
    }
    const handleEditClick = (e)=>{
       navigate("/dataForm" , { state: { data: {label , value,type,docId,edit:true} } });
    }
    const handleDeleteClick=()=>{
     handleDelete(userId,type,docId)
    }
   
  return (
    <Grid  item xs={12} sm={6}>
    <TextField 
      
         sx={{boxShadow:"0px 1px 5px rgba(0,0,0,0.1)"}}
              id="outlined-read-only-input"
              label={label}
              defaultValue={value}
InputProps={{
readOnly:true,
endAdornment: (
    <div style={{display:"flex"}}>
<IconButton sx={{color:"#9E465B"}} onClick={handleEditClick}>
    <EditIcon docId={docId} />
</IconButton>
<IconButton sx={{color:"#9E465B"}} onClick={handleDeleteClick}>
    <DeleteIcon />
</IconButton>
<IconButton sx={{color:"#9E465B"}} onClick={handleClick}>
    {type==="files"?<DownloadIcon />:<ContentCopyIcon />}
</IconButton>
    </div>

),
}}
/>           
 </Grid>
  )
}

export default DataComponent