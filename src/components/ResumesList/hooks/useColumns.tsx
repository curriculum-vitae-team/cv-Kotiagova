import React from 'react'

import { GhostButton } from '@/UI/buttons'

export const useColumns = (unbindResume: (id: string) => void) => {
  return [
    {
      title: 'Name',
      key: 'name',
      render: (cv: CV) => cv?.name || 'Unknown'
    },
    {
      title: 'Description',
      key: 'description',
      render: (cv: CV) => cv?.description || 'Unknown'
    },
    {
      title: 'Actions',
      key: 'actions',
      width: '10%',
      render: (cv: CV) => <GhostButton onClick={() => unbindResume(cv.id)}>Unbind</GhostButton>
    }
  ]
}
