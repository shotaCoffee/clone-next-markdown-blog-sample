import * as React from 'react'
import Head from 'next/head'

interface IHeader {
  title: string,
  description: string,
  keyword: string,
  image: string,
  url: string
  stylesheets: string[],
  meta: []
}

export const defaultStyleSheets = [
  'https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css'
];
export const defaultKeyword = 'フロントエンド, Angular, React, Vue, VuePress, WordPress';
export const defaultUrl = '';

function Header(props: IHeader) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta name="keywords" content={props.keyword} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={props.url} />
      <meta property="og:image" content={props.image} />
      <meta property="og:site_name" content={props.title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@shotaCoffee" />
      <meta name="twitter:url" content={props.image} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.image} />
      <link rel="canonical" href={props.url} />
      <meta name="fb:add_id" content="193150181423423" />
      <link rel="shortcut icon"
            href='/favicon.ico' />
      <link rel="apple-touch-icon"
            href='/favicons/apple-touch-icon.png' />
      <meta name="description" content={props.description}/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      {props.stylesheets && props.stylesheets.length > 0 && props.stylesheets.map((stylesheet, i) => {
        return <link key={i} rel="stylesheet" href={stylesheet}/>
      })}
      <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
      `}</style>
    </Head>
  )
}

export default Header
