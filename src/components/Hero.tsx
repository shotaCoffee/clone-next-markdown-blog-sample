import * as React from 'react'
import Link from 'next/link'

interface IHero {
  backgroundClass: string,
  topLinks: ITopLinks[],
  heroTitle: string,
  subtitle: string,
}

export interface ITopLinks {
  text: string,
  href: string
}

function Hero(props: IHero) {
  return (
    <div className={`relative tc ${props.backgroundClass ? props.backgroundClass : 'bg-mid-gray'}`}>
      <div className="mw7 center white pv4">
        <div className="pv4">
          <h1 className="f1 normal lh-title ma0 pa0">
            <Link href="/">
              <a className="white no-underline" href="/">
                {props.heroTitle}
              </a>
            </Link>
          </h1>
          <h4 className="normal o-70 ma0 pt2 pb3 ph1">
            {props.subtitle}
          </h4>
          <div>
            {props.topLinks && props.topLinks.length > 0 && (
              props.topLinks.map((link, i) => {
                return link.href.indexOf('http') === -1 ? (
                  <Link href={link.href} key={i}>
                    <a className="dib f6 white no-underline pa1 ma1" key={i}>
                      {link.text}
                    </a>
                  </Link>
                ) : (
                  <a className="dib f6 white no-underline pa1 ma1" href={link.href} key={i}>
                    {link.text}
                  </a>
                )
              })
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
