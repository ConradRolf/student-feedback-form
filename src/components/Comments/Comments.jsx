import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react"
// importing the tools we need for the component

// creating the function that will run within the component/app
function Comments() {

    // creating variable for us to use in the component
    const history = useHistory();
    const dispatch = useDispatch();

    // creating a local state to track the variable/value while we are on the page
    const [comments, setComments] = useState('')
    const allComments = useSelector((store) => store.comments);

    // creating a function to dispatch inputs to the reducer and reset the input fields/local state
    // if the input is valid we will be taken to the next section
    const storeComments = () => {
        dispatch({
            type: "COMMENTS",
            payload: comments
        });
        setComments('')
        console.log('Comments today:', comments)
        history.push('/Review')
    }

    // creating the material for the DoM, and the input field to extract our value from
    return (
        <div>
            <h3>
                Any comments for the day?
            </h3>
            <form>
                <input
                    type="text"
                    placeholder="Comments"
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                />
                <button onClick={storeComments}>
                    Submit
                </button>
            </form>
        </div>
    )
}

// exporting to the app
export default Comments