import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
// import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        
       <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #000FFF",
            justifyContent: "space-around",
            marginLeft:"20px",
            marginTop:"20px",
          }}
        >
          Wellness WayFinder
        </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #000FFF",
            marginTop:"20px",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" ,borderBottom: "3px solid #000FFF",marginTop:"20px"}}
        >
          Exercises
        </a>
        
      </Stack>
    </Stack>
  );
};

export default Navbar;
