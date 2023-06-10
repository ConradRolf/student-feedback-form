import { useHistory } from "react-router-dom";

function ThankYou() {

    const history = useHistory();

    const startOver = () => {
        history.push('/')
    }

    return (
        <div>
            <h3>Thank you for submitting your feedback!</h3>
            <h3>Your responses have been saved.</h3>
            <p>Leave more feedback? <button onClick={startOver}>Start Over</button></p>
        </div>
    )
}

export default ThankYou