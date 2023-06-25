import React from "react";
import localFont from "next/font/local";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const inter = localFont({
  src: [
    {
      path: "../public/fonts/inter-var-latin.woff2",
      weight: "100 900",
    },
  ],
  variable: "--font-inter",
});

const libreBaskerville = localFont({
  src: [
    {
      path: "../public/fonts/libre-baskerville-v5-latin-regular.woff2",
      weight: "400 700",
    },
  ],
  variable: "--font-libre",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`flex flex-col h-full justify-stretch ${inter.variable} ${libreBaskerville.variable} font-primary`}
    >
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
