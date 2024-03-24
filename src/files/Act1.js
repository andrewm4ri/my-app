import logo from './logo.svg';
import './App.css';
import React, {Component, useEffect} from 'react';
import Button from '@mui/material/Button';
import { Box, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import Grid from '@mui/material/Grid';

function DisplayGreetings({ name}) {
return( 
<h1>{name }</h1>
)
}

class Model extends React.Component{
  render(){
   return(
    <>
     <h2>sample {this.props.name || ''}</h2>
    </>
   )
  }
 }

function App(){
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(null);
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [showState, setShowState] =useState(false)
const handleSubmit =()=>{
setShowState(true)
}
const handleClear =()=>{
  setShowState(false)
  setFirstName('')
  setLastName('')
  setMiddleName('')
  setPosition('')
  setCompany('')
  setAge(null)
  }
useEffect(()=>{
setShowState(null)
}, [firstName, middleName, age, lastName, company, position])


// const [count, setCount]=useState(0)
// useEffect(()=>{
//   setTimeout(()=>{
//     setCount(prevState => prevState+1)
// console.log(count)
//   }, 1000)
// }, [count])

  return(
    <div className='App'>
      <Grid container spacing={2}>
        <Grid item lg={6} xs={12} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Box sx={{width:'400px', display:'flex', justifyContent:'center', flexDirection:'column', p:'24px',
    border:'1px solid gray', borderRadius:'24px', mt:'24px', ml:'24px'}}>
      <Stack sx={{m:'16px', gap:'16px', maxWidth:'auto'}}>
        <TextField id="standard-basic" label="First Name" variant="outlined"  value={firstName} onChange={(e)=>{ setFirstName(e.target.value) }}/> 
        <TextField id="standard-basic" label="Middle Name" variant="outlined" value={middleName}  onChange={(e)=>{setMiddleName(e.target.value)}}/> 
        <TextField id="standard-basic" label="Last Name" variant="outlined" value={lastName} onChange={(e)=>{  setLastName(e.target.value)}} /> 
        <TextField id="standard-basic" label="Age" type='number' variant="outlined" value={age} onChange={(e)=>{ setAge(e.target.value)}} /> 
        <TextField id="standard-basic" label="Company" variant="outlined" value={company} onChange={(e)=>{ setCompany(e.target.value) }} /> 
        <TextField id="standard-basic" label="Position" variant="outlined" value={position} onChange={(e)=>{ setPosition(e.target.value) }} /> 
      </Stack>
      <Box sx={{display:'flex', gap:'20px', mx:'24px', mt:'16px'}}>
      <Button variant="contained" onClick={handleSubmit} sx={{width:'200px', }}>Submit</Button>
      <Button variant="outlined" onClick={handleClear} sx={{width:'200px', }}>Clear</Button>
      </Box>
      </Box>
        </Grid>
        <Grid item  lg={4} xs={12} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        {
     showState && 
     <Box sx={{backgroundColor:'#e3f2fd', p:'24px', width:"640px", mx:'24px', borderRadius:'24px'}}>
        <Stack spacing={1} sx={{mx:'24px', my:'24px'}}>
        <Box sx={{display:'flex', alignItems:'center', gap:'24px', height:'24px'}}><h4 style={{width:'180px', textAlign:'right',color:'#42a5f5'}}>Fullname:</h4><h2>{firstName} {middleName} {lastName}</h2></Box>
        <Box sx={{display:'flex', alignItems:'center', gap:'24px', height:'24px'}}><h4 style={{width:'180px',textAlign:'right',color:'#42a5f5'}}>Age:</h4><h2>{age}</h2></Box>
        <Box sx={{display:'flex', alignItems:'center', gap:'24px', height:'auto'}}><h4 style={{width:'180px',textAlign:'right',color:'#42a5f5'}}>Company:</h4><h2 style={{width:'400px', textAlign: 'left', alignItems:'center'}}>I am currently working at {company || '--'} with a {position || '--'} position.</h2></Box>
        </Stack>
     </Box>
     }
        </Grid>
      </Grid>
    </div>
  )
}


{/* <Box sx={{display:'flex', alignItems:'center', gap:'24px', height:'auto'}}><h4 style={{width:'180px',textAlign:'right',color:'#42a5f5'}}>Company:</h4><h2 style={{width:'400px', textAlign: 'left', alignItems:'center'}}>I am currently working at {company || '--'} with a {position || '--'} position.</h2></Box> */}


// class App extends Component {
//   constructor(props) {
//   super(props);
//   this.state = {
//   // count: 0, 
//   firstName: '',
//   middleName: '',
//   lastName: '',
//   age:0,
//   company:{
//       name:'',
//       position: ''
//   }};
//   }
//   handleClick = () => {
//     const updatedCount = this.state.count + 1;
//   this.setState({
//   count: updatedCount
//   });
//   }

//   handleUpdate =() =>{
//     this.setState({
//       name:'Ray'
//       });
//   }

//   handleClick1 = () => {
//     this.setState({
//     count: this.state.count - 1
//     });
//     }
//   render() {
//   return (
//   <div className='App'>
//   <h1>Count: {this.state.count}</h1>
//   <h1>Name: {this.state.name}</h1>

//   <Box>
//   <TextField id="standard-basic" label="First Name" variant="standard" /> 
//   <TextField id="standard-basic" label="Middle Name" variant="standard" /> 
//   <TextField id="standard-basic" label="Last Name" variant="standard" /> 
//    </Box>
// {/* <TextField></TextField> */}
//   <Stack direction="row" spacing={1} sx={{width:'100%', display:'flex', justifyContent:'center'}}>
//   <Button   variant="contained" onClick={this.handleClick}>Increment</Button>
//   <Button   variant="contained" onClick={this.handleClick1}>Decrement</Button>
//   {/* <Button   variant="contained" onClick={this.handleUpdate}>Update</Button> */}
//   </Stack>
//   </div>
//   );
//   }
//   }

// class App extends React.Component {
// render(){
//   return(
//   <div className="App">
//     <h1>Hello World!</h1>
//     {/* <DisplayGreetings name="Dan "/> */}
//   </div>
//   )
// }}

export default App;
