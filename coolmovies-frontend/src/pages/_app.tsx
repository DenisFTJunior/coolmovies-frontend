import "../style/globals.css";
import type { AppProps } from "next/app";
import React, { FC } from "react";
import { Provider as ReduxProvider } from "react-redux";
import Head from "next/head";
import store from "../utils/stateManager/movieStore";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>{"Coolmovies - your site for movie reviews"}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </>
  );
};

export default App;
