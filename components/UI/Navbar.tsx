import * as React from "react"
import Link from "next/link"

const NavBar: React.FunctionComponent = () => (
  <nav className="nav-main">
    <h3>arweave.org</h3>
    <Link href="/">
      <a className="btn primary desktop">try for free</a>
    </Link>
    <Link href="/">
      <a className="btn mobile">try now</a>
    </Link>
  </nav>
)

export default NavBar