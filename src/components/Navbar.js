import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
    marginRight: "5vw"
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    marginTop: "2vh",
    fontFamily: "Luxurious Roman",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    fontFamily: "Luxurious Roman",
    marginTop: "1.5vh",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "grey",
      borderBottom: "1px solid white",
    },
  },
  bar: {
    minHeight: "10vh",
    display: "flex",
    minWidth: "100vw",
    backgroundColor: "transparent",
    color: "white",
    "&:hover": {
      backgroundColor: "black",
      opacity: 0.5,
      
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" className={classes.bar}>
      {/* <CssBaseline /> */}
      <Toolbar>
        {isMobile ? (
          <div style = {{width: "100vw", height: "100%", display:"flex",
          justifyContent:"center",
      }}>
            <DrawerComponent />
            <Typography variant="h4" align="center" className={classes.logo}>
              Paarth Ahuja
            </Typography>
          </div>
        ) : (
          <>
            <Typography variant="h2" className={classes.logo}>
              Paarth Ahuja
            </Typography>
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/exps" className={classes.link}>
                Experiences and Skills
              </Link>
              <Link to="/projs" className={classes.link}>
                Projects
              </Link>

            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
