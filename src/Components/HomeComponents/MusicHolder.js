import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MusicCard from './MusicCard';
import musics from '../../assets/database/musics';

const MusicHolder = () => {
     // const [musics, setMusics] = useState([]);

     // useEffect(() => {
     //      fetch(Audios)
     //           .then(res => res.json())
     //           .then(data => setMusics(data));
     // }, []);

     return (
          <Box sx={{ mt: 4, mb: 8 }}>              
               <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>Trending</Typography>
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