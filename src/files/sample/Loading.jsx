import React, {Component, useEffect} from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';



export default function Loading(props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return(
        <Box sx={{ display: 'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', mt:'80px'}}>
        <CircularProgress />
        <h4>Loading...</h4>
      </Box>
)
}