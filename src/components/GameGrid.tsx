import { SimpleGrid, Text } from '@chakra-ui/react';
import useGame from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';

interface Props {
    gameQuery: GameQuery
    // selectedGenre: Genre | null;
    // selectedPlatform: Platform | null;
}

const GameGrid = ({ gameQuery }: Props) => {

    const { data, error, isLoading } = useGame(gameQuery);
    const skeletons = Array.from({ length: 35 }, (_, index) => index + 1);

    if (error) return <Text>{error}</Text>;

    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={10} spacing={6}>
            {isLoading && skeletons.map(skeleton =>
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton />
                </GameCardContainer>)}

            {data.map((game) => (
                <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                </GameCardContainer>
            ))}
        </SimpleGrid>
    )
}

export default GameGrid