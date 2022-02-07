import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";


import RalewayWoff2 from "./fonts/raleway-v22-latin-regular.woff2";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import WebFont from "webfontloader";
import FourSquare from "./components/fourSquare";
import Image from "./imgs/wallpapersden.com_76927-5120x2880.jpg"
import ImageLong from "./imgs/213563-wallpaper-for-vertical-monitor.jpg"


function App() {
  WebFont.load({
    google: {
      families: ["Titillium Web:300,400,700", "sans-serif"],
    },
  });

  
  var color1 = "#eddeb7";
  const theme = useTheme();
  const rgb = [
    color1.substring(1, 3),
    color1.substring(3, 5),
    color1.substring(5, 7),
  ];

  const color2 = `rgb(${rgb.map((c) => parseInt(c, 16) * 0.6).join()})`;

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  var img = Image;

  if(isMobile){
    img=ImageLong
  }

  return (
    <ThemeProvider theme={theme}>

        {isMobile ? 
        (
          <Router>
          <div style ={{ backgroundImage: `url(${img})`,         backgroundPosition: 'center',
        backgroundRepeat: 'repeat-y',
        width: '100vw',
        minHeight:"100vh"
      }}> 
        <Navbar />
        {/* <div
                    style={{
            display: "flex",
            background: `linear-gradient(${color1}, ${color2})`,
            gap: "6vw",
            height: "90vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        > */}
        <Routes>
          <Route exact path="/" element={<AboutMe />} />
          <Route path="/projs" element={<Projects/>} />
          <Route path="/exps" element={<Experiences/>} />
        </Routes>
        </div>

      </Router> 
      ) : 

        (
          <Router>
          <div style ={{ backgroundImage: `url(${img})`,         backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height:'100vh'
      }}> 
        <Navbar />
        {/* <div
                    style={{
            display: "flex",
            background: `linear-gradient(${color1}, ${color2})`,
            gap: "6vw",
            height: "90vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        > */}
        <Routes>
          <Route exact path="/" element={<AboutMe />} />
          <Route path="/projs" element={<Projects/>} />
          <Route path="/exps" element={<Experiences/>} />
        </Routes>
        </div>

      </Router>)
      }
    </ThemeProvider>
  );
}
export default App;
