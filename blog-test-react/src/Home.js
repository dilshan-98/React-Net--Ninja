import { useState} from "react";

const Home = () => {

    const [name, setName] = useState("Dinusha");


    const handleClick = () =>{
        setName("Dilshan");
    }

    const handleClickAgain = (name, e) =>{
        console.log("Hello "+name, e.target);
    }

    return(
        <div className="home">
            <h2>Home Page</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;