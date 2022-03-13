import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState("");
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw Error("Cannot fetch data");
                    }
                    response.json()
                        .then(data => {
                            setData(data);
                            setIsPending(false);
                            setError("");
                        })
                })
                .catch(error => {
                    setIsPending(false);
                    setError(error.message);
                })
        }, 1000);
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;