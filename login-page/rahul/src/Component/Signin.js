import { Avatar, Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./signstyle.css";
import logo from "./image/logo-header.png";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import LockIcon from "@mui/icons-material/Lock";

export default function Signin() {
  return (
    <Box sx={{ flexGrow: 1 }} className="signBox">
      <Grid container className="signGrid">
        <Grid item xs={8} className="leftSide">
          {/* Logo */}
          <Grid>
            <img src={logo} />
          </Grid>
          <br/><br/>
          {/* Branding */}
          <Grid align="center">
            <h2>Sign In To Waviz</h2>
          </Grid> <br/>

          {/* Sign In Options */}

          <Grid container justifyContent="center" marginTop="20">
            <Avatar className="avtarStyle">f</Avatar>
            <Avatar className="avtarStyle">G+</Avatar>
            <Avatar className="avtarStyle">in</Avatar>
          </Grid>
          <br/>
          <Grid align="center">
            <p>or use your email account:</p>
          </Grid>
          <br/>
          {/* Main Form */}

          <Grid align="center">
            <Box md={{ display: "flex" }}>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Email"
                variant="standard"
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
            <br/>
        {/* Forgot Btn */}
            <Button>Forgot Password</Button><br/>

        {/* Signin Btn */}
            <Button variant="contained" className="signinBtn">
              Sign In
            </Button>
          </Grid>
        </Grid>

        {/* Right Div */}

        <Grid item xs={4} className="rightGrid">
          <Grid>
          <h1>Hello, Friend!</h1><br/>
          <p>Enter your personal details <br/> and start journey with us</p><br/>
          <Button className="signupBtn">Sign UP</Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
