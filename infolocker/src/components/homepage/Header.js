import { Button, Grid, Typography } from '@mui/material'
import {useNavigate} from 'react-router-dom';
import React from 'react'

function Header({title}) {
  const navigate = useNavigate();
const handleAdd = ()=>{
  navigate("/dataForm" , {state:{data:{label:'' , value:'' , title}}});
}


  return (
    <Grid sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Typography fontSize={24} sx={{letterSpacing:2}}>{title}</Typography>
        <Button sx={{width:"150px"}} onClick={handleAdd} variant='outlined'>+ Add {title}</Button>
    </Grid>
  )
}

export default Header