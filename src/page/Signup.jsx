import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "../components/TextField";
import { Button } from "@mui/material";
import Slide from '@mui/material/Slide';
import Select from "../components/Select";
import { useDispatch, useSelector } from "react-redux";
import StyledButton from "../components/Button";

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = () => {
        dispatch({
            type: 'ADD_USER',
            payload: [{
                firstName: firstName,
                lastName: lastName
            }]
        })
        console.log("Successfully added user!")
        console.log(users)
    }

    return (
        <div className="flex justify-center h-[100vh] items-center bg-gray-200 dark:bg-gray-900">
            <div className=" flex justify-center items-center flex-col sm:w-[80%] lg:w-[24%] py-8 px-4 gap-6 bg-white border border-gray-200 rounded-3xl	 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <h1 className="text-2xl font-bold resize justify-center  text-gray-900 dark:text-white">
                    Sign Up
                </h1>
                <div className="w-[80%]">
                    <TextField label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <TextField label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <Select label="Location" />
                </div>
                <div className="flex items-center justify-center gap-5">
                    <StyledButton label="Sign up" onClick={handleSubmit} />
                    <Button onClick={() => { navigate(-1) }} variant="text" size="small" sx={{ textDecoration: 'none', textTransform: 'none' }}>Cancel</Button>
                </div>
            </div>
        </div>
    )
}

export default Signup

