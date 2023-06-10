import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react"

function Feelings() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [feelings, setFeelings] = useState('')
    const allFeelings = useSelector((store) => store.feeling);

    const storeFeelings = () => {
        dispatch({
            type: "FEELINGS",
            payload: feelings
        });
        setFeelings('')
        console.log('Feelings today:', feelings)
        history.push('/Understanding')
    }

    return (
        <div>
            <h3>
                How're you feeling today on a scale of 1-10?
            </h3>
            <form>
                <input
                    required
                    type="number"
                    placeholder="1-10"
                    value={feelings}
                    onChange={(event) => setFeelings(event.target.value)}
                />
                <button onClick={storeFeelings}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Feelings