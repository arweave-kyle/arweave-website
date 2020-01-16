import * as React from 'react'
import Head from 'next/head'
import Footer from './footer'
import NavBar from './navbar'
import SideBar from './sidebar'
import SideBarMobile from './sidebarMobile'

type Props = {
  title?: string,
  desc?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Arweave',
  desc = 'Arweave is a global, permanent hard drive built on two novel technologies: the blockweave, a derivative of the blockchain, and proof of access, a custom incentivised proof of work algorithm. These innovations provide truly permanent data storage for the very first time and at a massive scale.'
}) => {

  return (
    <div className="layout">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content={desc} />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <div className="layout__inner">
        <SideBar />
        <SideBarMobile />
        <div className="main">
          <NavBar />
          <div className="main__content">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout