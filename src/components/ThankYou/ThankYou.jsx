import { useHistory } from "react-router-dom";
// importing the tools we need for the component

// creating the function that will run within the component/app
function ThankYou() {

    // creating variable for us to use in the component
    const history = useHistory();

    // takes us back to the home page to start another review
    const startOver = () => {
        history.push('/')
    }

    // creating the material for the DoM, and the button to start another review
    return (
        <div>
            <h3>Thank you for submitting your feedback!</h3>
            <h3>Your responses have been saved.</h3>
            <p>Leave more feedback? <button onClick={startOver}>Start Over</button></p>
        </div>
    )
}

// exporting to the app
export default ThankYou