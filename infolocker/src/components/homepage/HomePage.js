import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { Box, Container, Grid, TextField } from '@mui/material'
import Header from './Header'
import DataComponent from './DataComponent';
import {dummyData} from "../../utils/data"
import { useSelector } from 'react-redux';
import { getUserData } from '../../asyncFunctions';

function HomePage() {
const [detailsData,setDetailsData]=useState([])
const [linksData,setLinksData]=useState([])
const [filesData,setFilesData]=useState([])
  const userId=useSelector((state)=>state.loginData[0].id)

  const getData=async()=>{
    const resultObject= await getUserData(userId);
    console.log(resultObject.details)
    setLinksData(resultObject.links)
    setDetailsData(resultObject.details)
    setFilesData(resultObject.files)
    // console.log(detailsData)
  }

  useEffect( ()=>{
 getData()
  },[])
  return (
    <div>
        <Navbar isLoggedIn={true}/>
        <div style={{padding:"30px"}}>
        <Box sx={{background:'none',width:{sx:"100%",md:"60%"},border:"1px solid black",padding:4}}>
          <Grid>
            <Header type="details"/>
            <Grid container spacing={2} sx={{marginTop:3}}>
              {detailsData.length>0 ?detailsData.map((dataa)=>{
                    return(
                    <DataComponent label={dataa.label} value={dataa.value} type="details" />
                   ); }
              ):<div>No Details at the moment</div>}
            </Grid>
            </Grid>
          <Grid sx={{marginTop:5,marginBottom:5}}>
          <Header type="links" />
          <Grid container spacing={2} sx={{marginTop:3}}>
          {linksData.length>0 ? linksData.map((dataa)=>{
                    return(
                    <DataComponent label={dataa.label} value={dataa.value} type="links" />
                   ); }
              ):<div>No links at the moment</div>}
            </Grid>
          </Grid>
          <Grid>
          <Header type="files" />
          <Grid container spacing={2} sx={{marginTop:3}}>
          {filesData.length>0 ? filesData.map((dataa)=>{
                    return(
                    <DataComponent label={dataa.label} value={dataa.value} type="files" />
                   ); }
              ):<div>No Files at the moment</div>}
            </Grid>
          </Grid>
        </Box>
        </div>
    </div>
  )
}

export default HomePage