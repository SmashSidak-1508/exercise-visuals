import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFFFFF">
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Wellness WayFinder
      {/* Made By Sidakpreet Sandeep Sonu Vishesh(Group 5) */}
    </Typography>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Made By Sidakpreet Sandeep Sonu Vishesh(Group 5)
    </Typography>
  </Box>
);

export default Footer;
