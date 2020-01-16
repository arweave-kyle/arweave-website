import *  as React from "react"
import SidebarMenuSection from "./SideBarMenuSection"

const developmentTreeData = [
  {
    key: 'mine',
    label: 'mine',
    class: 'primary',
    nodes: [
      {
        key: 'mine-sub1',
        label: 'Sub header 1',
        nodes: [],
        url: 'https://www.google.com/search?q=canidae'
      }, {
        key: 'mine-sub2',
        label: 'Sub header 2',
        nodes: [],
        url: 'https://www.google.com/search?q=canidae'
      },
      {
        key: 'mine-sub3',
        label: 'Sub header 3',
        nodes: [],
        url: 'https://www.google.com/search?q=canidae'
      }
    ],
    url: 'https://www.google.com/search?q=mammal'
  },
  {
    key: 'archive',
    label: 'archive',
    class: 'primary',
    nodes: [
      {
        key: 'archive-sub1',
        label: 'Sub header 1',
        nodes: [],
        url: 'https://www.google.com/search?q=canidae'
      }
    ]
  },
  {
    key: 'deploy',
    label: 'deploy',
    class: 'primary',
    nodes: [
      {
        key: 'deploy-sub1',
        label: 'Sub header 1',
        nodes: [],
        url: 'https://www.google.com/search?q=canidae'
      }
    ]
  }
];

const technologyTreeData = [
  {
    key: 'wallet',
    label: 'wallet',
    class: 'primary',
    nodes: [
      {
        key: 'wallet-sub1',
        label: 'Sub header 1',
        nodes: [],
        url: 'https://www.google.com/search?q=canidae'
      }, {
        key: 'wallet-sub2',
        label: 'Sub header 2',
        nodes: [],
        url: 'https://www.google.com/search?q=canidae'
      },
      {
        key: 'wallet-sub3',
        label: 'Sub header 3',
        nodes: [],
        url: 'https://www.google.com/search?q=canidae'
      }
    ],
    url: 'https://www.google.com/search?q=mammal'
  },
  {
    key: 'playground',
    label: 'playground',
    class: 'primary',
    nodes: [
      {
        key: 'playground-sub1',
        label: 'Sub header 1',
        nodes: [],
        url: 'https://www.google.com/search?q=canidae'
      }
    ]
  }
];

const SidebarMenu: React.FunctionComponent = () => {

  return (
    <div className="sidebar-menu">
      <SidebarMenuSection name="Development" treeData={developmentTreeData} />
      <SidebarMenuSection name="Technology" treeData={technologyTreeData} />
    </div>
  )
}

export default SidebarMenu;