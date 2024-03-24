import React, { Component, useEffect } from "react";
import Button from "@mui/material/Button";
import { Box, Stack, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import { useState } from "react";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   useEffect(() => {}, [props.email]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "auto",
        p: "32px",
        gap: "24px",
        borderRadius: "24px",
        textAlign: "center",
      }}
    >
      <h1>Sign in</h1>
      <TextField
        id="standard-basic"
        label="Email"
        variant="outlined"
        value={props.email}
        onChange={(e) => {
          props.setEmail(e.target.value);
        }}
        helperText={
          props.error && <p style={{ color: "red" }}>{props.error}</p>
        }
      />
      <TextField
        id="standard-basic"
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button variant="contained" onClick={props.handleSubmit}>
        Log in
      </Button>
    </Box>
  );
}
