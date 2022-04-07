import React from "react";
import { Avatar, Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import "./signstyle.css";
import logo from "./image/logo-header.png";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import EmailIcon from '@mui/icons-material/Email';



export default function Signup() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
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
          <Grid align="center">
            <Box md={{ display: "flex" }}>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Name"
                variant="standard"
                type="text"
                required
              />
            </Box>
            <Box md={{ display: "flex" }}>
              <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Email"
                variant="standard"
                type="email"
                required
              />
            </Box>
            <Box md={{ display: "flex" }}>
              <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                type="password"
                id="input-with-sx"
                label="Password"
                variant="standard"
                required
              />
            </Box>
            <br />
            <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChange}/><br/>
            {/* Signin Btn */}
            <Button className="signinBtn">Sign up</Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
