import React, {  useState } from 'react';
import { Container, Grid } from '@mui/material';
import SearchBar from "material-ui-search-bar";
import SearchItem from './SearchItem';
import musics from '../../assets/database/musics';
import playlists from '../../assets/database/playlists';

const SearchBarComponent = () => {
     const [search, setSearch] = useState('');
     const [items, setItems] = useState([]);

     const requestSearch = (searchedValue) => {          
          const filteredByMusic = musics.filter((item) => {
               const name = item.name.toLowerCase().charAt(0).includes(searchedValue.toLowerCase());
               const singer = item.singer.toLowerCase().includes(searchedValue.toLowerCase());
               const language = item.language.toLowerCase().includes(searchedValue.toLowerCase());

               return name || singer || language ;
          });
          const filteredByPlaylist = playlists.filter((item) => {
               return item.name.toLowerCase().charAt(0).includes(searchedValue.toLowerCase());
          });

          const filteredItems = [...filteredByMusic, ...filteredByPlaylist];

          setItems(filteredItems);
     };

     const cancelSearch = () => {
          setSearch("");
          requestSearch(search);
          window.location.reload();
     };

     return (
          <Grid container sx={{ mt: { xs: 16, md: 12 } , display: 'flex', justifyContent: 'center' }}>
               <Grid item xs={10} sm={9} md={7} sx={{ mt: { md: 2 }, mb: 5 }}>
                    <SearchBar
                         value={search}
                         onChange={(searchedValue) => requestSearch(searchedValue)}
                         onCancelSearch={() => cancelSearch()}
                         placeholder="Search Music or Playlist..."
                         style={{ borderRadius: 25, backgroundColor: '#E7EAF4', fontFamily: 'Macondo, cursive' }}
                         autoFocus
                         className='font-macondo'
                    />
               </Grid> 

               <Container>
                    <Grid container spacing={2} column={3}>                                        
                         {
                              items.map((item) => <SearchItem 
                                   key={item._id}
                                   item={item}
                              />)
                         }                                        
                    </Grid>
               </Container>
          </Grid>
     );
};

export default SearchBarComponent;
