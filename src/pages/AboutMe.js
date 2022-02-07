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
import RalewayWoff2 from "../fonts/raleway-v22-latin-regular.woff2";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import imgMe from "../imgs/1563696266487.jpeg"

const styles = makeStyles((theme) => ({
  aboutMeTest: {
    color: "yellow",
  },
  pic: {
    marginTop: "25vh",
  },
}));

function AboutMe() {
  var color1 = "";
  const classes = styles;
  const theme = useTheme();
  const rgb = [
    color1.substring(1, 3),
    color1.substring(3, 5),
    color1.substring(5, 7),
  ];
  const color2 = `rgb(${rgb.map((c) => parseInt(c, 16) * 0.6).join()})`;

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMobile ? (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                marginTop: "20vh",
                width: "40vh",
                height: "40vh",
              }}
              className={classes.pic}
              alt="Remy Sharp"
              src={imgMe}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          <Typography
            style={{
              marginTop: "5vh",
              fontFamily: "Luxurious Roman",
              color: "white",
              textAlign:"center"

            }}
            variant="h3"
            className={classes.aboutMeTest}
          >
            Hi! My name is Paarth!
          </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding:"5vw"
            }}
          >
          
          </div>
        </div>
      ) : (
        <div
          className={classes.divs}
          style={{
            display: "flex",
            background: `linear-gradient(${color1}, ${color2})`,
            gap: "6vw",
            height: "90vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            sx={{
              marginTop: "",
              marginLeft: "5vw",
              width: "40vh",
              height: "40vh",
            }}
            className={classes.pic}
            alt="Remy Sharp"
            src={imgMe}
          />
          <div>
          <Typography
            style={{
              marginTop: "",
              marginRight: "5vw",
              fontFamily: "Luxurious Roman",
              color: "white",
            }}
            variant="h3"
            className={classes.aboutMeTest}
          >
            Hi! My name is Paarth and I am a Software Engineering student at Western University!
          </Typography>
          <Typography
            style={{
              marginTop: "",
              marginRight: "5vw",
              fontFamily: "Luxurious Roman",
              color: "yellow",
            }}
            variant="h4"
            className={classes.aboutMeTest}
          >
                        {/* Hi! My name is Paarth and I am a Software Engineering student at Western University! */}

          </Typography>
          
          </div>
        </div>
      )}
      {/* <Typography  style={{ fontFamily: "Luxurious Roman", }}
variant = "h3" className = {classes.aboutMeTest}>
            af
          </Typography> */}
    </>
  );
}
export default AboutMe;
