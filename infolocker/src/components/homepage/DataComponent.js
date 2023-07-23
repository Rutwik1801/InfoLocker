import React from 'react'
import DownloadIcon from '@mui/icons-material/DownloadForOfflineRounded';
import { Grid, TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/FileCopyTwoTone';
import EditIcon from '@mui/icons-material/EditTwoTone';
import DeleteIcon from '@mui/icons-material/DeleteTwoTone';
import {useNavigate} from 'react-router-dom'

function DataComponent({label,value,type}) {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigator.clipboard.writeText("hello")
        if(type==="file"){
            console.log("downoad")
        }else{
            console.log("copy")
        }
    }
    const handleEditClick = (e)=>{
       console.log(type)
       navigate("/dataForm" , { state: { data: {label , value,type} } });
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
    <EditIcon />
</IconButton>
<IconButton sx={{color:"#9E465B"}} onClick={handleClick}>
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