import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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

interface FetchGameResponse {
    count: number,
    results: Game[]
}

const useGame = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        apiClient
            .get<FetchGameResponse>('/games', { signal: controller.signal })
            .then(res => setGames(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            });

        return () => controller.abort();
    }, [])

    return { games, error };// return object so other compnents can you use it 
}

export default useGame;