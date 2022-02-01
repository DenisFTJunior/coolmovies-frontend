import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignContent="center"
      sx={{
        margin: "1rem",
        width: "100%",
        maxWidth: "100#",
        padding: "0 10rem",
      }}
    >
      <Image src="/logo.svg" height={150} width={150} />
      <NavBar />
    </Stack>
  );
};

export default Header;
