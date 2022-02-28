import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "New Website 0", body: "Lorem ipsum...", author: "Author 1", id: 1 },
        { title: "New Website 1", body: "Lorem ipsum...", author: "Author 2", id: 2 },
        { title: "New Website 2", body: "Lorem ipsum...", author: "Author 3", id: 3 },
        { title: "New Website 3", body: "Lorem ipsum...", author: "Author 4", id: 4 },
        { title: "New Website 4", body: "Lorem ipsum...", author: "Author 5", id: 5 }
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs}></BlogList>
        </div>
    );
}

export default Home;