import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react"

function Understanding() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [understanding, setUnderstanding] = useState('')
    const allUnderstanding = useSelector((store) => store.understanding);

    const storeUnderstanding = () => {
        dispatch({
            type: "UNDERSTANDING",
            payload: understanding
        });
        setUnderstanding('')
        console.log('Understanding today:', understanding)
        history.push('/Support')
    }

    return (
        <div>
            <h3>
                How well did you understand the concepts today on a scale of 1-10?
            </h3>
            <form>
                <input
                    required
                    type="number"
                    placeholder="1-10"
                    value={understanding}
                    onChange={(event) => setUnderstanding(event.target.value)}
                />
                <button onClick={storeUnderstanding}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Understanding