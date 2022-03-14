import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState("");
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const abortController = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
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
                    if (error.name === "AbortError") {
                        console.log("Fetch Aborted");
                    } else {
                        setIsPending(false);
                        setError(error.message);
                    }
                })
        }, 1000);

        return () => abortController.abort();

    }, [url]);

    return { data, isPending, error };
}

export default useFetch;