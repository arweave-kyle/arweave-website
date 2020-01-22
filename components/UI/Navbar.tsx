import * as React from "react"

const NavBar: React.FunctionComponent = () => (
  <nav className="nav-main">
    <a href="/" className="nav-logo"><img src="/nav-logo.svg" /></a>
    <a href="/" className="btn primary desktop">GET FREE TOKEN</a>
    <a href="/" className="btn mobile">FREE TOKEN</a>
  </nav>
)

export default NavBar