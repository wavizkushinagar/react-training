import React from 'react'
import { Box, Button, Link, Paper } from '@mui/material'
import './container.css';
import Signin from '../Component/Signin';


export default function Container() {

  return (
    <Box className='main_box'>
    <div className="triangle"></div>
    <div className="circle"></div>
    <Paper elevation={3} className='paperStyle'>
    <Signin/>
    </Paper>    
    </Box>
  )
}
