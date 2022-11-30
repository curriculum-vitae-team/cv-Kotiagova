import { DeleteOutlined } from '@ant-design/icons'
import { Collapse } from 'antd'
import React from 'react'

const { Panel } = Collapse

type PanelType = {
  header: string
  body: any
  //TODO: ?????????????????????????
  extra?: any
}

type CollapseProps = {
  panels: Array<PanelType>
}

const AppCollapse: React.FC<CollapseProps> = (props: CollapseProps) => {
  const { panels } = { ...props }

  const genExtra = () => (
    <DeleteOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation()
      }}
    />
  )
  return (
    <Collapse>
      {panels.map((panel, index) => {
        return (
          <Panel header={panel.header} key={index} extra={genExtra()}>
            <div>{panel.body}</div>
          </Panel>
        )
      })}
    </Collapse>
  )
}

export default AppCollapse
