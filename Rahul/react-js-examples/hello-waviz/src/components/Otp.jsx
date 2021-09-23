import React, { useState } from "react";
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import { TextField } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import {  useHistory } from "react-router-dom";
import axios from "axios";



const Otp = () => {

    // style
    var history = useHistory();
    const [loginerror, setLoginerror] = useState(false);
    const [otp, setOtp] = useState("");
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
        otp: '',
     
    }
    // validateSchema
 

    // on submit funtion
    const onSubmit = (values, props) => {
        // alert(JSON.stringify(values),null,2)
        // props.resetForm()

        axios.post('http://localhost:3333/otp', values)
            .then(function (response) {

                if (response.status == 200 && response.data && response.data.messeage == "success") {
                    console.log("Success Response : ", response.data.messeage)
                    history.push("/reset");
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
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
                                       Wrong OTP{" "}
                                    </p>
                                ) : null}
                            </div>

                        {/* error */}


                            {/* email */}

                            <Field as={TextField} name="otp" label='Otp' fullWidth error={props.errors.otp && props.touched.otp}
                                helperText={<ErrorMessage name='otp' />} required />
                          
                            {/* button */}

                            <div style={btncss}>
                                <Button type="submit" style={btnStyle} variant='contained' color='primary' >
                                    Submit OTP
                                </Button>
                                
                            </div>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}
export default Otp;