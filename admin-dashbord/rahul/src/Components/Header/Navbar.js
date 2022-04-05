import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Messages from "./Navtabs/Messages";
import Notifications from "./Navtabs/Notifications";
import Profile from "./Navtabs/Profile";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Hidden mdDown>
              <Box color="inherit">
                <Notifications />
                <Messages />
                <Profile />
              </Box>
            </Hidden>
            <Hidden mdUp>
              <IconButton color="inherit" onClick={()=> console.log("Radhey Radhey")}>
                <MenuIcon/>
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
