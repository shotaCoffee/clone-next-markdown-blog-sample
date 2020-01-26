import * as React from 'react'
import { withRouter } from 'next/router'
import Page from '../src/components/Page'
import PagePreview from '../src/components/PagePreview'
import { formatDate } from '../src/utils/date'
// @ts-ignore
import CONFIG from '../content/index.json'
// @ts-ignore
import SUMMARY_JSON from '../content/summary.json'
import styled from 'styled-components';

function Index(props: any) {
  const pageJson = props.pageJson

  return (
    <div>
      <Page
        title={`${CONFIG.siteTitle} | ${pageJson && pageJson.title}`}
        heroTitle={CONFIG.siteTitle}
        description={CONFIG.description}
        stylesheets={CONFIG.stylesheets as []}
        topLinks={CONFIG.topLinks}
        backgroundClass={CONFIG.backgroundClass}
        body={Body(pageJson)}
        copyright={CONFIG.copyright}
        siteId={CONFIG.siteId}
        meta={pageJson.meta}
        image={''}
        keywords={pageJson.keywords}
        url={pageJson.url} />
    </div>
  )
}

function Body(props: any = {}) {
  return (
    <StyledBody className="content center mw6 pa3 pa4-ns">
      <h1 className="mt0 lh-title">{props.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.bodyHtml }} />
    </StyledBody>
  )
}

Index.getInitialProps = async function (req: any) {
  if (req.pathname === '/post') {
    return import(`../content${
      req.query.filePath ? req.query.filePath
        .replace('content', '')
        .replace('.json', '') : req.query.fullUrl
    }.json`)
      .then((d) => {
        return {
          pageJson: d.default
        }
      }).catch((e) => {
        console.log(e)
      })
  }
  return {}
}

export default withRouter(Index)


const StyledBody = styled.div`
  * + * {
    margin-top: 1rem;
  }
  ul, ol {
    list-style-position: inside;
  }
  pre {
    white-space: pre-wrap;
    padding: 1rem;
    background-color: rgba(0,0,0,0.6);
    color: #FFF;
  }
`;
