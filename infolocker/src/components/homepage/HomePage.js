import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { Box, Container, Grid, TextField } from '@mui/material'
import Header from './Header'
import DataComponent from './DataComponent';
import {dummyData} from "../../utils/data"
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, getUserData } from '../../asyncFunctions';
import AlertComponent from '../alert/AlertComponent';
import { alertSliceActions } from '../../store/alertSlice';

function HomePage() {
  const dispatch=useDispatch()
const [detailsData,setDetailsData]=useState([])
// const [open,setOpen]=useState(false)
const [linksData,setLinksData]=useState([])
const [filesData,setFilesData]=useState([])
  // const alertData=useSelector((state)=>state.alertData)
  const userId=localStorage.getItem("userId")

  const getData=async()=>{
    const resultObject= await getUserData(userId);
    setLinksData(resultObject.links)
    setDetailsData(resultObject.details)
    setFilesData(resultObject.files)
  }
   const handleDelete=async (uid,type,docId,value)=>{
     deleteData(uid,type,docId,value);
     dispatch(alertSliceActions.fireTrue({flag:true,alertMessage:` ${type.substring(0,type.length-1).toUpperCase()} Deleted Successfully`}))
     getData();
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
                console.log(dataa)
                    return(
                    <DataComponent label={dataa.label} value={dataa.value} type="details" docId={dataa.docId} handleDelete={handleDelete}/>
                   ); }
              ):<div>No Details at the moment</div>}
            </Grid>
            </Grid>
          <Grid sx={{marginTop:5,marginBottom:5}}>
          <Header type="links" />
          <Grid container spacing={2} sx={{marginTop:3}}>
          {linksData.length>0 ? linksData.map((dataa)=>{
                    return(
                    <DataComponent  label={dataa.label} handleDelete={handleDelete} value={dataa.value} type="links" docId={dataa.docId} />
                   ); }
              ):<div>No links at the moment</div>}
            </Grid>
          </Grid>
          <Grid>
          <Header type="files" />
          <Grid container spacing={2} sx={{marginTop:3}}>
          {filesData.length>0 ? filesData.map((dataa)=>{
                    return(
                    <DataComponent label={dataa.label} handleDelete={handleDelete} value={dataa.value} url={dataa.url} type="files" docId={dataa.docId} />
                   ); }
              ):<div>No Files at the moment</div>}
            </Grid>
          </Grid>
        </Box>
        </div>
        <AlertComponent />
    </div>
  )
}

export default HomePage