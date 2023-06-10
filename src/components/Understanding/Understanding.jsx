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
        if (understanding === '') {
            alert('Why did you leave it empty? Put in a value 1-10 😡')
        } else if (understanding === '42') {
            alert('Yes, that is the answer to life, the universe, and everything.... But I need a value 1-10 🙃')
            setUnderstanding('')
        } else if (understanding > 10) {
            alert('I said 1-10 buddy')
            setUnderstanding('')
        } else if (understanding < 1) {
            alert('I said 1-10 buddy')
            setUnderstanding('')
        } else if (understanding < 5) {
            alert('You can always ask classmates and instructors questions to further your learning, or request additional help 🙂')
            dispatch({
                type: "UNDERSTANDING",
                payload: understanding
            });
            setUnderstanding('')
            console.log('Understanding today:', understanding)
            history.push('/Support')
        } else {
            dispatch({
                type: "UNDERSTANDING",
                payload: understanding
            });
            setUnderstanding('')
            console.log('Understanding today:', understanding)
            history.push('/Support')
        }
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