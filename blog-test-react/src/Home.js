import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    // const [blogs, setBlogs] = useState([
    //     { title: "New Website 0", body: "Lorem ipsum...", author: "Author 1", id: 1 },
    //     { title: "New Website 1", body: "Lorem ipsum...", author: "Author 2", id: 2 },
    //     { title: "New Website 2", body: "Lorem ipsum...", author: "Author 1", id: 3 },
    //     { title: "New Website 3", body: "Lorem ipsum...", author: "Author 1", id: 4 },
    //     { title: "New Website 4", body: "Lorem ipsum...", author: "Author 5", id: 5 }
    // ]);

    const [blogs, setBlogs] = useState("");

    const [name, setName] = useState("Ioohn");

    // const deleteHandler = (id) => {
    //     const restblogs = blogs.filter((blog) => blog.id !== id);

    //     setBlogs(restblogs);
    // }

    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then((response) => {
                response.json()
                    .then(data => {
                        setBlogs(data);
                    })
            })
    });

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" /**deleteHandler={deleteHandler}**/ />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Lori")} title="Books By Author 1" />}
            {/**<button onClick={() => setName("Carter")}>Click me</button>**/}
        </div>
    );
}

export default Home;