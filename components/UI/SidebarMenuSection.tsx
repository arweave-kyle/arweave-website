import * as React from "react"
import TreeMenu, { TreeNodeInArray, ItemComponent } from 'react-simple-tree-menu';
import Router from 'next/router'

type Props = {
  name: string,
  treeData: TreeNodeInArray[]
}

function getPath(): string | undefined {
  if (typeof window === 'undefined') return undefined
  return window.location.pathname
}

function findActiveKey(path: string | undefined, nodes: TreeNodeInArray[] | undefined): string | undefined {
  if (!path) return undefined;
  if (!nodes) return undefined;

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]
    const { key, url, nodes: subNodes } = node

    if (url === path) return key
    if (subNodes) {
      const subKey = findActiveKey(path, subNodes)
      if (subKey) return `${key}/${subKey}`
    }
  }

  return undefined
}

const SidebarMenuSection: React.FunctionComponent<Props> = ({
  name = "Menu Section",
  treeData = []
}) => {
  const routePath = getPath()
  const activeKey = findActiveKey(routePath, treeData)
  const openNodes = activeKey ? [activeKey.substring(0, activeKey.lastIndexOf("/"))] : []

  return (
    <div className="menu-section">
      <h4>{name}</h4>
      <div className="tree-menu__container">
        <TreeMenu data={treeData}
          initialActiveKey={activeKey || ""}
          initialOpenNodes={openNodes}
          hasSearch={false}
          onClickItem={({ url }) => {
            if (url) Router.push(url);
          }} >
          {({ items }) => (
            <ul className="rstm-tree-item-group">
              {items.map(({ key, ...props }) => {
                const { level, toggleNode, onClick, isNew } = props;
                return (
                  <div key={key} className={`tree-item-container level-${level} ${isNew ? "new" : ""}`}>
                    <ItemComponent key={key} {...props} onClick={(evt) => {
                      if (toggleNode) { toggleNode() }
                      else { onClick(evt) }
                    }} />
                  </div>
                )
              })}
            </ul>
          )}
        </TreeMenu>
      </div>
    </div>
  )
}

export default SidebarMenuSection