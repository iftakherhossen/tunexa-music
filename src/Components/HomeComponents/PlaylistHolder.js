import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PlaylistCard from './PlaylistCard';
import playlists from '../../assets/database/playlists';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';

const PlaylistHolder = () => {
     return (
          <Box sx={{ mt: 4 }}>
               <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <QueueMusicIcon sx={{ fontSize: 35, mr: 1 }} />
                    <Typography component="div" variant="h4" sx={{ fontWeight: 600, fontFamily: 'Macondo, cursive' }}>Playlists</Typography>                   
               </Box>

               <Container>
                    <Grid container spacing={2} column={3} sx={{ mt: 1.5 }}>
                         {
                              playlists.map((playlist) =>
                                   <PlaylistCard key={playlist._id} playlist={playlist} />
                              )
                         }
                    </Grid>
               </Container>
          </Box>
     );
};

export default PlaylistHolder;