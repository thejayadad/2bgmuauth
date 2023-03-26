import React from 'react'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Footer = () => {
  return (
    <Box
    sx={{
      display: "flex",
      width:"100%",
      borderTop: '1px solid #ddd',

    }}
    >
    <Container maxWidth="xl">
    <Box
    sx={{
      width: "100%",
      display: "flex",
      justifyContent: "center"
    }}
    >
      <Stack>
        <Paper>
        <Link href="/"> Blog Spot </Link>
        <Paper >
                  <Link to="/">Home</Link>
                </Paper>
                <Paper >
                  <Link to="/">Home</Link>
                </Paper>        <Paper >
                  <Link to="/">Home</Link>
                </Paper>
        </Paper>
      </Stack>
      <Stack>
            <Paper

sx={{


  display: 'flex', justifyContent: 'center',
            mr: 1 }}
            >
              <Button>
                <Box sx={{


        display: 'flex', justifyContent: 'center',
                  mr: 1 }}>
                  GLOBE
                </Box>
                English (CA)
              </Button>
              <Button> $CAD </Button>
              <Button>
                Support & Resources
                <Box

              sx={{


                display: 'flex', justifyContent: 'center',
                          mr: 1 }}

                >
                  OUTLINE
                </Box>
              </Button>
            </Paper>
          </Stack>
    </Box>
    </Container>
    </Box>
  )
}

export default Footer