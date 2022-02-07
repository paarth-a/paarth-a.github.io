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
import FourSquare from "../components/fourSquare";
import { withStyles } from "@material-ui/core/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const styles = makeStyles((theme) => ({
  aboutMeTest: {
    color: "yellow",
    fontFamily: "Luxurious Roman",
  },
  pic: {
    marginTop: "25vh",
  },
}));

function Experiences(props) {
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
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: "1vh",
    borderRadius: 10,
    width: "10vw",
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "white",
    },
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: "green",
    },
  }));

  const blueBox = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "auto",
    width: "18vw",
    height: "25vh",
    backgroundColor: "#ADD8E6",
    borderRadius: 16,
    margin: 5,
    "&:hover": {
      backgroundColor: "grey",
      opacity: [0.9, 0.8, 0.7],
    },
  };
  const blueBoxMobile = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: "65vw",
    height: "25vh",
    backgroundColor: "#ADD8E6",
    borderRadius: 10,
    "&:hover": {
      backgroundColor: "grey",
      opacity: [0.9, 0.8, 0.7],
    },
  };

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
            {/* <Typography
              style={{
                marginTop: "5vh",
                fontFamily: "Luxurious Roman",
                color: "white",
                textAlign: "center",
              }}
              variant="h3"
              className={classes.aboutMeTest}
            >
             Languages, Skills, and Frameworks
            </Typography> */}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              style={{
                marginTop: "5vh",
                color: "white",
                fontFamily: "Luxurious Roman",
              }}
            >
              Java
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BorderLinearProgress
              sx={{ borderRadius: 10, height: "1vh", width: "50vw" }}
              variant="determinate"
              value={90}
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
              variant="h3"
              style={{
                marginTop: "5vh",
                color: "white",
                fontFamily: "Luxurious Roman",
              }}
            >
              C++
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BorderLinearProgress
              sx={{ borderRadius: 10, height: "1vh", width: "50vw" }}
              variant="determinate"
              value={85}
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
              variant="h3"
              style={{
                marginTop: "5vh",
                color: "white",
                fontFamily: "Luxurious Roman",
              }}
            >
              Python
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BorderLinearProgress
              sx={{ borderRadius: 10, height: "1vh", width: "50vw" }}
              variant="determinate"
              value={85}
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
              variant="h2"
              style={{
                marginTop: "5vh",
                color: "white",
                fontFamily: "Luxurious Roman",
              }}
            >
              JavaScript
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BorderLinearProgress
              sx={{ borderRadius: 10, height: "1vh", width: "50vw" }}
              variant="determinate"
              value={90}
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
              variant="h3"
              style={{
                marginTop: "5vh",
                color: "white",
                fontFamily: "Luxurious Roman",
              }}
            >
              React
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BorderLinearProgress
              sx={{ borderRadius: 10, height: "1vh", width: "50vw" }}
              variant="determinate"
              value={90}
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
              variant="h3"
              style={{
                marginTop: "5vh",
                color: "white",
                fontFamily: "Luxurious Roman",
              }}
            >
              Angular
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BorderLinearProgress
              sx={{ borderRadius: 10, height: "1vh", width: "50vw" }}
              variant="determinate"
              value={90}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={blueBoxMobile}>
              {" "}
              <Typography
                align="center"
                style={{ marginTop: "", fontFamily: "Luxurious Roman" }}
                variant="h4"
                className={classes.aboutMeTest}
              >
                Meta - Incoming Software Engineering Intern
              </Typography>
            </Box>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={blueBoxMobile}>
              {" "}
              <Typography
                align="center"
                style={{ marginTop: "", fontFamily: "Luxurious Roman" }}
                variant="h4"
                className={classes.aboutMeTest}
              >
                Amazon - Software Development Engineer Intern
              </Typography>
            </Box>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={blueBoxMobile}>
              <Typography
                align="center"
                style={{ marginTop: "", fontFamily: "Luxurious Roman" }}
                variant="h4"
                className={classes.aboutMeTest}
              >
                TerraCortex - Software Engineering Intern
              </Typography>{" "}
            </Box>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={blueBoxMobile}>
              {" "}
              <Typography
                align="center"
                style={{ marginTop: "", fontFamily: "Luxurious Roman" }}
                variant="h4"
                className={classes.aboutMeTest}
              >
                Biller - Software Engineering Intern
              </Typography>
            </Box>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={blueBoxMobile}>
              {" "}
              <Typography
                align="center"
                style={{ marginTop: "", fontFamily: "Luxurious Roman" }}
                variant="h4"
                className={classes.aboutMeTest}
              >
                Avoy - Business Development Intern
              </Typography>
            </Box>
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
          <Box sx={{ flexGrow: 1, marginLeft: "10vw" }}>
            <Typography
              style={{ marginRight: "0", fontFamily: "Luxurious Roman" }}
              variant="h3"
              className={classes.aboutMeTest}
            >
              Java
            </Typography>
            <BorderLinearProgress variant="determinate" value={90} />
            <Typography
              style={{ marginRight: "0", fontFamily: "Luxurious Roman" }}
              variant="h3"
              className={classes.aboutMeTest}
            >
              Python
            </Typography>
            <BorderLinearProgress variant="determinate" value={85} />
            <Typography
              style={{ marginRight: "0", fontFamily: "Luxurious Roman" }}
              variant="h3"
              className={classes.aboutMeTest}
            >
              C++
            </Typography>
            <BorderLinearProgress variant="determinate" value={85} />

            <Typography
              style={{ marginRight: "0", fontFamily: "Luxurious Roman" }}
              variant="h3"
              className={classes.aboutMeTest}
            >
              JavaScript
            </Typography>
            <BorderLinearProgress variant="determinate" value={90} />
          </Box>

          <div style={{ marginRight: "10vw" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <Box sx={blueBox}>
                {" "}
                <Typography
                  align="center"
                  style={{ marginTop: "", fontFamily: "Luxurious Roman" }}
                  variant="h4"
                  className={classes.aboutMeTest}
                >
                  Meta - Incoming Software Engineering Intern
                </Typography>
              </Box>
              <Box sx={blueBox}>
                {" "}
                <Typography
                  align="center"
                  style={{ marginTop: "", fontFamily: "Luxurious Roman" }}
                  variant="h4"
                  className={classes.aboutMeTest}
                >
                  Amazon - Software Development Engineer Intern
                </Typography>
              </Box>{" "}
              <Box sx={blueBox}>
                <Typography
                  align="center"
                  style={{ marginTop: "", fontFamily: "Luxurious Roman" }}
                  variant="h4"
                  className={classes.aboutMeTest}
                >
                  TerraCortex - Software Engineering Intern
                </Typography>
              </Box>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <Box sx={blueBox}>
                <Typography
                  align="center"
                  style={{ marginTop: "", fontFamily: "Luxurious Roman" }}
                  variant="h4"
                  className={classes.aboutMeTest}
                >
                  Biller - Software Engineering Intern
                </Typography>
              </Box>
              <Box sx={blueBox}>
                {" "}
                <Typography
                  align="center"
                  style={{ marginTop: "", fontFamily: "Luxurious Roman" }}
                  variant="h4"
                  className={classes.aboutMeTest}
                >
                  Avoy - Business Development Intern
                </Typography>
              </Box>
            </div>
          </div>
          {/* <FourSquare num = "5" wid = "15vw" hei = "25vh" mRight ="10vw" color = "#ADD8E6" hoverColor = "grey"></FourSquare> */}
        </div>
      )}
    </>
  );
}
export default Experiences;
