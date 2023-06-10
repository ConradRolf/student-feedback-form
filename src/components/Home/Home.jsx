import { useHistory } from "react-router-dom";

function Home(){

    const history = useHistory();

    const handleClick = () => {
        history.push('/Feelings')
    }

    return(
        <>
        <h1>
            Welcome to the feedback App!
        </h1>
        <p>
            Would you like to leave some feedback?
            <button onClick={handleClick}>Begin</button>
        </p>
        </>
    )
}

export default Home