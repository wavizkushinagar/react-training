import React, {useState, useEffect} from "react";
import { Avatar, Button, Grid } from "@mui/material";
import { Box, Paper } from "@mui/material";
import "./signstyle.css";
import logo from "./image/logo-header.png";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import EmailIcon from "@mui/icons-material/Email";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {  useHistory } from "react-router-dom";



export default function Signup() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  var history = useHistory();
  const [loginerror, setLoginerror] = useState(false);


  function onChange(value) {
    console.log("Captcha value:", value);
  }
{/* onSubmit */}
const onSubmit = (values, props) => {
  console.log(values.email);
  axios.post('http://localhost:2022/user', values)
  .then(function (res) {
      if (res.status == 200 ) {
          console.log("Success res : ", res.data.messeage);
          history.push("/");
      } else {
          setLoginerror(true)
      }
      console.log(res);
  })
};

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Its too short").required("required"),
    email: Yup.string().email("Enter a valid Email").required("Required"),
    password: Yup.string()
      .min(8, "Password should be 8 corrector")
      .required("Required"),
  });
  return (
    <Box className="main_box">
      <div className="triangle"></div>
      <div className="circle"></div>
      <Paper elevation={3} className="paperStyle">
        <Box sx={{ flexGrow: 1 }} className="signBox">
          <Grid container className="signGrid">
            {/* Left Div */}

            <Grid item xs={4} className="rightGrid">
              {/* Logo */}
              <Grid className="logo">
                <img src={logo} alt="logo" />
              </Grid>
              <br />
              <br />
              <Grid>
                <Grid></Grid>
                <h1>Wellcome Back!</h1>
                <br />
                <p>
                  To keep connect with us please <br /> login with your personal
                  info
                </p>
                <br />
                <Link to="/">
                  <Button className="signupBtn">Sign in</Button>
                </Link>
              </Grid>
            </Grid>

            {/* Right Side */}
            <Grid item xs={8} className="leftSide signupForm">
              {/* Branding */}
              <Grid align="center">
                <h2>Create Account</h2>
              </Grid>
              <br />
              {/* Sign In Options */}
              <Grid container justifyContent="center" marginTop="20">
                <Avatar className="avtarStyle">f</Avatar>
                <Avatar className="avtarStyle">G+</Avatar>
                <Avatar className="avtarStyle">in</Avatar>
              </Grid>
              <br />
              <Grid align="center">
                <p>or use your email for register:</p>
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
                    <Grid align="center">
                      <Box md={{ display: "flex" }}>
                        <AccountCircle
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <Field
                          as={TextField}
                          id="input-with-sx"
                          label="Name"
                          variant="standard"
                          type="text"
                          name="name"
                          helperText={<ErrorMessage name="name" />}
                        />
                      </Box>
                      <Box md={{ display: "flex" }}>
                        <EmailIcon
                          sx={{ color: "action.active", mr: 1, my: 0.5 }}
                        />
                        <Field
                          as={TextField}
                          id="input-with-sx"
                          label="Email"
                          variant="standard"
                          type="email"
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
                          name="password"
                          type="password"
                          id="input-with-sx"
                          label="Password"
                          variant="standard"
                          helperText={<ErrorMessage name="password" />}
                        />
                      </Box>
                      <br />
                      <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChange}
                      />
                      <br />
                      {/* SignUP Btn */}
                      <Button
                        type="submit"
                        className="signinBtn"
                        disabled={props.isSubmitting}
                      >
                        {props.isSubmitting ? "Registraing.." : "Sign up"}
                      </Button>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}
