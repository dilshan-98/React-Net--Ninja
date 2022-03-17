import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("James");
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author };

        setIsPending(true);

        fetch("http://localhost:5000/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            console.log("New Blog Added");
            //navigate(-1); to move to the previous page
            navigate("/");
        }).catch(error => {
            setError(error);
        })
    }

    return(
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Description: </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog Author: </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="James">James</option>
                    <option value="Lori">Lori</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled={true}>Adding Blog...</button>}
            </form>
        </div>
    )
}

export default Create;