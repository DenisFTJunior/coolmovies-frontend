import React from "react";
import { ThemeProvider } from "@mui/material";
import { Provider as ReduxProvider } from "react-redux";

import coolestMoviesTheme from "../../../style/config/theme";
import movieStore from "../../../utils/stateManager/movieStore";

export const Provider = ({ children }: { children: JSX.Element }) => {
  const createdStore = movieStore();
  return (
    <ThemeProvider theme={coolestMoviesTheme}>
      <ReduxProvider store={createdStore}>{children}</ReduxProvider>
    </ThemeProvider>
  );
};
