import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MusicCard from './MusicCard';
import musics from '../../assets/database/musics';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const MusicHolder = () => {
     return (
          <Box sx={{ mt: 4, mb: 8 }}> 
               <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <MusicNoteIcon sx={{ fontSize: 35, mr: 1 }} />
                    <Typography component="div" variant="h4" sx={{ fontWeight: 600, fontFamily: 'Macondo, cursive' }}>Trending</Typography>                   
               </Box>

               <Grid container spacing={2} column={3} sx={{ mt: 1.5 }}>
                    {
                         musics.map((music) =>
                              <MusicCard key={music._id} music={music} />
                         )
                    }
               </Grid>
          </Box>
     );
};

export default MusicHolder;