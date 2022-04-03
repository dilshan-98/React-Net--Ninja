import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const { blogs, isPending, error} = useFetch("http://localhost:5000/blogs/"+id);
    
    const navigate = useNavigate();

    const deleteHandler = () => {
        fetch("http://localhost:5000/blogs/"+id, {
            method: "DELETE"
        })
        .then(() => {
            console.log("Blog Deleted Successfully");
            navigate("/");
        })
        .catch(error => console.log(error.message));
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
                    <button onClick={deleteHandler}>Delete</button>
                </article>    
            }
        </div>
    );
}

export default BlogDetails;