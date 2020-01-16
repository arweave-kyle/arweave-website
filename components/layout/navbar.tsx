import * as React from "react"
import Link from "next/link"

const NavBar: React.FunctionComponent = () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>{' '}
    |{' '}
    <Link href="/about">
      <a>About</a>
    </Link>{' '}
    |{' '}
    <Link href="/users">
      <a>Users List</a>
    </Link>
  </nav>
)

export default NavBar