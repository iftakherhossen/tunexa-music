import { Box, Card, CardContent, CardMedia, Checkbox, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const MusicCard = ({ music }) => {
     const { name, cover, singer, duration } = music;

     return (
          <Grid item xs={12} sm={6} md={4}>
               <Card sx={{ display: 'flex', justifyContent: 'space-between', borderRadius: '8px', boxShadow: 3, bgcolor: '#eee' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                         <Typography component="div" variant="h6">{name}</Typography>
                         <Typography variant="body2" color="text.secondary" component="div" sx={{ mb: 0.5 }}>by <b>{singer}</b></Typography>
                         <Typography variant="body1" component="div">{duration} min</Typography>
                    </CardContent> 
                    <Box className="wrapper">
                         <CardMedia
                              component="img"
                              sx={{ height: 112, width: 110, overflow: 'hidden', objectFit: 'cover', borderRadius: '0 8px 8px 0', boxShadow: 1 }}
                              image={cover}
                              alt={name}
                              draggable="false"
                              className="hoverImg"
                         />
                         <Box className="hoverBtn">
                              <IconButton aria-label="play/pause">
                                   <Checkbox icon={<PlayArrowIcon sx={{ fontSize: 35 }} />} checkedIcon={<PauseIcon sx={{ fontSize: 35 }} />} sx={{ height: 30, width: 30 }} />
                              </IconButton>                              
                         </Box>
                    </Box>
               </Card>
          </Grid>
     );
};

export default MusicCard;