import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const SearchItem = ({ item }) => {
     const { name, singer, duration, name: title, musics, createdBy, type  } = item;
     
     return (
          <Grid item xs={12} sm={6} md={3}>
               <Link to="">
                    <Card sx={{ display: 'flex', borderRadius: '8px', boxShadow: 3, bgcolor: '#37474F', color: '#eee' }}>                    
                         <CardContent sx={{ flex: '1 0 auto', my: -1 }}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                   <Typography component="div" variant="h6">{type ? name : title}</Typography>
                                   {type ? <QueueMusicIcon sx={{ fontSize: 25 }} /> : <MusicNoteIcon sx={{ fontSize: 23 }} />}
                              </Box>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                   <Typography variant="body2" component="div" sx={{ color: '#ccc' }}>by <b style={{ color: '#aaa' }}>{type ? createdBy : singer}</b></Typography>
                                   <Typography variant="body2" component="div" sx={{ color: '#ccc' }}><b>{type ? `${musics.length} ${musics.length <= 1 ? 'Music' : 'Musics'}` : `${duration} min`}</b></Typography>
                              </Box>
                         </CardContent>
                    </Card>
               </Link>               
          </Grid>
     );
};

export default SearchItem;