import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react"

function Support() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [support, setSupport] = useState('')
    const allSupport = useSelector((store) => store.support);

    const storeSupport = () => {
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
                How're you feeling today?
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

export default Support