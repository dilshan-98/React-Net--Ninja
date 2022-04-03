import useFetch from "./useFetch";

const Home = () => {
    // const [blogs, setBlogs] = useState([
    //     { title: "New Website 0", body: "Lorem ipsum...", author: "Author 1", id: 1 },
    //     { title: "New Website 1", body: "Lorem ipsum...", author: "Author 2", id: 2 },
    //     { title: "New Website 2", body: "Lorem ipsum...", author: "Author 1", id: 3 },
    //     { title: "New Website 3", body: "Lorem ipsum...", author: "Author 1", id: 4 },
    //     { title: "New Website 4", body: "Lorem ipsum...", author: "Author 5", id: 5 }
    // ])
    // return (
    //     <div className="home">
    //         <h2>All Blogs</h2>
    //         {blogs.map((blog) => (
    //             <div className="blog-preview">
    //                 <h2>{blog.title}</h2>
    //                 <p>{blog.body}</p>
    //             </div>
    //         ))}
    //     </div>
    // );

    const { isPending, error, blogs } = useFetch("http://localhost:5000/blogs");

    return (
        <div className="home">
            <h2>All Blogs</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && blogs.map((blog) => (
                <div className="blog-preview">
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;