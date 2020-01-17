import * as React from "react"
import TreeMenu, { TreeNodeInArray, ItemComponent } from 'react-simple-tree-menu';

type Props = {
  name: string,
  treeData: TreeNodeInArray[],
}

const SideBarMenuSection: React.FunctionComponent<Props> = ({
  name = "Menu Section",
  treeData = []
}) => {
  return (
    <div className="menu-section">
      <h4>{name}</h4>
      <div className="tree-menu__container">
        <TreeMenu data={treeData} hasSearch={false} >
          {({ search, items }) => (
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

export default SideBarMenuSection