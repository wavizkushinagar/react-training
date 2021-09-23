import React, { useState } from "react";
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import { TextField } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import { Link, useHistory } from "react-router-dom";

import axios from "axios";


const Reset = () => {
    let history = useHistory();
    const [registerError, setregisterError] = useState();
    const paperStyle = { padding: '40px 20px', width: 300, margin: '20px auto' }
    const btnStyle = { marginTop: 10 }
    const formStyle = { height: "auto", alignItems:"baseline" }
    const btncss = {display: "flex",
        justifyContent: "space-between",
        width: "100%",}
    const linkStyle = {textDecoration:"none"}
    const passwordRegularExp = /^(?=.*?[A-Za-z])(?=.*[A-Z])(?=.*?[0-9]).{6,}$/
    const initialValues = {
        password: '',
        confirmPassword:''
    }
    // validateSchema
    const validateSchema=Yup.object().shape({
          password:Yup.string().min(8,"Min carrector should be 8").matches(passwordRegularExp,"Password must have uppercase,lovercase,number,special Symbol").required("Required"),
        // confirmPassword
        confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Password does not match").min(8,"Min carrector should be 8").required("Required")

    })


  


    // on submit funtion
    const onSubmit = (values, props) => {
        console.log("Registration Data :",JSON.stringify(values),null,2)
        // props.resetForm()

        axios.post('http://localhost:3333/reset', values)
        .then(function (response) {

             if (response.status === 200 && response.data && response.data.messeage === "success") {
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
                    <Typography variant="h6"> Reset Password</Typography>
                    <Typography variant="caption"> Type Your New Password </Typography>
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
                            </div>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}
export default Reset;