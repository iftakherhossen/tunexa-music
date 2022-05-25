import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

const useAudio = url => {
     const [audio] = useState(new Audio(url));
     const [playing, setPlaying] = useState(false);
   
     const toggle = () => setPlaying(!playing);
   
     useEffect(() => {
         playing ? audio.play() : audio.pause();
     }, [playing, audio]);
   
     useEffect(() => {
          audio.addEventListener('ended', () => setPlaying(false));
          return () => {
               audio.removeEventListener('ended', () => setPlaying(false));
          };
     }, [audio]);
   
     return [playing, toggle];
};

const MusicCard = ({ music }) => {
     const { name, cover, audio, singer, duration } = music;                             
     const [playing, toggle] = useAudio(audio);

     return (
          <Grid item xs={12} sm={6} md={4}>
               <Card sx={{ display: 'flex', justifyContent: 'space-between', borderRadius: '10px', boxShadow: 3, bgcolor: '#eee' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: 200 }}>
                         <CardContent sx={{ flex: '1 0 auto' }}>
                              <Typography component="div" variant="h6">{name}</Typography>
                              <Typography variant="body2" color="text.secondary" component="div" sx={{ mb: 0.8 }}>by <b>{singer}</b></Typography>
                              <Typography variant="body1" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                                   <AccessTimeFilledIcon sx={{ fontSize: 17, mb: 0.2, mr: 0.8 }} /> {duration} min
                              </Typography>
                         </CardContent>
                         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pl: 1, pb: 1 }}>
                              <IconButton aria-label="play/pause" onClick={toggle}>
                                   {playing === true ? <PauseIcon sx={{ fontSize: 25, color: '#282c34' }} /> : <PlayArrowIcon sx={{ fontSize: 25 }} />}
                              </IconButton>
                              <IconButton aria-label="muteOn/muteOff">
                                   {/* <VolumeOffIcon sx={{ fontSize: 25 }} />  */}
                                   <VolumeUpIcon sx={{ fontSize: 24 }} />
                              </IconButton>
                         </Box>
                    </Box>
                    <Box>
                         <CardMedia
                              component="img"
                              sx={{ height: 163, width: 150, overflow: 'hidden', objectFit: 'cover', borderRadius: '0 10px 10px 0', boxShadow: 1 }}
                              image={cover}
                              alt={name}
                              draggable="false"                              
                         />
                    </Box>
               </Card>
          </Grid>
     );
};

export default MusicCard;