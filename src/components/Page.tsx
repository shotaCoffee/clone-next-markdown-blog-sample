import * as React from 'react'
import Header, {defaultKeyword, defaultStyleSheets, defaultUrl} from './Header'
import Hero, {ITopLinks} from './Hero'
import Footer from './Footer'
import Tracking from './Tracking'

interface IPage {
  title: string,
  heroTitle: string,
  description: string,
  stylesheets?: [],
  topLinks?: ITopLinks[],
  siteId: string,
  body?: object,
  copyright?: string,
  backgroundClass?: string,
  keyword?: string
  url?: string
  meta?: []
}

function Page(props: IPage) {
  return (
    <div>
      <Header
        title={props.title}
        description={props.description}
        stylesheets={props.stylesheets ? props.stylesheets : defaultStyleSheets}
        image={''}
        keyword={props.keyword ? props.keyword : defaultKeyword}
        url={props.url ? props.url : defaultUrl}
        meta={props.meta}
      />
      <main className="lh-copy">
        <Hero
          heroTitle={props.heroTitle}
          subtitle={props.description}
          topLinks={props.topLinks ? props.topLinks : []}
          backgroundClass={props.backgroundClass ? props.backgroundClass : 'bg-dark-gray'}
        />

        {props.body}

        <Footer copyright={props.copyright ? props.copyright : ''}/>
        {props.siteId && (
          <Tracking siteId={props.siteId}/>
        )}
      </main>
    </div>
  )
}

export default Page
