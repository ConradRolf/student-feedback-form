import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react"
// importing the tools we will need for the component

// creating the function to run in this component
function Feelings() {

    // creating variables that will allow us to use some of the tools we brought in
    const history = useHistory();
    const dispatch = useDispatch();

    // creating a local state to track the variable/value while we are on the page
    const [feelings, setFeelings] = useState('')
    const allFeelings = useSelector((store) => store.feeling);

    // creating a function to validate inputs and dispatch them to the reducer and reset the input fields/local state
    // if the input is valid we will be taken to the next section
    const storeFeelings = () => {
        if (feelings === '') {
            alert('Why did you leave it empty? Put in a value 1-10 😡')
        } else if (feelings === '42') {
            alert('Yes, that is the answer to life, the universe, and everything.... But I need a value 1-10 🙃')
            setFeelings('')
        } else if (feelings > 10) {
            alert('I said 1-10 buddy')
            setFeelings('')
        } else if (feelings < 1) {
            alert('I said 1-10 buddy')
            setFeelings('')
        } else if (feelings < 5) {
            alert('You can always request a meeting with a staff member to talk about things in your life, we are always happy to help in any way that we can 🙂')
            dispatch({
                type: "FEELINGS",
                payload: feelings
            });
            setFeelings('')
            console.log('Feelings today:', feelings)
            history.push('/Understanding')
        } else {
            dispatch({
                type: "FEELINGS",
                payload: feelings
            });
            setFeelings('')
            console.log('Feelings today:', feelings)
            history.push('/Understanding')
        }
    }

    // creating the material for the DoM, and the input field to extract our value from
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

// exporting to the app
export default Feelings