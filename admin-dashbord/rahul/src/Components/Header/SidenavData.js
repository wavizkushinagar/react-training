import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from '@mui/icons-material/Book';
import PostAddIcon from '@mui/icons-material/PostAdd';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { NavLink } from 'react-router-dom';

export default function SidenavData() {
    const listItemData = [
        {label:"DashBorad", link:"/", icon:<DashboardIcon/>},
        {label:"Blog Post", link:"/blog", icon:<BookIcon/>},
        {label:"Link 1", link:"/link1", icon:<PostAddIcon/>},
        {label:"Notification", link:"/notification", icon:<NotificationsActiveIcon/>},
        {label:"Logout", link:"/logout", icon:<ExitToAppIcon/>}
    ]

  return (
    <List>
    {listItemData.map((item,i)=>(
        <ListItem component={NavLink} to={item.link} key={i}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText>{item.label}</ListItemText>
        </ListItem>
    ))}
        
    </List>
  )
}
