import React from "react";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
import Blog from "../BodyComponent/Blog";
import Link1 from "../BodyComponent/Link1";
import NotificationComponant from "../BodyComponent/NotificationComponant";
import Logout from "../BodyComponent/Logout";
import { Box } from "@mui/material";
import { useStyle } from "./HeaderStyle";

export default function HeaderComponent() {
  const classes = useStyle();
  return (
    <>
      <Navbar />
      <Sidenav />

      {/* Register Routes */}
      <Box className={classes.wrapper}>
        <Routes>
          <Route path="/" render={() => <Dashboard />} />
          <Route path="/blog" render={() => <Blog />} />
          <Route path="/link1" render={() => <Link1 />} />
          <Route
            path="/notification"
            render={() => <NotificationComponant />}
          />
          <Route path="/logout" render={() => <Logout />} />
        </Routes>
      </Box>
    </>
  );
}
