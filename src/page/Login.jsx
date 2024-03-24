import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "../components/TextField";
import StyledButton from "../components/Button";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const weather = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const myJson = await response.json();
    console.log(myJson)
  }

  useEffect(() => {
    try {
      weather();
    } catch (error) {
      console.log('error', error)
    }
  }, []);

  const handleSubmit = () => {
    if (email !== '' && password !== '') {
      if (!emailError && !passwordError) {
        dispatch({
          type: 'SET_USERS',
          payload: [{
            email: email,
            password: password
          }]
        })
        navigate("/loading");
      }
    }
  };
  const handleSignUp = () => {
    navigate("/signup");
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  useEffect(() => {
    if (email === "") {
      setEmailError(false);
    } else {
      if (emailRegex.test(email)) {
        setEmailError(false); // Set emailError to false if the email matches the regex pattern
      } else {
        setEmailError(true); // Set emailError to true if the email is invalid
      }
    }
  }, [email, emailRegex]);

  useEffect(() => {
    if (password === "") {
      setPasswordError(false); // Reset passwordError when the password field is empty
    } else {
      if (password.length > 10) {
        setPasswordError(false); // Set passwordError to false if the password length is greater than 10
      } else {
        setPasswordError(true); // Set passwordError to true if the password length is 10 or less
      }
    }
  }, [password]);

  return (
    <div className="flex justify-center h-screen items-center bg-gray-200 dark:bg-gray-900">
      <div className=" flex justify-center items-center flex-col sm:w-[80%] lg:w-[24%] py-8 px-4 gap-6 bg-white border border-gray-200 rounded-3xl	 shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-2xl font-bold cursor-pointer resize justify-center  text-gray-900 dark:text-white">
          Login
        </h1>
        <div className="w-[80%]">
          <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} error={emailError ? "Invalid Email" : null} />
          <TextField label="Password" value={password} onChange={(e) => setPassword(e.target.value)} error={passwordError ? "Invalid Password" : null} />
        </div>
        <div className="flex items-center justify-center gap-5">
          <StyledButton label="Sign in" onClick={handleSubmit} />
          <Button onClick={handleSignUp} variant="text" size="small" sx={{ textDecoration: 'none', textTransform: 'none' }}>Create Account</Button>
        </div>
      </div>
    </div>
  );
}
