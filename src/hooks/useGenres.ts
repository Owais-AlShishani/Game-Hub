import { Axios, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenreResponse {
    count: number,
    results: Genre[]
}

const useGenre = () => {

    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);

        apiClient
            .get<FetchGenreResponse>('/genres', { signal: controller.signal })
            .then(res => {
                setGenres(res.data.results);
                setLoading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err);
                setLoading(false);
            })
    }, [])
    return { genres, loading, error }
}
export default useGenre;
