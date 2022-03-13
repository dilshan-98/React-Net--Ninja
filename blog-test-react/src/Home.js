import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    // const [blogs, setBlogs] = useState([
    //     { title: "New Website 0", body: "Lorem ipsum...", author: "Author 1", id: 1 },
    //     { title: "New Website 1", body: "Lorem ipsum...", author: "Author 2", id: 2 },
    //     { title: "New Website 2", body: "Lorem ipsum...", author: "Author 1", id: 3 },
    //     { title: "New Website 3", body: "Lorem ipsum...", author: "Author 1", id: 4 },
    //     { title: "New Website 4", body: "Lorem ipsum...", author: "Author 5", id: 5 }
    // ]);

    // const [blogs, setBlogs] = useState("");

    // const [name, setName] = useState("Ioohn");
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState("");

    // const deleteHandler = (id) => {
    //     const restblogs = blogs.filter((blog) => blog.id !== id);

    //     setBlogs(restblogs);
    // }

    // useEffect(() => {
    //     fetch("http://localhost:5000/blogs")
    //         .then((response) => {
    //             if(!response.ok){
    //                 throw Error("Cannot fetch data");
    //             }
    //             response.json()
    //                 .then(data => {
    //                     setBlogs(data);
    //                     setIsPending(false);
    //                     setError("");
    //                 })
    //         })
    //         .catch(error => {
    //             setIsPending(false);
    //             setError(error.message);
    //         })
    // });

    const { data: blogs, isPending, error} = useFetch("http://localhost:5000/blogs");

    return (
        <div className="home">
            { error && <div>{error}</div> }
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" /**deleteHandler={deleteHandler}**/ />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Lori")} title="Books By Author 1" />}
            {/**<button onClick={() => setName("Carter")}>Click me</button>**/}
        </div>
    );
}

export default Home;