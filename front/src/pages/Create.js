import React from 'react'
import Category from '../components/category/Category'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Box } from '@mui/material'



const Create = () => {
  return (
    <Box
    sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
   <Box>
    <Navbar />
    <Box
    spacing="4"
    sx={{
      maxWidth: "80%",
      margin: "auto",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      background: "#222"

    }}>
        Create
    </Box>
    <Footer />
   </Box>
    </Box>
  )
}

export default Create