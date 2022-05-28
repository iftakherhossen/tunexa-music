import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import IconBox from './IconBox';

const PlaylistCard = ({ playlist }) => {
     const { name, createdBy, cover, musics } = playlist;

     return (
          <Grid item xs={12} sm={6} md={4}>
               <Card sx={{ borderRadius: '8px', boxShadow: 3, bgcolor: '#E7EAF4', position: 'relative', overflow: 'hidden', backgroundImage: `url(${cover})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', bgcolor: '#b2beb5cc' }}>
                         <Box sx={{ display: 'flex', flexDirection: 'column', mt: -0.8, mb: -1.5 }}>
                              <CardContent sx={{ flex: '1 0 auto' }}>
                                   <Typography component="div" variant="h6" sx={{ fontWeight: 600, fontFamily: 'Macondo, cursive' }}>{name}</Typography>
                                   <Typography variant="body2" color="text.secondary" component="div" sx={{ mb: 0.5, fontFamily: 'Macondo, cursive' }}>Created by <span style={{ fontWeight: 600 }}>{createdBy}</span></Typography>
                                   <Typography variant="body1" component="div"><span style={{ fontWeight: 600, fontFamily: 'Macondo, cursive' }}>{musics.length}</span> {musics.length <= 1 ? 'Music' : 'Musics'}</Typography>
                              </CardContent>                         
                         </Box>
                         {
                              musics.map((music) => ( <IconBox
                                   key={music._id}
                                   music={music}                                   
                              />))
                         }
                    </Box>
               </Card>
          </Grid>
     );
};

export default PlaylistCard;