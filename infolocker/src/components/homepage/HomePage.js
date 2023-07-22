import React from 'react'
import Navbar from '../Navbar'
import { Box, Container, Grid, TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Header from './Header'
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import IconButton from '@material-ui/core/IconButton';
import Avatar from '@mui/material/Avatar';
import DataComponent from './DataComponent';
// import { Search } from '@material-ui/icons';

function HomePage() {
  return (
    <div>
        <Navbar isLoggedIn={true}/>
        <div style={{padding:"30px"}}>
        <Box sx={{background:'none',width:{sx:"100%",md:"60%"},border:"1px solid black",padding:4}}>
          <Grid>
            <Header title="Details"/>
            <Grid container spacing={2} sx={{marginTop:3}}>
            <DataComponent isFile={false} label="name" value="rutwik" />
            <DataComponent isFile={false} label="name" value="rutwik" />
            <DataComponent isFile={false} label="name" value="rutwik" />
            <DataComponent isFile={false} label="name" value="rutwik" />
            <DataComponent isFile={false} label="name" value="rutwik" />
            <DataComponent isFile={false} label="name" value="rutwik" />
            </Grid>
            </Grid>
          <Grid sx={{marginTop:5,marginBottom:5}}>
          <Header title="Links" />
          <Grid container spacing={2} sx={{marginTop:3}}>
            <DataComponent isFile={false} label="name" value="rutwik" />
            <DataComponent isFile={false} label="name" value="rutwik" />
            <DataComponent isFile={false} label="name" value="rutwik" />
            <DataComponent isFile={false} label="name" value="rutwik" />
            <DataComponent isFile={false} label="name" value="rutwik" />
            <DataComponent isFile={false} label="name" value="rutwik" />
            </Grid>
          </Grid>
          <Grid>
          <Header title="Files" />
          <Grid container spacing={2} sx={{marginTop:3}}>
            <DataComponent isFile={true} label="name" value="rutwik" />
            <DataComponent isFile={true} label="name" value="rutwik" />
            <DataComponent isFile={true} label="name" value="rutwik" />
            <DataComponent isFile={false} label="name" value="rutwik" />
            <DataComponent isFile={false} label="name" value="rutwik" />
            <DataComponent isFile={false} label="name" value="rutwik" />
            </Grid>
          </Grid>
        </Box>
        </div>
    </div>
  )
}

export default HomePage