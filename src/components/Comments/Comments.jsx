import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react"

function Comments() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [comments, setComments] = useState('')
    const allComments = useSelector((store) => store.comments);

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

export default Comments