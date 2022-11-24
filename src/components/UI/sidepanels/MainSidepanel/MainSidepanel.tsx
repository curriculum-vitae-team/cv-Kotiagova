import React from 'react'
import Sidepanel from '../Sidepanel'
import { Wrapper } from './MainSidepanel.styles'

const MainSidepanel: React.FC = () => {
  return (
    //TODO: icons

    // https://ant.design/components/layout can be useful
    <Wrapper>
      <Sidepanel
        items={[
          { label: 'Dashboard', key: 'Dashboard' },
          { label: 'Employees', key: 'Employees' },
          { label: 'Projects', key: 'Projects' },
          { label: 'go back', key: 'back' }
        ]}
      />
    </Wrapper>
  )
}

export default MainSidepanel
