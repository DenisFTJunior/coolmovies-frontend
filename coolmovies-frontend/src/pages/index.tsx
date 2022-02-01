import type { NextPage } from "next";
import React from "react";
import { Stack } from "@mui/material";

import Header from "../components/Header";
import LandingPage from "./landingPage";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <LandingPage />
    </>
  );
};

export default Home;
