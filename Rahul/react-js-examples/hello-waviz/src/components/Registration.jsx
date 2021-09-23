import React, { useEffect, useState } from "react";
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import { TextField } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import { Link, useHistory } from "react-router-dom";

import axios from "axios";


const Reagistration = () => {
    useEffect(()=>{
        if (localStorage.getItem('response.data')) {
            history.push('/home')
        }
    },[])
    let history = useHistory();
    const [registerError, setregisterError] = useState();
    const paperStyle = { padding: '40px 20px', width: 300, margin: '20px auto' }
    const btnStyle = { marginTop: 10 }
    const formStyle = { height: "auto", alignItems:"baseline" }
    const btncss = {display: "flex",
        justifyContent: "space-between",
        width: "100%",}
    const linkStyle = {textDecoration:"none"}

    const phoneRegulaExp= /^[6-9]{2}[0-9]{8}/
    const passwordRegularExp = /^(?=.*?[A-Za-z])(?=.*[A-Z])(?=.*?[0-9]).{6,}$/
    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword:''
    }
    // validateSchema
    const validateSchema=Yup.object().shape({
        name:Yup.string().min(3,"Its too short").required("Required"),
        // phoneNumber:Yup.number().typeError("Enter Valid Number").required("Required"),
        phoneNumber:Yup.string().matches(phoneRegulaExp, "Enter Vaild Phone Number").required('Required'),
        email:Yup.string().email("Enter vaild Email").required("Required"),
        password:Yup.string().min(8,"Min carrector should be 8").matches(passwordRegularExp,"Password must have uppercase,lovercase,number,special Symbol").required("Required"),
        // confirmPassword
        confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Password does not match").min(8,"Min carrector should be 8").required("Required")

    })


  


    // on submit funtion
    const onSubmit = (values, props) => {
        console.log("Registration Data :",JSON.stringify(values),null,2)
        // props.resetForm()

        axios.post('http://localhost:3333/registraion', values)
        .then(function (response) {

             if (response.status == 200 && response.data && response.data.messeage == "success") {
                 console.log("Success Response : ", response.data.messeage)
                  history.push("/login")
             } else {
                setregisterError(true)
             }
            console.log(response);
        })
    }
    return (
        <Grid>
            <Paper elevation={5} style={paperStyle}>
                <Grid align='center'>
                    <Typography variant="h6"> Register Here</Typography>
                    <Typography variant="caption"> Fill the form to create a account</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validateSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form style={formStyle} noValidate>
                        {/* {console.log(props)} */}
                        <div style={{ textAlign: "center" }}>
                                {registerError ? (
                                    <p
                                        style={{
                                            padding: "10px",
                                            color: "#f44336",
                                        }}
                                    >
                                        {" "}
                                        Please Fill all fileds Correctly{" "}
                                    </p>
                                ) : null}
                            </div>
                            {/* name */}

                            <Field as={TextField} name="name" error={props.errors.name&&props.touched.name}  label='Name' fullWidth
                            helperText={<ErrorMessage name='name' /> }  required/>

                            {/* email */}

                            <Field as={TextField} name="email"  label='Email' fullWidth error={props.errors.email&&props.touched.email}
                            helperText={<ErrorMessage name='email' /> } required/>

                            {/* phonenumber */}

                            <Field as={TextField} name="phoneNumber" error={props.errors.phoneNumber&&props.touched.phoneNumber}  label='Phone Number' fullWidth
                            helperText={<ErrorMessage name='phoneNumber' /> } required />

                            {/* password */}

                            <Field as={TextField} name="password" error={props.errors.password&&props.touched.password} label="Password" type="password" 
                            fullWidth  helperText={<ErrorMessage name='password'  /> } required/>
                             {/* password */}

                             <Field as={TextField} name="confirmPassword" error={props.errors.confirmPassword&&props.touched.confirmPassword} label="Confirm Password" type="password" 
                            fullWidth  helperText={<ErrorMessage name='confirmPassword'  /> } required/>

                            {/* button */}
                            <div style={btncss} >
                            <Button type="submit" style={btnStyle} variant='contained' color='primary' >
                                Register
                            </Button>
                           <Link style={linkStyle} to="/login"><Button type="submit" style={btnStyle} variant='contained'  >
                                Login
                            </Button></Link> 
                            </div>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}
export default Reagistration;