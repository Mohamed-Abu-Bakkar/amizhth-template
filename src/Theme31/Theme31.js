import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./style";
import Navigation from "./Theme31NavBar";
import Theme31Home from "./Theme31Home";
import Theme31Footer from "./Theme31Footer";

const Theme31 = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{ background: "#ffffff", color: "#1a1a1a", minHeight: "100vh" }}
      >
        <Navigation />
        <Theme31Home />
        <Theme31Footer />
      </div>
    </ThemeProvider>
  );
};

export default Theme31;
