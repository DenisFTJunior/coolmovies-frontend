import React from "react";

import LandingPage from "./landingPage";
import useFetchingMovies from "../utils/hooks/useFetchMovies";

const Home = () => {
  const [movies] = useFetchingMovies({ vars: {} });
  return <LandingPage movies={movies} />;
};

export default Home;
