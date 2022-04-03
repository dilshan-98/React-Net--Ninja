import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
    const [blogs, setBlogs] = useState("");
    const [error, setError] = useState("");
    const [isPending, setIsPending] = useState(false);
    
    useEffect(() => {
        fetch(url)
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
            setError(error.message);
            setIsPending(false);
        })
    })

    return { isPending, error, blogs };
}

export default useFetch;