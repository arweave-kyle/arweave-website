import * as React from "react"
import Link from "next/link"

const SideBarMobile: React.FunctionComponent = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  return (
    <div className={`sidebar-mobile ${isOpen ? "open" : "closed"}`} >
      <nav>
        <div className='icon' onClick={() => setOpen(true)} >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <div className={`sidebar-mobile__content ${isOpen ? "open" : "closed"}`}>
        <div className='sidebar-mobile__content__inner'>
          <div className="close-icon" onClick={() => setOpen(false)}>
            <img src="images/icons/close.svg" />
            <span>{" "}close</span>
          </div>
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

export default SideBarMobile