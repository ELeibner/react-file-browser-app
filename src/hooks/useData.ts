import { useEffect, useState } from 'react';
import { getData } from '../api';

export const initData = {
    id: 0,
    name: '',
    subfolders: [],
    files: []
};

export function useData(id: number) {
    const [data, setData] = useState(initData);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData(id)
            .then((response) => {
                setData(response.data);
                setError(null);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.response);
            });
    }, [id]);

    return { data, error, isLoading };
}
