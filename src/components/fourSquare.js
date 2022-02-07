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

const styles = makeStyles((theme) => ({
  aboutMeTest: {
    color: "yellow",
  },
  pic: {
    marginTop: "25vh",
  },
}));

function FourSquare(props) {
  const blueBox = {
    marginRight: "auto",
    width: props.wid,
    height: props.hei,
    backgroundColor: props.color,
    borderRadius: 16,
    margin: 10,
    "&:hover": {
      backgroundColor: props.hoverColor,
      opacity: [0.9, 0.8, 0.7],
    },
  };

  return (
    <>
      {props.num == 5 ? (
        <div style={{ marginRight: "10vw" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <Box sx={blueBox}></Box>
            <Box sx={blueBox}></Box> <Box sx={blueBox}></Box>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <Box sx={blueBox}></Box>
            <Box sx={blueBox}></Box>
          </div>
        </div>
      ) : (
        <>
          <div>
            <Box sx={blueBox}></Box>
            <Box
              sx={blueBox}
              style={{ marginTop: "10vh", marginRight: props.mRight }}
            ></Box>
          </div>
          <div>
            <Box sx={blueBox}></Box>
            <Box
              sx={blueBox}
              style={{ marginTop: "10vh", marginRight: props.mRight }}
            ></Box>
          </div>
        </>
      )}
    </>
  );
}
export default FourSquare;
