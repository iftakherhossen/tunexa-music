import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import PlaylistCard from './PlaylistCard';

const PlaylistHolder = () => {
     const [playlists, setPlaylists] = useState([]);

     useEffect(() => {
          fetch('./playlists.json')
               .then(res => res.json())
               .then(data => setPlaylists(data));
     }, []);

     return (
          <Box sx={{ mt: 4 }}>
               <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>Playlists</Typography>
               <Container>
                    <Grid container spacing={2} column={3} sx={{ mt: 1.5 }}>
                         {
                              playlists.map((playlist) =>
                                   <PlaylistCard key={playlist.id} playlist={playlist} />
                              )
                         }
                    </Grid>
               </Container>
          </Box>
     );
};

export default PlaylistHolder;