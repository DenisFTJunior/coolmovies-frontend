import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        margin: "1rem",
      }}
    >
      <Image src="/logo.svg" height={100} width={100} />
    </Box>
  );
};

export default Header;
