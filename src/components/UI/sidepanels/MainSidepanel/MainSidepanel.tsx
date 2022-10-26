import React from 'react'
import css from './MainSidepanel.module.css'
import Sidepanel from '@/components/UI/sidepanels/Sidepanel'

const MainSidepanel: React.FC = () => {
  return (
    //TODO: icons
    <Sidepanel
      items={[
        { label: 'Dashboard', key: 'Dashboard' },
        { label: 'Employees', key: 'Employees' },
        { label: 'Projects', key: 'Projects' },
        { label: 'go back', key: 'back', css: css.last }
      ]}
      css={css.menu}
    />
  )
}

export default MainSidepanel
