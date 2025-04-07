import React from 'react';
import { Grid,Box,Typography, Button } from '@mui/material';
import image from "../assets/image/img.jpeg";
const Task = () => {
  return (
  
    <Grid container>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box sx={{backgroundColor:"black",height:"150px"}}>
            <Typography variant='h3' sx={{color:"white",marginLeft:"100px",paddingTop:"40px",fontFamily:"pacifico"}}>Bloom</Typography> 
          </Box>
        </Grid>
      </Grid> 
      
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Box sx={{display:"flex",flexDirection:{lg:"row",md:"row",sm:"column",xs:"column"},height:{lg:"400px",md:"430px",sm:"610px",xs:"880px"},backgroundColor:"#E6E0E0"}}>
          <Grid item lg={6} md={6} sm={6} xs={12} sx={{display:{lg:"block",md:"block",sm:"none",xs:"none"}}}>
            <Box sx={{fontSize:"30px",fontWeight:"bold",marginLeft:"55px",paddingTop:"50px"}}>
              <Typography variant='p'>
                Lorem ipsum dolor sit amet
              </Typography>
            </Box>
            <Box sx={{fontSize:"20px",marginLeft:"55px",paddingTop:"20px"}}>
              <Typography variant='p'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam aspernatur esse nisi impedit eius voluptatibus libero hic deserunt! Harum tenetur, cumque qui commodi assumenda veniam?
              </Typography>
            </Box>
            <Box sx={{fontSize:"20px",marginLeft:"55px",paddingTop:"20px"}}>
              <Typography variant='p'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas repellendus earum recusandae maiores ullam, reprehenderit sequi quibusdam velit tenetur nesciunt.
              </Typography>
            </Box>
            <Box sx={{fontSize:"30px",fontWeight:"bold",marginLeft:"55px",paddingTop:"20px"}}>
              <Button variant='contained' sx={{backgroundColor:"orange"}}>
                Learn more
              </Button>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{height:{lg:"200px",md:"150px"},marginLeft:"50px",paddingTop:{lg:"80px",md:"80px",sm:"50px",xs:"20px"},paddingRight:"50px"}}>
              <img src={image} alt="" height="250px" width="100%"/>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{display:{lg:"none",md:"none",sm:"block",xs:"block"}}}>
            <Box sx={{fontSize:"30px",fontWeight:"bold",marginLeft:"55px",paddingTop:{lg:"50px",md:"50px",sm:"10px",xs:"0px"}}}>
              <Typography variant='p'>
                Lorem ipsum dolor sit amet
              </Typography>
            </Box>
            <Box sx={{fontSize:"20px",marginLeft:"55px",paddingTop:"20px"}}>
              <Typography variant='p'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam aspernatur esse nisi impedit eius voluptatibus libero hic deserunt! Harum tenetur, cumque qui commodi assumenda veniam?
              </Typography>
            </Box>
            <Box sx={{fontSize:"20px",marginLeft:"55px",paddingTop:"20px"}}>
              <Typography variant='p'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas repellendus earum recusandae maiores ullam, reprehenderit sequi quibusdam velit tenetur nesciunt.
              </Typography>
            </Box>
            <Box sx={{fontSize:"30px",fontWeight:"bold",marginLeft:"55px",paddingTop:"20px"}}>
              <Button variant='contained' sx={{backgroundColor:"orange"}}>
                Learn more
              </Button>
            </Box>
          </Grid>
        </Box>
      </Grid>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} >
          <Box sx={{height:"300px",backgroundColor:"aqua"}}>
          <Box sx={{fontSize:"30px",fontWeight:"bold",marginLeft:"30px",paddingTop:"10px"}}>
              <Typography variant='p'>
                This is Heading
              </Typography>
              <Grid item lg={4} md={12} sm={6} >
              <Box sx={{height:"100px",backgroundColor:"black",marginTop:"10px",marginLeft:"20px"}}></Box>
              <Typography variant='p'>Aliquam et iaculis sapien</Typography>
              </Grid>
            </Box>
            </Box >
         </Grid>
         
      </Grid>
      </Grid>
      )
      }
      export default Task