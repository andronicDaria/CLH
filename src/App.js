import './App.css';
import React from 'react';
import CookiesForm from './components/cookies';
import StorageLocalForm from './components/localStorage';
import HistoryApi from './components/historyApi';
import PokemonSearch from './components/rxJS';
import { Grid } from '@mui/material';
import AdditionalCookies from './components/additionalCookies';

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <PokemonSearch />
        </Grid>
        <Grid item xs={3}>
          <CookiesForm />
        </Grid>
        <Grid item xs={3}>
          <StorageLocalForm />
        </Grid>
        <Grid item xs={3}>
          <HistoryApi />
        </Grid>
      </Grid>
      <AdditionalCookies />
    </div>
  );
}

export default App;
