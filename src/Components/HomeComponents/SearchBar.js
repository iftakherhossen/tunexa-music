import React, { useEffect, useState } from 'react';
import { Container, Grid, Toolbar } from '@mui/material';
import SearchBar from "material-ui-search-bar";
import SearchItem from './SearchItem';
import { Box } from '@mui/system';

const SearchBarComponent = () => {
     const [search, setSearch] = useState('');
     const [musics, setMusics] = useState([]);
     const [playlists, setPlaylists] = useState([]);
     const musicsAndPlaylists = [...musics, ...playlists];
     const [items, setItems] = useState([]);

     useEffect(() => {
          fetch('./musics.json')
               .then(res => res.json())
               .then(data => setMusics(data));
     }, []);

     useEffect(() => {
          fetch('./playlists.json')
               .then(res => res.json())
               .then(data => setPlaylists(data));
     }, []);

     const requestSearch = (searchedValue) => {          
          const filteredItems = musicsAndPlaylists.filter((item) => {
               return item.name.toLowerCase().includes(searchedValue.toLowerCase());            
          });

          setItems(filteredItems);
     };

     const cancelSearch = () => {
          setSearch("");
          requestSearch(search);
          window.location.reload();
     };

     return (
          <Grid container sx={{ mt: { xs: 16, md: 20 } , display: 'flex', justifyContent: 'center' }}>
               <Grid item xs={10} sm={9} md={7} sx={{ mt: { md: 2 }, mb: 5 }}>
                    <SearchBar
                         value={search}
                         onChange={(searchedValue) => requestSearch(searchedValue)}
                         onCancelSearch={() => cancelSearch()}
                         placeholder="Search Music..."
                         style={{ borderRadius: 10, backgroundColor: '#E7EAF4' }}
                         autoFocus
                    />
               </Grid> 
               <Container>
                    <Grid container spacing={2} column={3} sx={{ mt: 1 }}>
                         {
                              items.map((item) => <SearchItem 
                                   key={item.id}
                                   item={item}
                              />)
                         } 
                    </Grid>
                    {items.length > 1 && <Toolbar />}
               </Container>
          </Grid>
     );
};

export default SearchBarComponent;