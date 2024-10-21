import useGenre from '../hooks/useGenres'

const GenreList = () => {
    const { genres, loading, error } = useGenre();
    return (
        <ul>
            {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
    )
}

export default GenreList