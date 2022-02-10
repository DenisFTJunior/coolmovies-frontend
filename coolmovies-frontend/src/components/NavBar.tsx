import React from "react";
import { Button, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CasinoIcon from "@mui/icons-material/Casino";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";


const NavBar = () => {

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        alignContent="center"
        justifyContent="center"
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Button key="home" href="/" startIcon={<HomeIcon />}>
          Home
        </Button>
        <Button key="home" href="/reviews" startIcon={<TextSnippetIcon />}>
          Reviews
        </Button>

        <Button
          key="aleatoryMovies"
          href="/aleatoryMovies"
          startIcon={<CasinoIcon />}
        >
          I have lucky
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing={1}
        alignContent="center"
        justifyContent="center"
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <Button key="home" href="/" startIcon={<HomeIcon />} />
        <Button key="home" href="/reviews" startIcon={<TextSnippetIcon />} />

        <Button
          key="aleatoryMovies"
          href="/aleatoryMovies"
          startIcon={<CasinoIcon />}
        />
      </Stack>
    </>
  );
};

export default NavBar;
