import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components';

interface IHero extends INavigation {
  backgroundClass: string,
  heroTitle: string,
  subtitle: string, // FIXME remove me
}

export interface ITopLinks {
  text: string,
  href: string
}

interface INavigation {
  topLinks: ITopLinks[]
}

function Hero(props: IHero) {
  return (
    <StyledHeader>
      <div>
        <div>
          <h1>
            <Link href="/">
              <a href="/">
                {props.heroTitle}
              </a>
            </Link>
          </h1>
        </div>
        <Navigation topLinks={props.topLinks}/>
      </div>
    </StyledHeader>
  )
}

function Navigation(props: INavigation) {
  return (
    <StyledNav>
      {props.topLinks && props.topLinks.length > 0 && (
        props.topLinks.map((link, i) => {
          return link.href.indexOf('http') === -1 ? (
            <Link href={link.href} key={i}>
              <a key={i}>
                {link.text}
              </a>
            </Link>
          ) : (
            <a href={link.href} key={i}>
              {link.text}
            </a>
          )
        })
      )}
    </StyledNav>
  )
}

export default Hero

const StyledHeader = styled.header`
  background-color: rgba(0,0,0,0.6);
  color: #fff;
  
  > div {
    padding: 0 2rem;
    max-width: 32rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  a {
    text-decoration: none;
    color: #fff;
  }
`;

const StyledNav = styled.nav`
  a + a {
    margin-left: 1rem;
  }
`;
