import { useHistory } from "react-router-dom";

// creating a function for the home route/page
function Home(){

    // creating this const allows us to use the useHistory tool
    const history = useHistory();

    // creating a click handler to move us to the next page
    const handleClick = () => {
        history.push('/Feelings')
    }

    // creating the items to be rendered to the dom
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

// exporting to the app
export default Home