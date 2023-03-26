import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'


const Navbar = () => {
  return (
    <Box
    sx={{
      display: "flex",
      minHeight: 70,
      borderBottom: '1px solid #ddd',
    }}
  >
    <Container maxWidth="xl">
    <Box
        sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: 90,
            px: 4,
            alignItems: "center"
          }}
    >
    <h2>Logo</h2>
    <h2>Profile</h2>
    </Box>
    </Container>
    </Box>
  )
}

export default Navbar