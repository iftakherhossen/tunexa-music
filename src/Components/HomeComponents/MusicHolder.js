import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import MusicCard from './MusicCard';

const MusicHolder = () => {
     const [musics, setMusics] = useState([]);

     useEffect(() => {
          fetch('./musics.json')
               .then(res => res.json())
               .then(data => setMusics(data));
     }, []);

     return (
          <Box sx={{ mt: 4 }}>              
               <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>Trending</Typography>
               <Container>
                    <Grid container spacing={2} column={3} sx={{ mt: 1.5 }}>
                         {
                              musics.map((music) =>
                                   <MusicCard key={music.id} music={music} />
                              )
                         }
                    </Grid>
               </Container>
          </Box>
     );
};

export default MusicHolder;