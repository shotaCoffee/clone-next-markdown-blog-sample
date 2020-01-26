import * as React from 'react'
import Head from 'next/head'

interface IHeader {
    siteTitle: string,
    description: string,
    stylesheets: string[],
}

function Header(props: IHeader) {
  return (
    <Head>
      <title>{props.siteTitle}</title>
      <meta name="description" content={props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {props.stylesheets && props.stylesheets.length > 0 && props.stylesheets.map((stylesheet, i) => {
        return <link key={i} rel="stylesheet" href={stylesheet} />
      })}
      <style>{`
          body {
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
          }
      `}</style>
    </Head>
  )
}

export default Header
