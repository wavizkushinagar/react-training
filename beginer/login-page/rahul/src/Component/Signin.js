import { Avatar, Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./signstyle.css";
import logo from "./image/logo-header.png";
import TextField from "@mui/material/TextField";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import EmailIcon from "@mui/icons-material/Email";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
export default function Signin() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  {/* initialValues */}

  const initialValues = {
    email:'',
    password:'',
    grecaptcha:false
  }

  {/* validationSchema */}
  const validationSchema=Yup.object().shape({
    email:Yup.string().required("required") 
  })

  {/* onSubmit */}
  const onSubmit=(value,props)=>{
    console.log(value);
  }


  return (
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
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {(props) => (
              <Form>               
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
                        helperText={<ErrorMessage name="email"/>}
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
                        required
                      />
                    </Box>
                    <br />

                    {/* Google recaptch */}
                    <ReCAPTCHA
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      onChange={onChange}
                      name="grecaptcha"
                      required
                    />
                    <br />

                    {/* Forgot Btn */}
                    <Button>Forgot Password</Button>
                    <br />

                    {/* Signin Btn */}
                    <Button className="signinBtn" type="submit">
                      Sign In
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
  );
}
