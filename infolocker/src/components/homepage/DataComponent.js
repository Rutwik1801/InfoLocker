import React from 'react'
import DownloadIcon from '@mui/icons-material/DownloadForOfflineRounded';
import { Grid, TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/FileCopyTwoTone';
import EditIcon from '@mui/icons-material/EditTwoTone';
import DeleteIcon from '@mui/icons-material/DeleteTwoTone';

function DataComponent({label,value,isFile}) {

    const handleClick=()=>{
        navigator.clipboard.writeText("hello")
        if(isFile){
            console.log("downoad")
        }else{
            console.log("copy")
        }
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
<IconButton sx={{color:"#9E465B"}} onClick={handleClick}>
    <EditIcon />
</IconButton>
<IconButton sx={{color:"#9E465B"}} onClick={handleClick}>
    <DeleteIcon />
</IconButton>
<IconButton sx={{color:"#9E465B"}} onClick={handleClick}>
    {isFile?<DownloadIcon />:<ContentCopyIcon />}
</IconButton>
    </div>

),
}}
/>           
 </Grid>
  )
}

export default DataComponent