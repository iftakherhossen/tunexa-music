import { Container } from '@mui/material';
import React from 'react';
import MusicHolder from '../Components/HomeComponents/MusicHolder';
import PlaylistHolder from '../Components/HomeComponents/PlaylistHolder';
import SearchBarComponent from '../Components/HomeComponents/SearchBar';
import Navigation from '../Components/Shared/Navigation';

const Home = () => {
     return (
          <Container>
               <Navigation />
               <SearchBarComponent />
               <PlaylistHolder />
               <MusicHolder />
          </Container>
     );
};

export default Home;