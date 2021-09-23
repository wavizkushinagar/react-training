import React, { useState } from "react";
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import { TextField } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import * as Yup from 'yup'
import { Link, useHistory } from "react-router-dom";
import axios from "axios";



const Login = () => {
   
    const token = localStorage.getItem('token')
    var history = useHistory();
    const [loginerror, setLoginerror] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const paperStyle = { padding: '40px 20px', width: 300, margin: '20px auto' }
    const btnStyle = { marginTop: 10 }
    const formStyle = { height: "auto", alignItems: "baseline" }
    const btncss = {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
    }
    const linkStyle = { textDecoration: "none" }
    // validateYupSchema
    const passwordRegularExp = /^(?=.*?[A-Za-z])(?=.*[A-Z])(?=.*?[0-9]).{6,}$/
    const initialValues = {
        email: '',
        password: '',

    }
    // validateSchema
    const validateSchema = Yup.object().shape({


        email: Yup.string().email("Enter vaild Email").required("Required"),
        password: Yup.string().min(8, "Min carrector should be 8").matches(passwordRegularExp, "Password must have uppercase,lovercase,number,special Symbol").required("Required"),


    })
    // on submit funtion
    const onSubmit = (values, props) => {
        // alert(JSON.stringify(values),null,2)
        // props.resetForm()
        localStorage.setItem('token',JSON.stringify(values));

        axios.post('http://localhost:3333/login', values)
            .then(function (response) {


                if (response.status == 200 && response.data && response.data.messeage == "success") {
                    console.log("Success Response : ", response.data.messeage)
                    history.push("/dashboard");
                } else {
                    setLoginerror(true)
                }
                console.log(response);
            })
    }
    return (
        <Grid>
            <Paper elevation={5} style={paperStyle}>
                <Grid align='center'>
                    <Typography variant="h6"> Login Here</Typography>
                    <Typography variant="caption"> Fill the form to Login</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validateSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form style={formStyle} noValidate >
                            {console.log(props)}
                        {/* error */}

                            <div style={{ textAlign: "center" }}>
                                {loginerror ? (
                                    <p
                                        style={{
                                            padding: "10px",
                                            color: "#f44336",
                                        }}
                                    >
                                        {" "}
                                        Wrong Email or Password{" "}
                                    </p>
                                ) : null}
                            </div>

                        {/* error */}


                            {/* email */}

                            <Field as={TextField} name="email" label='Email' fullWidth error={props.errors.email && props.touched.email}
                                helperText={<ErrorMessage name='email' />} required />



                            {/* password */}

                            <Field as={TextField} name="password" error={props.errors.password && props.touched.password} label="Password" type="password"
                                fullWidth helperText={<ErrorMessage name='password' />} required />


                            {/* button */}
                            <div style={btncss}>
                                <Button type="submit" style={btnStyle} variant='contained' color='primary' >
                                    Login
                                </Button>
                                <Link style={linkStyle} to="/forgot"><Button type="submit" style={btnStyle} variant='contained'  >
                                    Forgot Password
                                </Button></Link>
                               
                            </div>
                            <Link to="/registration">Sign Up</Link>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}
export default Login;