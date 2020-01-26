import * as React from 'react'

export interface IFooter {
  copyright: string
}

function Footer(props: IFooter) {
  const now = new Date()

  return (
    <footer className="center w5 f6 tc mt4">
      <p>
        <span>&copy; </span>
        <span>{now.getFullYear()} </span>
        <span>{props.copyright}</span>
      </p>
    </footer>
  )
}

export default Footer
