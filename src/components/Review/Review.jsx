import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from 'axios';

function Review() {

    const history = useHistory();

    const feeling = useSelector((store) => store.feeling);
    const understanding = useSelector((store) => store.understanding);
    const support = useSelector((store) => store.support);
    const comments = useSelector((store) => store.comments);

    const storeReview = () => {
        axios.post('/review', { feeling, understanding, support, comments })
            .then(response => {
                history.push('/ThankYou')
            }).catch(error => {
                console.log('Error posting review', error)
            })
    }

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

export default Review