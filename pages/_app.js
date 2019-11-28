import React from 'react'
import App from 'next/app'
import Layout from '../components/Layout'

export default class MyApp extends App {
  constructor(props) {
    super(props);
  }
  render() {
    const { Component, pageProps } = this.props
    console.log(pageProps)
    return (
        <Component {...pageProps} />
    )
  }
}