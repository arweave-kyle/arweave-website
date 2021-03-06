import *  as React from "react"
import SidebarMenuSection from "./SidebarMenuSection"

const developmentTreeData = [
  {
    key: 'mine',
    label: 'mine',
    nodes: [
      {
        key: 'mine-welcome',
        label: 'welcome to arweave',
        nodes: [],
        url: '/mine/welcome'
      }, {
        key: 'mine-about-us',
        label: 'about us',
        nodes: [],
        url: '/mine/about'
      },
      {
        key: 'mine-Home',
        label: 'homepage',
        nodes: [],
        url: '/'
      }
    ],
  },
  {
    key: 'archive',
    label: 'archive',
    nodes: [
      {
        key: 'archive-sub1',
        label: 'sub header 1',
        nodes: [],
        url: 'https://google.com'
      }
    ]
  },
  {
    key: 'deploy',
    label: 'deploy',
    nodes: [
      {
        key: 'deploy-sub1',
        label: 'sub header 1',
        nodes: [],
        url: 'https://google.com'
      }
    ]
  }
];

const technologyTreeData = [
  {
    key: 'wallet',
    label: 'wallet',
    nodes: [
      {
        key: 'wallet-sub1',
        label: 'sub header 1',
        nodes: [],
        url: 'https://google.com'
      }, {
        key: 'wallet-sub2',
        label: 'sub header 2',
        nodes: [],
        url: 'https://google.com'
      },
      {
        key: 'wallet-sub3',
        label: 'sub header 3',
        nodes: [],
        url: 'https://google.com'
      }
    ],
  },
  {
    key: 'playground',
    label: 'playground',
    isNew: true,
    url: '/playground'
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
        label: 'sub header 1',
        nodes: [],
        url: 'https://google.com'
      }, {
        key: 'showcase-sub2',
        label: 'sub header 2',
        nodes: [],
        url: 'https://google.com'
      }
    ]
  },
  {
    key: 'hackathon',
    label: 'hackathon',
    nodes: [
      {
        key: 'hackathon-sub1',
        label: 'sub header 1',
        nodes: [],
        url: 'https://google.com'
      }
    ]
  },
  {
    key: 'blog',
    label: 'blog',
    isNew: true,
    url: '/blog'
  }
];

const faqTreeData = [
  {
    key: 'permaweb',
    label: 'what is permaweb?',
    nodes: [
      {
        key: 'permaweb-sub1',
        label: 'sub header 1',
        nodes: [],
        url: 'https://google.com'
      }
    ]
  },
  {
    key: 'ourtech',
    label: 'our technology',
    nodes: [
      {
        key: 'hackathon-sub1',
        label: 'sub header 1',
        nodes: [],
        url: 'https://google.com'
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