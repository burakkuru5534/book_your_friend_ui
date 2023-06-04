import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data,setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => { 
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'token': localStorage.getItem('token')
            },
            method: 'GET',
        })
        .then(res => {
            if (!res.ok) {
                throw Error('could not get the data for that resource')
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if (err.name === 'AbortError'){
                console.log('fetch aborted');

            }else {
                setError(err.message);
                setIsPending(false);
            }
            
        });
        }, 1000);
    },[url]);

    return { data, isPending, error};
}

export default useFetch;