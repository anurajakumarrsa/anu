import React from "react";
import{Box,Grid, Typography} from '@mui/material'
import { Link } from "react-router-dom";
import '../App.css'

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=menu" />
const App=()=>{
    return(
         <Grid container>
             <Grid item md={12} sm={12} xs={12}>
                <Box sx={{display:"flex",alignItem:"center",height:"80px",backgroundColor:"black",padding:"10px"}}>
                 <Grid item md={8} sm={7} xs={10}>
                    <Box sx={{fontSize:"50px",marginLeft:"50px",color:"white"}}>
                    <Typography variant='p' className='pacifico-regular'>Bloom</Typography>
                    </Box>
                 </Grid>
                 <Grid item md={4} sm={5} xs={2}>
                  <Grid container>
                     <Grid item lg={2}>
                        <Box sx={{display:{md:"block",sm:"none",xs:"none"}}}>
                        <Link to="/Home" style={{marginRight:"10px",textDecoration:"none",color:"white"}}>Home</Link>
                        </Box>
                     </Grid>
                  </Grid>
                 </Grid>
                 
                        
                 




                </Box>
             </Grid>
         </Grid>
)}
export default App