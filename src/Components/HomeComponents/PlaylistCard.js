import { Box, Card, CardContent, Grid, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const useAudio = url => {
     const track = url.map(t => { return t });
     const [audio] = useState(new Audio(track));
     console.log(track)
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

const PlaylistCard = ({ playlist }) => {
     const { name, createdBy, musics } = playlist;
     const track = musics.map(music => {return music.audio});
     console.log(track)
     const [playing, toggle] = useAudio(track);

     return (
          <Grid item xs={12} sm={6} md={4}>
               <Card sx={{ display: 'flex', justifyContent: 'space-between', borderRadius: '8px', boxShadow: 3, bgcolor: '#E7EAF4' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', mt: -0.8, mb: -1.5 }}>
                         <CardContent sx={{ flex: '1 0 auto' }}>
                              <Typography component="div" variant="h6" sx={{ fontWeight: 600 }}>{name}</Typography>
                              <Typography variant="body2" color="text.secondary" component="div" sx={{ mb: 0.5 }}>Created by <span style={{ fontWeight: 600 }}>{createdBy}</span></Typography>
                              <Typography variant="body1" component="div"><span style={{ fontWeight: 600 }}>{musics.length}</span> {musics.length <= 1 ? 'Music' : 'Musics'}</Typography>
                         </CardContent>                         
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', pr: 1.5, my: -1 }}>
                    <IconButton aria-label="play/pause" onClick={toggle}>
                         {playing === true ? <PauseIcon sx={{ fontSize: 25, color: 'green' }} /> : <PlayArrowIcon sx={{ fontSize: 25 }} />}
                    </IconButton>                           
                    </Box>
               </Card>
          </Grid>
     );
};

export default PlaylistCard;