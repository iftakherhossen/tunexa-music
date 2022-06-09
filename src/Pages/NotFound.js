import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
     return (
          <Box sx={{ height: '100vh' }}>
               <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h4" sx={{ mb: 1, fontWeight: 'bold', fontFamily: 'Macondo, cursive' }}>404 Not Found! Back to <Link to="/" style={{ textDecoration: 'none', textTransform: 'uppercase', color: '#61DBFB' }}>Home</Link></Typography>
                    <img src="https://i.ibb.co/hgyBR8p/radio.png" alt="404 No Found" />
               </Box>
          </Box>
     );
};

export default NotFound;