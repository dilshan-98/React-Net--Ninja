import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const { blogs, isPending, error} = useFetch("http://localhost:5000/blogs/"+id);

    const deleteHandler = () => {
        
    }

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && 
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={(e) => deleteHandler()}>Delete</button>
                </article>    
            }
        </div>
    );
}

export default BlogDetails;