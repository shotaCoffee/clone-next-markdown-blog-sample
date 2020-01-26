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
  return (
    <div>
      <script dangerouslySetInnerHTML={{ __html: getGaScript(props.siteId) }} />
    </div>
  )
}

export default Tracking
