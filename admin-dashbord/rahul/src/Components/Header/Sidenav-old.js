import { Box, Drawer, Typography } from "@mui/material";
import React, { useState } from "react";
import { useStyle } from "./HeaderStyle";

export default function Sidenav() {
  const drawerWidth = 240;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyle();

  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 },}}
        aria-label="mailbox folders"     
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,              
            },
          }}
          classes={{
              paper: classes.drawer,
          }}

        >
          <Typography variant="h6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            consequatur quae repellendus minus accusantium sunt culpa?
          </Typography>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          classes={{
              paper: classes.drawer,
          }}
        >
        <Typography variant="h6">
            Lorem, Permanent ipsum dolor sit amet consectetur adipisicing elit. Rem
            consequatur quae repellendus minus accusantium sunt culpa?
          </Typography>
        </Drawer>
      </Box>
    </>
  );
}
