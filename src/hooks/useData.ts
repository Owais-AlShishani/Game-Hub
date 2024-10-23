import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {
    id: number;
    name: string;
}

interface FetchResponse<T> {
    count: number,
    results: T[]
}

const useData = <T>(endpoint: string) => {

    const [data, setData] = useState<T[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);

        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
            .then(res => {
                setData(res.data.results);
                setLoading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err);
                setLoading(false);
            })
    }, [])
    return { data, isLoading, error }
}
export default useData;
