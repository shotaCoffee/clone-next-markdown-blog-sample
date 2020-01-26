import * as React from 'react'
import Header from './Header'
import Hero, {ITopLinks} from './Hero'
import Footer from './Footer'
import Tracking from './Tracking'

interface IPage {
    siteTitle: string,
    heroTitle: string,
    description: string,
    stylesheets?: [],
    topLinks?: ITopLinks[],
    siteId: string,
    body?: object,
    copyright?: string,
    backgroundClass?: string
}

const defaultStyleSheets = [
    'https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css'
];

function Page(props: IPage) {
    return (
        <div>
            <Header
                siteTitle={props.siteTitle}
                description={props.description}
                stylesheets={props.stylesheets ? props.stylesheets : defaultStyleSheets}
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
