import React from "react";
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import { TextField } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import * as Yup from 'yup'
import { Link } from "react-router-dom";

const Home = () => {
    const btnStyle = { marginTop: 10 }
    const linkStyle = {textDecoration:"none"}

    

   return(
       <>
       <div className="Home">
           <h1>Home</h1> 
           <p>You are able to login from here</p>
           <Link style={linkStyle} to="/login"><Button   type="submit" style={btnStyle} variant='contained'  >
                                Log In
                            </Button></Link> 
                            </div>
       </>
   )

}
export default Home;