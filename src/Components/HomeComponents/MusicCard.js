import { Box, Card, CardContent, CardMedia, CircularProgress, Fab, Grid, IconButton, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const useAudio = url => {
     const [audio] = useState(new Audio(url));
     const [playing, setPlaying] = useState(false);
     const [mute, setMute] = useState(false);
   
     const playAudio = () => setPlaying(!playing);
     const handleMute = () => setMute(!mute);
   
     useEffect(() => {
         playing ? audio.play() : audio.pause();
     }, [playing, audio]);
   
     useEffect(() => {
          audio.addEventListener('ended', () => setPlaying(false));
          return () => {
               audio.removeEventListener('ended', () => setPlaying(false));
          };
     }, [audio]);

     useEffect(() => {
         mute === true && audio.muted(true);
      }, [mute, audio]);

     useEffect(() => {
          audio.addEventListener('ended', () => setMute(false));
          return () => {
               audio.removeEventListener('ended', () => setMute(false));
          };
     }, [audio]);
   
     return [playing, playAudio, handleMute];
};

const MusicCard = ({ music }) => {
     const { name, cover, audio, singer, duration } = music;                             
     const [playing, playAudio] = useAudio(audio);
     const min = duration.split(':')[0];
     const sec = duration.split(':')[1];
     const time = (((min * 1) * 60) + (sec * 1)) * 1000;
     const [progress, setProgress] = useState(0);

     useEffect(() => {
          const timer = setInterval(() => {
               setProgress((prevProgress) => (prevProgress >= time ? 0 : prevProgress + 1));
          }, 1000);

          return () => {
               clearInterval(timer);
               !playing && setProgress(0);
          };
     }, [time, progress, playing]);

     return (
          <Grid item xs={12} sm={6} md={4}>
               <Card sx={{ display: 'flex', justifyContent: 'space-between', borderRadius: '10px', boxShadow: 3, bgcolor: '#B2BEB5' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', width: 200 }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                              <Typography component="div" variant="h6" sx={{ fontFamily: 'Macondo, cursive', fontWeight: 600 }}>{name}</Typography>
                              <Typography variant="body2" color="text.secondary" component="div" sx={{ mb: 0.8, fontFamily: 'Macondo, cursive' }}>by <b>{singer}</b></Typography>
                              <Typography variant="body1" component="div" sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Macondo, cursive' }}>
                                   <AccessTimeFilledIcon sx={{ fontSize: 17, mb: 0.2, mr: 0.8, fontFamily: 'Macondo, cursive' }} /> {duration} min
                              </Typography>
                         </CardContent>
                         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pl: 1, pb: 1 }}>
                              <Box sx={{ position: 'relative' }}>
                                   <Fab aria-label="play/pause" onClick={playAudio} sx={{ width: 40, height: 40, boxShadow: 0, bgcolor: '#B2BEB5' }} className="fabBtn">
                                        {playing === true ? <PauseIcon sx={{ fontSize: 25, color: '#282c34' }} /> : <PlayArrowIcon sx={{ fontSize: 25 }} />}
                                   </Fab>
                                   {playing && <CircularProgress
                                        variant="determinate"
                                        size={49}
                                        value={progress}
                                        sx={{
                                             position: 'absolute',
                                             top: -4,
                                             left: -4,
                                             zIndex: 1,
                                        }}
                                   />}
                              </Box>
                              <IconButton aria-label="muteOn/muteOff">
                                   {/* <VolumeOffIcon sx={{ fontSize: 25 }} />  onClick={handleMute} */}
                                   {playing ? <VolumeUpIcon sx={{ fontSize: 22, color: '#282c34' }} /> : <VolumeUpIcon sx={{ fontSize: 22, color: 'grey' }} />}
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