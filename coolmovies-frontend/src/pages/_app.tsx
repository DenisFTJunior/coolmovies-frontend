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
import EditUserModal from "../pagePieces/modals/edit/EditUserModal";
import EditDirectorModal from "../pagePieces/modals/edit/EditDirectorModal";
import EditMovieModal from "../pagePieces/modals/edit/EditMovieModal";
import EditReviewModal from "../pagePieces/modals/edit/EditReviewModal";
import MovieDetails from "../pagePieces/modals/detail/MovieDetails";

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
          <EditUserModal />
          <EditDirectorModal />
          <EditMovieModal />
          <EditReviewModal />
          <MovieDetails />
        </ReduxProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
