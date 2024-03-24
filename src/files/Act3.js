// import logo from "./logo.svg";
// import "./App.css";
// import React, { Component, useEffect } from "react";
// import Button from "@mui/material/Button";
// import { Box, Stack, TextField, collapseClasses } from "@mui/material";
// import { useState } from "react";
// import Grid from "@mui/material/Grid";
// import Login from "./pages/Login";
// import Loading from "./pages/Loading";
// import Dashboard from "./pages/Dashboard";

// // function App() {
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// //   const [name, setName] = useState("");
// //   const [age, setAge] = useState(0);

// //   const firstName = "10 chars";
// //   // const age = "number";
// //   const password = "Admin123!";
// //   const [email, setEmail] = useState("");
// //   // const [password, setPassword] = useState("");
// //   const [isLoading, setLoading] = useState(false);
// //   const [page, setPage] = useState("login");
// //   const [error, setError] = useState("");

//   useEffect(() => {
//     if (email !== "") {
//       if (emailRegex.test(email)) {
//         setError("Invalid Email");
//       }
//     }
//   }, [email]);

// //   const handleSubmit = () => {
// //     setLoading(true);
// //   };

// //   useEffect(() => {
// //     if (isLoading) {
// //       setTimeout(() => {
// //         setLoading(false);
// //         setPage("dashboard");
// //       }, 5000);
// //     }
// //   }, [isLoading]);

// //   // const [count, setCount]=useState(0)
// //   // useEffect(()=>{
// //   //   setTimeout(()=>{
// //   //     setCount(prevState => prevState+1)
// //   // console.log(count)
// //   //   }, 1000)
// //   // }, [count])

// //   useEffect(()=>{

// //   }, [name])
// //   return (
// //     <Box sx={{ backgroundColor: "fafafa", height: "100%", width: "100%" }}>
// //       <Box
// //         sx={{
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           mt: "160px",
// //         }}
// //       >
// //         {!isLoading && page === "login" && (
// //           <Box
// //             sx={{
// //               width: "400px",
// //               backgroundColor: "#fafafa",
// //               p: "24px",
// //               borderRadius: "24px",
// //               boxShadow: 2,
// //             }}
// //           >
// //             <Login
// //               handleSubmit={handleSubmit}
// //               email={email}
// //               setEmail={setEmail}
// //               error={error}
// //             ></Login>
// //           </Box>
// //         )}
// //         {isLoading && page !== "dashboard" && <Loading />}
// //         {!isLoading && page === "dashboard" && (
// //           <Dashboard onClick={() => setPage("login")} email={email} />
// //         )}
// //       </Box>
// //     </Box>
// //   );
// // }

// function App() {
//   const [fullName, setFullName] = useState("");
//   const [age, setAge] = useState(0);
//   const [errorName, setErrorName] = useState("");
//   const [ageError, setAgeError] = useState("");
//   const pattern = "/[A-Za-z]/";

//   // const fullName = "10 chars & no characters or numbers";
//   // const age = "No alpha";
//   var regname = new RegExp("^[A-Za-z]*$");
//   useEffect(() => {
//     if (!regname.test(fullName) || fullName.length >= 10) {
//       console.log(regname.test(fullName));
//       setErrorName("Invalid Name");
//     } else {
//       console.log(regname.test(fullName));
//       setErrorName("");
//     }
//   }, [fullName]);

//   var reg = new RegExp("^[0-9]*$");
//   useEffect(() => {
//     // condition for age
//     if (!reg.test(age) || age > 100) {
//       console.log(reg.test(age));
//       setAgeError("Invalid Age");
//     } else {
//       setAgeError("");
//     }
//   }, [age]);

//   const handleChange = (e) => {
//     setFullName(e.target.value);
//   };
//   const handleAge = (e) => {
//     setAge(e.target.value);
//   };
//   // setAge(e.target.value)

//   return (
//     <Box
//       sx={{
//         boxShadow: 1,
//         ml: "160px",
//         p: "40px",
//         mt: "80px",
//         width: "400px",
//         borderRadius: "24px",
//         // textAlign: "center",
//       }}
//     >
//       <h2 style={{ marginTop: "24px", marginBottom: "40px" }}>Login</h2>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           width: "auto",
//           gap: "24px",
//         }}
//       >
//         <TextField
//           label="Full Name"
//           variant="outlined"
//           onChange={handleChange}
//           helperText={errorName && <p style={{ color: "red" }}>{errorName}</p>}
//         />
//         <TextField
//           // type="number"
//           label="Age"
//           variant="outlined"
//           onChange={handleAge}
//           helperText={ageError && <p style={{ color: "red" }}>{ageError}</p>}
//         />
//         <div>
//           <Button variant="contained">Sign in</Button>
//         </div>
//       </Box>
//     </Box>
//   );
// }

// export default App;
