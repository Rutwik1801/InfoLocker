import { Button, Grid, Typography } from '@mui/material'
import {useNavigate} from 'react-router-dom';
import React from 'react'

function Header({type}) {
  const navigate = useNavigate();
const handleAdd = ()=>{
  navigate("/dataForm" , {state:{data:{label:'' , value:'' ,type}}});
}


  return (
    <Grid sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Typography fontSize={24} sx={{letterSpacing:2}}>{type}</Typography>
        <Button sx={{width:"150px"}} onClick={handleAdd} variant='outlined'>+ Add {type}</Button>
    </Grid>
  )
}

export default Header