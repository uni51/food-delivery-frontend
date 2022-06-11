import React from "react";
import App from "next/react";
import Head from "next/head";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head></Head>
        <Component {...pageProps} />
      </>
    );
  }
}
