import React, { useState } from "react";
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import { TextField } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import * as Yup from 'yup'
import { Link, useHistory } from "react-router-dom";
import axios from "axios";



const Forgot = () => {

    // style
    var history = useHistory();
    const [loginerror, setLoginerror] = useState(false);
    const [email, setEmail] = useState("");
      const paperStyle = { padding: '40px 20px', width: 300, margin: '20px auto' }
    const btnStyle = { marginTop: 10 }
    const formStyle = { height: "auto", alignItems: "baseline" }
    const btncss = {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
    }
    const linkStyle = { textDecoration: "none" }
    const initialValues = {
        email: '',
     
    }
    // validateSchema
    const validateSchema = Yup.object().shape({


        email: Yup.string().email("Enter vaild Email").required("Required"),

    })

    // on submit funtion
    const onSubmit = (values, props) => {
        // alert(JSON.stringify(values),null,2)
        // props.resetForm()

        axios.post('http://localhost:3333/forgot', values)
            .then(function (response) {

                if (response.status == 200 && response.data && response.data.messeage == "success") {
                    console.log("Success Response : ", response.data.messeage)
                    history.push("/otp");
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
                    <Typography variant="h6"> Forgot Password</Typography>
                    <Typography variant="caption"> Please Verify Your Email </Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validateSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form style={formStyle} noValidate >
                            {/* {console.log(props)} */}
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
                                       Email Does Not Exits, Please Enter Correct Email{" "}
                                    </p>
                                ) : null}
                            </div>

                        {/* error */}


                            {/* email */}

                            <Field as={TextField} name="email" label='Email' fullWidth error={props.errors.email && props.touched.email}
                                helperText={<ErrorMessage name='email' />} required />
                            {/* button */}
                            <div style={btncss}>
                                <Button type="submit" style={btnStyle} variant='contained' color='primary' >
                                    Reset
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
export default Forgot;