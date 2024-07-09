// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Link to="/" style={{ marginRight: "1rem" }}>
              Home
            </Link>
            <Link to="/about" style={{ marginRight: "1rem" }}>
              About
            </Link>
            <Link to="/contact">Contact</Link>
          </Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
};

export default App;
