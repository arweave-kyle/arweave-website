import * as React from "react"
import Link from "next/link"

const NavBar: React.FunctionComponent = () => (
  <nav className="nav-main">
    <h3>arweave.org</h3>
    <Link href="/">
      <a className="btn primary">try for free</a>
    </Link>
  </nav>
)

export default NavBar