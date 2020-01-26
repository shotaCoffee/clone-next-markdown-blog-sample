import * as React from 'react'

export interface ITracking {
  siteId: string
}

function getGaScript (siteId: string) {
  return `
  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
  function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
  e=o.createElement(i);r=o.getElementsByTagName(i)[0];
  e.src='https://www.google-analytics.com/analytics.js';
  r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
  ga('create','${siteId}','auto');ga('send','pageview');
`
}

function Tracking(props: ITracking) {
  const scriptSrc = `https://www.googletagmanager.com/gtag/js?id=${props.siteId}`;
  const scriptHtml = `window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', '${props.siteId}');`;
  return (
    <>
      <script
        async
        src={scriptSrc} />
      <script
        dangerouslySetInnerHTML={{
          __html: scriptHtml,
        }}
      />
        {/*<script dangerouslySetInnerHTML={{ __html: getGaScript(props.siteId) }} />*/}
    </>
  )
}

export default Tracking
