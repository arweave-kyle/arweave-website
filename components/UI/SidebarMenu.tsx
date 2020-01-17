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
    isNew: true,
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

const communityTreeData = [
  {
    key: 'showcase',
    label: 'showcase',
    class: 'primary',
    nodes: [
      {
        key: 'showcase-sub1',
        label: 'Sub header 1',
        nodes: [],
        url: 'https://www.google.com/search?q=canidae'
      }, {
        key: 'showcase-sub2',
        label: 'Sub header 2',
        nodes: [],
        url: 'https://www.google.com/search?q=canidae'
      }
    ],
    url: 'https://www.google.com/search?q=mammal'
  },
  {
    key: 'hackathon',
    label: 'hackathon',
    class: 'primary',
    nodes: [
      {
        key: 'hackathon-sub1',
        label: 'Sub header 1',
        nodes: [],
        url: 'https://www.google.com/search?q=canidae'
      }
    ]
  },
  {
    key: 'blog',
    label: 'blog',
    class: 'primary',
    isNew: true,
    nodes: [
      {
        key: 'blog-sub1',
        label: 'Sub header 1',
        nodes: [],
        url: 'https://www.google.com/search?q=canidae'
      }
    ]
  }
];

const faqTreeData = [
  {
    key: 'permaweb',
    label: 'what is permaweb?',
    class: 'primary',
    nodes: [
      {
        key: 'permaweb-sub1',
        label: 'Sub header 1',
        nodes: [],
        url: 'https://www.google.com/search?q=canidae'
      }
    ],
    url: 'https://www.google.com/search?q=mammal'
  },
  {
    key: 'ourtech',
    label: 'our technology',
    class: 'primary',
    nodes: [
      {
        key: 'hackathon-sub1',
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
      <SidebarMenuSection name="Community" treeData={communityTreeData} />
      <SidebarMenuSection name="Faq" treeData={faqTreeData} />
    </div>
  )
}

export default SidebarMenu;