import Head from 'next/head'
import React from 'react'

type Props = {
    title : string
}

const MetaSeo = ({title}: Props) => {
  return (
    <Head>
        <meta charSet="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <link rel="shortcut icon" href="/linkedin.png" type="image/x-icon" />
      </Head>
  )
}

export default MetaSeo

