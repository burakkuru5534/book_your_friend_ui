import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {

    const [data,setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => { 
            axios.get(url,{
                headers: {
                   Authorization : `Bearer ${localStorage.getItem("token")}`
                   }
              }).then((response) => {
                setData(response.data);
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