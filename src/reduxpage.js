import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function ReduxPage() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
    });
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    console.log("users", users);

    const handleSubmit = () => {
        dispatch({
            type: "SET_USERS",
            payload: [{
                firstName: 'Andrew',
                lastName: 'Malaiba'
            }, {
                firstName: 'Andrew',
                lastName: 'Malaiba'
            }, {
                firstName: 'Andrew',
                lastName: 'Malaiba'
            }, {
                firstName: 'Andrew',
                lastName: 'Malaiba'
            }],
        });
    }

    return (
        <div>
            <p>ReduxPage</p>
            <form>
                <div>
                    <input className="border" placeholder="First name" name="firstName" />
                </div>
                <div>
                    <input className="border" placeholder="Last name" name="lastName" />
                </div>
                <div>
                    <button type="submit" className="border shadow-md" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ReduxPage;
