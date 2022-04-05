import {Avatar, Badge, Button, List, ListItem, ListItemIcon, ListItemText, Menu } from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useStyle } from "../HeaderStyle";

export default function Notifications() {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropDownData = [
    { label: "Rahul ", desc:" I Like Your desc.." },
    { label: "Aniket ", desc:" I Like Your desc.." },
    { label: "Maneesh ", desc:" I Like Your desc.." },
  ];
  return (
    <>
      <Button
        id="notification-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="inherit"
      >
         <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge> 
      </Button>
      <Menu
        id="notification-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <List className={classes.navList}>
        {dropDownData.map((item, i) => (
          <ListItem onClick={handleClose} className="listNavItem">
            <ListItemIcon>
              <Avatar className={classes.ulAvtar}>{item.label[0].toUpperCase()}</Avatar>
            </ListItemIcon>
            <ListItemText primary={item.label} secondary={item.desc}> </ListItemText> 


          </ListItem>
        ))}
        </List>
      </Menu>
    </>
  );
}
