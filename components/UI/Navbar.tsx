import * as React from "react"
import Link from "next/link"

const NavBar: React.FunctionComponent = () => (
  <nav className="nav-main">
    <img src="/favicon-183x183.png" />
    <h3>arweave.org</h3>
    <Link href="/">
      <a className="btn primary desktop">GET FREE TOKEN</a>
    </Link>
    <Link href="/">
      <a className="btn mobile">FREE TOKEN</a>
    </Link>
  </nav>
)

export default NavBar