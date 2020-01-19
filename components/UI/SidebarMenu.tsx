import *  as React from "react"
import SidebarMenuSection from "./SidebarMenuSection"

const developmentTreeData = [
  {
    key: 'mine',
    label: 'mine',
    class: 'primary',
    nodes: [
      {
        key: 'mine-welcome',
        label: 'Welcome to Arweave',
        nodes: [],
        url: '/mine/welcome'
      }, {
        key: 'mine-about-us',
        label: 'About us',
        nodes: [],
        url: '/mine/about'
      },
      {
        key: 'mine-sub3',
        label: 'Sub header 3',
        nodes: [],
        url: '/'
      }
    ],
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
        url: '/'
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
        url: '/'
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
        url: '/'
      }, {
        key: 'wallet-sub2',
        label: 'Sub header 2',
        nodes: [],
        url: '/'
      },
      {
        key: 'wallet-sub3',
        label: 'Sub header 3',
        nodes: [],
        url: '/'
      }
    ],
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
        url: '/'
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
        url: '/'
      }, {
        key: 'showcase-sub2',
        label: 'Sub header 2',
        nodes: [],
        url: '/'
      }
    ]
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
        url: '/'
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
        url: '/'
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
        url: '/'
      }
    ]
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
        url: '/'
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