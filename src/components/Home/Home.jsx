import { useHistory } from "react-router-dom";

function Home(){

    const history = useHistory();

    const handleClick = () => {
        history.push('/Feelings')
    }

    return(
        <>
        <h3>
            Welcome to the feedback App!
        </h3>
        <p>
            Would you like to leave some feedback?
            <br></br>
            <br></br>
            <button onClick={handleClick}>Begin</button>
        </p>
        </>
    )
}

export default Home