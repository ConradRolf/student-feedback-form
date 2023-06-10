import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from 'axios';
// importing the tools we need for the component

// creating the function that will run within the component/app
function Review() {

    // creating variable for us to use in the component
    const history = useHistory();

    // creating variables to use from the store
    const feeling = useSelector((store) => store.feeling);
    const understanding = useSelector((store) => store.understanding);
    const support = useSelector((store) => store.support);
    const comments = useSelector((store) => store.comments);

    // creating a function to POST the data from the different stores into the database
    const storeReview = () => {
        axios.post('/review', { feeling, understanding, support, comments })
            .then(response => {
                history.push('/ThankYou')
            }).catch(error => {
                console.log('Error posting review', error)
            })
    }

    // creating the material for the DoM, and the input field to extract our value from
    return (
        <div>
            <h3>
                Your feedback for the day:
            </h3>
            <p>
                Feelings: {feeling}
            </p>
            <p>
                Understanding: {understanding}
            </p>
            <p>
                Support: {support}
            </p>
            <p>
                Comments: {comments}
            </p>
            <button onClick={storeReview}>
                Submit
            </button>
        </div>
    )
}

// exporting to the app
export default Review