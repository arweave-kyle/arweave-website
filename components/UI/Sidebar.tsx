import * as React from "react"
import Link from "next/link"
import SidebarMenu from "./SidebarMenu"

const Sidebar: React.FunctionComponent = () => {
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
        <div className="close-icon" onClick={() => setOpen(false)}>
          <img src="images/icons/close.svg" />
          <span>{" "}close</span>
        </div>
        <div className='sidebar__content__inner'>
          <SidebarMenu />
        </div>
      </div>
    </div>
  )
}

export default Sidebar