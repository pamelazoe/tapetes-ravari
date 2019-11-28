import React from 'react'
import App, { Container } from 'next/app'

import Layout from '../components/Layout'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {  }
    
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    /* your own logic */
    

    return { pageProps }
  }

  render () {
    console.log("hello")
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}