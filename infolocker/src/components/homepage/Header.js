import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

function Header({title}) {
  return (
    <Grid sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Typography >{title}</Typography>
        <Button sx={{width:"150px"}} variant='outlined'>+ Add {title}</Button>
    </Grid>
  )
}

export default Header