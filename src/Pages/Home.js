import { Container } from '@mui/material';
import React from 'react';
import MusicHolder from '../Components/HomeComponents/MusicHolder';
import PlaylistHolder from '../Components/HomeComponents/PlaylistHolder';
import SearchBarComponent from '../Components/HomeComponents/SearchBar';
import Footer from '../Components/Shared/Footer';
import Navigation from '../Components/Shared/Navigation';

const Home = () => {
     return (
          <Container>
               <Navigation />
               <SearchBarComponent />
               <PlaylistHolder />
               <MusicHolder />
               <Footer />
          </Container>
     );
};

export default Home;