import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
     return (
          <Box>
               <Typography variant="body2" sx={{ textAlign: 'center', mb: 4, color: '#aaa', fontFamily: 'Macondo, cursive' }}>©2022, All Rights Reserved, Developed By <Link to="https://iftakher-hossen.vercel.app/">Iftakher Hossen</Link></Typography>
          </Box>
     );
};

export default Footer;