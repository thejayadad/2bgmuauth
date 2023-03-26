import React from 'react'
import Category from '../components/category/Category'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Box } from '@mui/material'


const Home = () => {
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
    <Category />
    
   </Box>
    </Box>
  )
}

export default Home