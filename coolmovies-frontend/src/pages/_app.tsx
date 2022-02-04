import "../style/globals.css";

import type { AppProps } from "next/app";
import React, { FC } from "react";
import { Provider as ReduxProvider } from "react-redux";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";

import movieStore from "../utils/stateManager/movieStore";
import coolestMoviesTheme from "../style/config/theme";
import Header from "../components/Header";
import EditButton from "../components/edit/addButton";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const createdStore = movieStore();

  return (
    <>
      <Head>
        <title>{"Coolmovies - your site for movie reviews"}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={coolestMoviesTheme}>
        <ReduxProvider store={createdStore}>
          <Header />
          <Component {...pageProps} />
          <EditButton />
        </ReduxProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
