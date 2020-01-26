import * as React from 'react'
import Header, {defaultKeyword, defaultStyleSheets, defaultUrl, IHeader} from './Header'
import Hero, {ITopLinks} from './Hero'
import Footer from './Footer'
import Tracking, {ITracking} from './Tracking'

export interface IHero {
  heroTitle: string,
  topLinks?: ITopLinks[],
  backgroundClass?: string,
}

export interface IFooter {
  copyright?: string,
}

interface IPage extends IHero, IFooter, ITracking, IHeader {
  body?: object,
}

function Page(props: IPage) {
  return (
    <div>
      <Header
        title={props.title}
        description={props.description}
        stylesheets={props.stylesheets ? props.stylesheets : defaultStyleSheets}
        image={props.image}
        keywords={props.keywords ? props.keywords : defaultKeyword}
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
        <Tracking siteId={props.siteId}/>
      </main>
    </div>
  )
}

export default Page
