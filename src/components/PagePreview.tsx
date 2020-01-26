import * as React from 'react'
import Link from 'next/link'

interface IPagePreview {
    title: string,
    href: string,
    preview?: string,
    date?: string,
}

interface IPageLink {
    href: string,
    className?: string,
    children?: any
}

function PageLink(props: IPageLink) {
    return (
        <Link href={`post?fullUrl=${props.href}`} as={props.href}>
            <a className={`b black o-80 glow no-underline lh-solid ${props.className}`}>
                {props.children}
            </a>
        </Link>
    )
}

function PagePreview(props: IPagePreview) {
    return (
        <div className="mb4 pb2 bb b--light-gray">
            <PageLink href={props.href} className="f3">
                {props.title}
            </PageLink>
            {props.preview && (
                <p className="mv1 o-60">
                    {props.preview}
                    <PageLink href={props.href}>
                        <span> »</span>
                    </PageLink>
                </p>
            )}
            {props.date && (
                <small className="db ttu o-40">
                    <time key={new Date(props.date).toISOString()}>
                        {props.date}
                    </time>
                </small>
            )}
        </div>
    )
}

export default PagePreview
