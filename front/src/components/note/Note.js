import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';



const Note = () => {
  return (
    <div>
    <Box sx={{ mx: 2 }}>
    <Grid container rowSpacing={3} columnSpacing={3}>
    <Grid item xs={12} sm={4} md={4} lg={3}>
    <Box
        sx={{
            height: "275px",
            display: 'block',
            width: '100%',
            borderRadius: 3,
            overflow: "hidden"
        }}
    >
            <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
            <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red"}} aria-label="recipe">
            R
          </Avatar>
        }

        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
            <CardMedia
        component="img"
        height="275"
        image="https://images.pexels.com/photos/2437892/pexels-photo-2437892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Paella dish"
      />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        </CardActions>
            </Card>
        {/* <img

        src="https://images.pexels.com/photos/2437892/pexels-photo-2437892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="note-imgage" /> */}


    </Box>
    </Grid>
    </Grid>
    </Box>


    </div>
  )
}

export default Note