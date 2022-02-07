import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "grey",
    fontSize: "20px",
    marginTop:"5vh"
  },
  icon: {},
  iconBtn: {
    marginTop: "2vh",
    color: "white",
  },
  drawer: {
    background: "transparent",
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        className={classes.drawer}
      >
        <List style={{marginTop:"2.5vh"}}>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/">
                About Me
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/exps">
                Experiences & Skills
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/projs">
                Projects
              </Link>
            </ListItemText>
          </ListItem>

        </List>
      </Drawer>
      <IconButton
        className={classes.iconBtn}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
