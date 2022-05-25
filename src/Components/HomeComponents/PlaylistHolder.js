import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PlaylistCard from './PlaylistCard';
import playlists from '../../assets/database/playlists';

const PlaylistHolder = () => {
     return (
          <Box sx={{ mt: 4 }}>
               <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>Playlists</Typography>

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