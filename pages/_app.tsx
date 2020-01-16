import "../styles/index.scss"
import { Fragment } from 'react'
import App from 'next/app'
import Head from 'next/head'

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </Fragment>
    )
  }
}