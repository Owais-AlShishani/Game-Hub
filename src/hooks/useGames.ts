import { GameQuery } from "../App";
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

const useGame = (gameQuery: GameQuery) =>
    useData<Game>('/games', {
        params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id
        }
    },
        [gameQuery])// dependencies lec:22-23

export default useGame;