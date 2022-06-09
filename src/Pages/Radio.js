import { Box, Typography } from '@mui/material';
import React from 'react';

const Radio = () => {
     return (
          <Box sx={{ height: '100vh' }}>
               <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h4" sx={{ mb: 1, fontWeight: 'bold', fontFamily: 'Macondo, cursive' }}>
                         Coming Soon!
                    </Typography>
               </Box>
          </Box>
     );
};

export default Radio;