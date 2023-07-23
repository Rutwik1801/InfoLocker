import React from 'react'
import Navbar from '../Navbar'
import { Box, Container, Grid, TextField } from '@mui/material'
import Header from './Header'
import DataComponent from './DataComponent';
import {dummyData} from "../../utils/data"

function HomePage() {
  console.log(dummyData[0].details)
  return (
    <div>
        <Navbar isLoggedIn={true}/>
        <div style={{padding:"30px"}}>
        <Box sx={{background:'none',width:{sx:"100%",md:"60%"},border:"1px solid black",padding:4}}>
          <Grid>
            <Header type="details"/>
            <Grid container spacing={2} sx={{marginTop:3}}>
              {dummyData[0].details.map((dataa)=>{
                    return(
                    <DataComponent label={dataa.label} value={dataa.value} type="details" />
                   ); }
              )}
            </Grid>
            </Grid>
          <Grid sx={{marginTop:5,marginBottom:5}}>
          <Header type="links" />
          <Grid container spacing={2} sx={{marginTop:3}}>
          {dummyData[0].links.map((dataa)=>{
                    return(
                    <DataComponent label={dataa.label} value={dataa.value} type="links" />
                   ); }
              )}
            </Grid>
          </Grid>
          <Grid>
          <Header type="files" />
          <Grid container spacing={2} sx={{marginTop:3}}>
          {dummyData[0].files.map((dataa)=>{
                    return(
                    <DataComponent label={dataa.label} value={dataa.value} type="files" />
                   ); }
              )}
            </Grid>
          </Grid>
        </Box>
        </div>
    </div>
  )
}

export default HomePage