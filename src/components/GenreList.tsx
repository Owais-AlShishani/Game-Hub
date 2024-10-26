import { Spinner } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';

const GenreList = () => {
    const { data, isLoading } = useGenres();

    if (isLoading) return <Spinner />;

    return (
        <ul>
            {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
    )
}

export default GenreList