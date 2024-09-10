import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area={'nav'} bg={'coral'}>Nav</GridItem>
      {/* only displayed on large screen aside */}
      <Show above='lg'>
        <GridItem area={'aside'} bg={'gold'}>Aside</GridItem>
      </Show>
      <GridItem area={'main'} bg={'dodgerblue'}>Main</GridItem>
    </Grid>
  );
}

export default App;
