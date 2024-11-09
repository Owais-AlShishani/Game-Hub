import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string
}

export interface Game {
    id: number,
    name: string
    background_image: string,
    parent_platforms: { platform: Platform }[], // Array of platform objects
    metacritic: number
}

const useGame = (selectedGenre: Genre | null, selectedPlatform: Platform | null) =>
    useData<Game>('/games', {
        params: {
            genres: selectedGenre?.id,
            platforms: selectedPlatform?.id
        }
    },
        [selectedGenre?.id, selectedPlatform?.id])// dependencies lec:22-23

export default useGame;