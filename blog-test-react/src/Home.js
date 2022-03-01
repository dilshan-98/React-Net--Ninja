import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "New Website 0", body: "Lorem ipsum...", author: "Author 1", id: 1 },
        { title: "New Website 1", body: "Lorem ipsum...", author: "Author 2", id: 2 },
        { title: "New Website 2", body: "Lorem ipsum...", author: "Author 1", id: 3 },
        { title: "New Website 3", body: "Lorem ipsum...", author: "Author 1", id: 4 },
        { title: "New Website 4", body: "Lorem ipsum...", author: "Author 5", id: 5 }
    ]);

    const [name, setName] = useState("Ioohn");

    const deleteHandler = (id) => {
        const restblogs = blogs.filter((blog) => blog.id !== id);

        setBlogs(restblogs);
    }

    useEffect(() => {
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" deleteHandler={deleteHandler}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === "Author 1")} title="Books By Author 1"/>
            <button onClick={() => setName("Carter")}>Click me</button>
        </div>
    );
}

export default Home;