import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react"
// importing the tools we need for the component

// creating the function that will run within the component/app
function Support() {

    // creating variable for us to use in the component
    const history = useHistory();
    const dispatch = useDispatch();

    // creating a local state to track the value of understanding
    const [support, setSupport] = useState('')
    const allSupport = useSelector((store) => store.support);

    // creating a function to validate inputs and dispatch them to the reducer and reset the input fields/local state
    // if the input is valid we will be taken to the next section
    const storeSupport = () => {
        if (support === '') {
            alert('Why did you leave it empty? Put in a value 1-10 😡')
        } else if (support === '42') {
            alert('Yes, that is the answer to life, the universe, and everything.... But I need a value 1-10 🙃')
            setSupport('')
        } else if (support > 10) {
            alert('I said 1-10 buddy')
            setSupport('')
        } else if (support < 1) {
            alert('I said 1-10 buddy')
            setSupport('')
        } else if (support < 5) {
            alert('You can always request a meeting with a staff member to discuss your needs to help improve your experience 🙂')
            dispatch({
                type: "SUPPORT",
                payload: support
            });
            setSupport('')
            console.log('Support today:', support)
            history.push('/Comments')
        } else {
            dispatch({
                type: "SUPPORT",
                payload: support
            });
            setSupport('')
            console.log('Support today:', support)
            history.push('/Comments')
        }
    }

    // creating the material for the DoM, and the input field to extract our value from
    return (
        <div>
            <h3>
                How well were you supported today on a scale of 1-10?
            </h3>
            <form>
                <input
                    required
                    type="number"
                    placeholder="1-10"
                    value={support}
                    onChange={(event) => setSupport(event.target.value)}
                />
                <button onClick={storeSupport}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Support