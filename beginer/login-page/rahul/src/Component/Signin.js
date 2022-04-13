import { Avatar, Button, Grid } from "@mui/material";
import { Box, Paper } from "@mui/material";
import React, {useState, useEffect} from "react";
import "./signstyle.css";
import logo from "./image/logo-header.png";
import TextField from "@mui/material/TextField";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import EmailIcon from "@mui/icons-material/Email";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {  useHistory } from "react-router-dom";

import * as Yup from "yup";

import axios from "axios";

export default function Signin() {
  useEffect(()=>{
    if(localStorage.getItem('token')){
        history.push('/dashboard')
    }
},[])
  var history = useHistory();
  const [loginerror, setLoginerror] = useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  {/* initialValues */  }

  const initialValues = {
    email: "",
    password: "",
    grecaptcha: false,
  };

  {/* validationSchema */}
  const passwordRegularExp = /^(?=.*?[A-Za-z])(?=.*[A-Z])(?=.*?[0-9]).{6,}$/

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter Valid Email").required("required"),
    password: Yup.string()
      .min(8, "Password should be 8 corrector").matches(passwordRegularExp,"must be contain number u")
      .required("Required"),
  });

  {/* onSubmit */}
  const onSubmit = (values, props) => {
    axios.post('http://localhost:2022/login', values)
    .then(function (res) {
        if (res.status === 200 ) {
            console.log("Success res : ", res.data.messeage);
            localStorage.setItem('token', "myVerySecureTokenforGdubey");
            history.push("./Dashboard");
        }
        else {
            // setLoginerror(true)
        }
        console.log("res");
    }
    )
    .catch((error)=>{
      if(error.res == 401){
        console.log("res");
       
        setLoginerror(true);
      }
    })
  };

  return (
    <Box className="main_box">
      <div className="triangle"></div>
      <div className="circle"></div>
      <Paper elevation={3} className="paperStyle">
        <Box sx={{ flexGrow: 1 }} className="signBox">
          <Grid container className="signGrid">
            <Grid item xs={8} className="leftSide">
              {/* Logo */}
              <Grid className="logo">
                <img src={logo} alt="logo" />
              </Grid>
              <br />
              <br />
              {/* Branding */}
              <Grid align="center" marginTop={6}>
                <h2>Sign In To Waviz</h2>
              </Grid>{" "}
              <br />
              {/* Sign In Options */}
              <Grid container justifyContent="center" marginTop="20">
                <Avatar className="avtarStyle">f</Avatar>
                <Avatar className="avtarStyle">G+</Avatar>
                <Avatar className="avtarStyle">in</Avatar>
              </Grid>
              <br />
              <Grid align="center">
                <p>or use your email account:</p>
              </Grid>
              <br />
              {/* Main Form */}
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(props) => (
                  <Form>
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
                    <Grid align="center">
                      <Box md={{ display: "flex" }}>
                        <EmailIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <Field
                          as={TextField}
                          id="input-with-sx"
                          label="Email"
                          variant="standard"
                          name="email"
                          helperText={<ErrorMessage name="email" />}
                        />
                      </Box>
                      <Box md={{ display: "flex" }}>
                        <LockIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <Field
                          as={TextField}
                          type="password"
                          id="input-with-sx"
                          label="Password"
                          variant="standard"
                          name="password"
                          helperText={<ErrorMessage name="password" />}
                        />
                      </Box>
                      <br />

                      {/* Google recaptch */}
                    { /* <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChange}
                        name="grecaptcha"
                        required
                      />
                    <br />*/}

                      {/* Forgot Btn */}
                      <Button>Forgot Password</Button>
                      <br />

                      {/* Signin Btn */}
                      <Button
                        className="signinBtn"
                        type="submit"
                      >
                        Sign in
                      </Button>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Grid>

            {/* Right Div */}

            <Grid item xs={4} className="rightGrid">
              <Grid>
                <h1>Hello, Friend!</h1>
                <br />
                <p>
                  Enter your personal details <br /> and start journey with us
                </p>
                <br />
                <Link to="/signup">
                  {" "}
                  <Button className="signupBtn">Sign UP</Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}
