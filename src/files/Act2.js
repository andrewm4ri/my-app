// import logo from './logo.svg';
// import './App.css';
// import React, {Component, useEffect} from 'react';
// import Button from '@mui/material/Button';
// import { Box, Stack, TextField } from '@mui/material';
// import { useState } from 'react';
// import Grid from '@mui/material/Grid';
// import Login from './pages/Login';
// import Loading from './pages/Loading';
// import Dashboard from './pages/Dashboard';
// function App(){
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setLoading] =useState(false);
//   const [page, setPage] =useState('login');
  
// const handleSubmit =()=>{
// setLoading(true)
// }

// useEffect(()=>{
//   if(isLoading){
//     setTimeout(()=>{
//       setLoading(false)
//       setPage('dashboard')
//     }, 5000)
//   }
// },[isLoading])


// // const [count, setCount]=useState(0)
// // useEffect(()=>{
// //   setTimeout(()=>{
// //     setCount(prevState => prevState+1)
// // console.log(count)
// //   }, 1000)
// // }, [count])

//   return(
//     <Box sx={{backgroundColor:"fafafa", height:'100%', width:'100%'}}>
//  <Box sx={{display: 'flex', alignItems:'center', justifyContent:'center', mt:'160px'}}>
//       { !isLoading && page==='login' &&
//       <Box sx={{width:'400px', backgroundColor:'#fafafa', p:'24px', borderRadius:'24px', boxShadow:2}}>
//       <Login handleSubmit={()=>{
//         setLoading(true)}} email={email} setEmail={setEmail}></Login>
//       </Box>
//       }
//       {
//         isLoading && page!=='dashboard' &&
//        <Loading/>
//       }
//       {
//     !isLoading && page==='dashboard' &&
//     <Dashboard onClick={()=>setPage('login')} email={email}/>
//     }

//     </Box>
//     </Box>
   
//   )
// }


// export default App;

// import React, {Component, useEffect} from 'react';
// import Button from '@mui/material/Button';
// import { Box, Stack, TextField } from '@mui/material';
// import Card from '@mui/material/Card';
// import { useState } from 'react';

// export default function Login(props){

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');


//     return(
//  <Box sx={{display:'flex', flexDirection:'column', width:'auto', p:'32px', gap:'24px', borderRadius:'24px'}}>
//     {/* <h2>Sign in</h2> */}
//  <TextField id="standard-basic" label="Email" variant="outlined"  value={props.email} onChange={(e)=>{ props.setEmail(e.target.value) }}/> 
//  <TextField id="standard-basic" label="Password" type='password' variant="outlined"  value={password} onChange={(e)=>{ setPassword(e.target.value) }}/> 
//  <Button variant='contained' onClick={props.handleSubmit}>Log in</Button>
//  </Box>
// )
// }

// import React, {Component, useEffect} from 'react';
// import { Box, Stack, TextField, Typography } from '@mui/material';
// import { useState } from 'react';
// import CircularProgress from '@mui/material/CircularProgress';



// export default function Loading(props){

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');


//     return(
//         <Box sx={{ display: 'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', mt:'80px'}}>
//         <CircularProgress />
//         <h4>Loading...</h4>
//       </Box>
// )
// }

// import React, {Component, useEffect} from 'react';
// import Button from '@mui/material/Button';
// import { Box, Stack, TextField } from '@mui/material';
// import Card from '@mui/material/Card';
// import { useState } from 'react';

// export default function Dashboard(props){

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');


//     return(
//         <Box sx={{ display: 'flex' , flexDirection:'column',}}>
//         <h1> Hello, {props.email}!</h1>
//         <Button variant='text' onClick={props.onClick}>Logout</Button>
//       </Box>
// )
// }