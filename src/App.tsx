import './App.css';
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      {/* only displayed on large screen aside */}
      <Show above='lg'>
        <GridItem area={'aside'}>
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre} />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={(platform) => setSelectedPlatform(platform)} />
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
