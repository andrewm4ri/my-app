import React from 'react'
import { useSelector, useDispatch } from 'react-redux';


const reduxPage = () => {

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    console.log(users);



    return (
        <div>

        </div>
    )
}
export default redux
