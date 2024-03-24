import React, { Component, useEffect } from "react";
import Button from "@mui/material/Button";
import { Box, Stack, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export default function Dashboard(props) {
  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    console.log(params);
    console.log(location);
  }, []);
  console.log(params);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col gap-6 justify-center h-[100vh] items-center light:bg-gray-200 dark:bg-gray-900">
      {/* <div className="sm:w-[80%] lg:w-[24%]  p-8 grid gap-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"> */}
      <h1 className="text-6xl font-bold resize justify-center  text-gray-900 dark:text-white">
        Welcome to the dashboard!
      </h1>
      <button
        onClick={handleBack}
        class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
      >
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Go Back
        </span>
      </button>
      {/* <button >Go back</button> */}
      {/* </div> */}
    </div>
  );
}
