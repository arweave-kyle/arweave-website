import * as React from "react"
import Link from "next/link"

const SideBar: React.FunctionComponent = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`} >
      <nav>
        <div className='icon' onClick={() => setOpen(!isOpen)} >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <div className={`sidebar__content ${isOpen ? "open" : "closed"}`}>
        <div className='sidebar__content__inner'>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/users">
            <a>Users List</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SideBar