import React from "react";
import {
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import FourSquare from "../components/fourSquare";
import Link from "@mui/material/Link";

const styles = makeStyles((theme) => ({
  aboutMeTest: {
    color: "yellow",
  },
  pic: {
    marginTop: "25vh",
  },
}));

function Projects() {
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
  const blueBox = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "auto",
    width: "25vw",
    height: "30vh",
    backgroundColor: "#ADD8E6",
    borderRadius: 16,
    margin: 0,
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
        <>
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
              These are my projects!
            </Typography> */}
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
            <Box sx={blueBoxMobile}><Typography
                  align="center"
                  style={{ marginTop: "", fontFamily: "Luxurious Roman" }}
                  variant="h4"
                  className={classes.aboutMeTest}
                >
                  Size.AI
                  <br></br>
                  <Link
                    href="https://app3-qrhrzckmpq-ue.a.run.app/"
                    color="inherit"
                  >
                    Live Link
                  </Link>
                </Typography></Box>
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
                  TransSecure
                  <br></br>
                  <Link
                    href="https://devpost.com/software/vault-transaction-fs6mbv/"
                    color="inherit"
                  >
                    Devpost
                  </Link>
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
            <Box sx={blueBoxMobile}> <Typography
                  align="center"
                  style={{ marginTop: "", fontFamily: "Luxurious Roman" }}
                  variant="h4"
                  className={classes.aboutMeTest}
                >
                  The Quest
                  <br></br>
                  <Link
                    href="https://github.com/paarth-a/pahuja3_2250_RPG"
                    color="inherit"
                  >
                    Github
                  </Link>
                </Typography></Box>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={blueBoxMobile}> <Typography
                  align="center"
                  style={{
                    marginTop:
                      "https://github.com/paarth-a/Hotel-Management-System",
                    fontFamily: "Luxurious Roman",
                  }}
                  variant="h4"
                  className={classes.aboutMeTest}
                >
                  Hotel Management System
                  <br></br>
                  <Link href="" color="inherit">
                    Github
                  </Link>
                </Typography></Box>
          </div>
        </>
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
          <>
            <div>
              <Box sx={blueBox}>
                {" "}
                <Typography
                  align="center"
                  style={{ marginTop: "", fontFamily: "Luxurious Roman" }}
                  variant="h4"
                  className={classes.aboutMeTest}
                >
                  Size.AI
                  <br></br>
                  <Link
                    href="https://app3-qrhrzckmpq-ue.a.run.app/"
                    color="inherit"
                  >
                    Live Link
                  </Link>
                </Typography>
              </Box>
              <Box sx={blueBox} style={{ marginTop: "10vh" }}>
                <Typography
                  align="center"
                  style={{ marginTop: "", fontFamily: "Luxurious Roman" }}
                  variant="h4"
                  className={classes.aboutMeTest}
                >
                  TransSecure
                  <br></br>
                  <Link
                    href="https://devpost.com/software/vault-transaction-fs6mbv/"
                    color="inherit"
                  >
                    Devpost
                  </Link>
                </Typography>
              </Box>
            </div>
            <div>
              <Box sx={blueBox}>
                {" "}
                <Typography
                  align="center"
                  style={{ marginTop: "", fontFamily: "Luxurious Roman" }}
                  variant="h4"
                  className={classes.aboutMeTest}
                >
                  The Quest
                  <br></br>
                  <Link
                    href="https://github.com/paarth-a/pahuja3_2250_RPG"
                    color="inherit"
                  >
                    Github
                  </Link>
                </Typography>
              </Box>
              <Box sx={blueBox} style={{ marginTop: "10vh" }}>
                {" "}
                <Typography
                  align="center"
                  style={{
                    marginTop:
                      "https://github.com/paarth-a/Hotel-Management-System",
                    fontFamily: "Luxurious Roman",
                  }}
                  variant="h4"
                  className={classes.aboutMeTest}
                >
                  Hotel Management System
                  <br></br>
                  <Link href="" color="inherit">
                    Github
                  </Link>
                </Typography>
              </Box>
            </div>
          </>
          {/* <FourSquare num = "3"  wid = "25vw" hei = "30vh" mRight = "0vw" color = "#ADD8E6" hoverColor="grey"></FourSquare> */}
        </div>
      )}
    </>
  );
}
export default Projects;
