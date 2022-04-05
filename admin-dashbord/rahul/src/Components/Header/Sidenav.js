import React, { useState } from 'react'
import { useStyle } from './HeaderStyle'
import { Drawer , Hidden } from '@mui/material';
import SidenavData from './SidenavData'


export default function Sidenav() {

    const classes = useStyle();
    const [mobileOpen, setMobileOpen] = useState(false);
    const handaleDrawerOpen =()=>{
        setMobileOpen(!mobileOpen);
    }
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            // container={Paper}
            variant="temporary"
            anchor={'left'}
            open={mobileOpen}
            onClose={handaleDrawerOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <SidenavData/>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
          <SidenavData/>

          </Drawer>
        </Hidden>
      </nav>
  )
}
