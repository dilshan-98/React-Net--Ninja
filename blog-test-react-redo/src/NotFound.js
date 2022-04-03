import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="">
            <h2>404</h2>
            <p>Page you tried to reach cannot be resolved</p>
            <Link to="/">Go back to homepage...</Link>
        </div>
    );
}

export default NotFound;