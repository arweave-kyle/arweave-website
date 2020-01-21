import * as React from "react"
import Link from "next/link"

const NavBar: React.FunctionComponent = () => (
  <nav className="nav-main">
    <Link href="/">
      <a className="nav-logo"><img src="/nav-logo.svg" /></a>
    </Link>
    <Link href="/">
      <a className="btn primary desktop">GET FREE TOKEN</a>
    </Link>
    <Link href="/">
      <a className="btn mobile">FREE TOKEN</a>
    </Link>
  </nav>
)

export default NavBar