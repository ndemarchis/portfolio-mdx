import "../styles/globals.css";
import Header from "../src/components/Header";
import type { AppProps } from "next/app";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col h-full">
      <Header className="m-auto md:w-10/12 max-w-5xl flex justify-evenly flex-row items-center w-full p-5 flex-initial" />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
