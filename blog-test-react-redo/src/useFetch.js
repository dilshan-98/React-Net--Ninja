import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
    const [blogs, setBlogs] = useState("");
    const [error, setError] = useState("");
    const [isPending, setIsPending] = useState(false);
    
    useEffect(() => {
        const abortController = new AbortController();

        fetch(url, {signal: abortController.signal})
        .then((response) => {
            if(!response.ok) {
                throw Error("Cannot fetch data!");
            }
            
            response.json().then((data) => {
                setBlogs(data);
                setIsPending(false);
                setError("");
            })
        })
        .catch(error => {
            if(error.name === "AbortError"){
                console.log("Fetch Aborted");
            }else{
               setError(error.message);
                setIsPending(false); 
            } 
        })

        return () => abortController.abort();
    },[url])

    return { isPending, error, blogs };
}

export default useFetch;