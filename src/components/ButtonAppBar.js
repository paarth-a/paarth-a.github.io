import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { flexbox } from "@mui/system";

export default function ButtonAppBar() {
  return (
    <Box
      height="12vh"
      sx={{
        display: "flex",
        backgroundColor: "primary.dark",
      }}
    >
      {/* 
        <Button sx={{ p: "3rem", color:"white", fontSize: '30px'}}> 
            ASD
        </Button>
        <Button sx={{ p: "3rem", color:"white", fontSize: '30px'}}> 
            ASD
        </Button>
        <Button sx={{ p: "3rem", color:"white", fontSize: '30px'}}> 
            ASD
        </Button> */}

      <Button sx={{ mx: "auto" }}>
        <Button
          sx={{
            borderRadius: 3,
            color: "white",
            fontSize: "30px",
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
        >
          About
        </Button>
      </Button>
      <Button sx={{ mx: "auto" }}>
        <Button
          sx={{
            borderRadius: 3,
            color: "white",
            fontSize: "30px",
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
        >
          Projects
        </Button>
      </Button>
      <Button sx={{ mx: "auto" }}>
        <Button
          sx={{
            borderRadius: 3,
            color: "white",
            fontSize: "30px",
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
        >
          Projects
        </Button>
      </Button>
    </Box>
  );
}
