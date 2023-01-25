import React, { useState } from 'react'

import NewResumeModal from '@/components/NewResumeModal/NewResumeModal'
import ResumesList from '@/components/ResumesList/ResumesList'
import AssignResumeModal from '@/pages/helpers/AssignResumeModal/AssignResumeModal'

import useBindResume from './hooks/useBindResume'

import { DefaultButton, PrimaryButton } from '@/UI/buttons'
import { StyledButtonContainer } from './CVs.style'
import useUnbindResume from './hooks/useUnbindResume'

type CVsProps = {
  id: string
  CVsData: CV[]
  canEdit: boolean
  isEmployeeFetching: boolean
}

const CVs: React.FC<CVsProps> = ({ CVsData, id, canEdit, isEmployeeFetching }) => {
  const [isNewResumeModalOpen, setIsNewResumeModalOpen] = useState(false)
  const [isAssignResumeModalOpen, setIsAssignResumeModalOpen] = useState(false)
  const { bindResume, isFetching: isResumeFetching } = useBindResume()
  const { unbindResume, isFetching: isUnbindFetching } = useUnbindResume()

  const toggleNewResumeModalOpen = () => {
    setIsNewResumeModalOpen((p) => !p)
  }

  const toggleAssignResumeModalOpen = () => {
    setIsAssignResumeModalOpen((p) => !p)
  }

  const isFetching = isEmployeeFetching || isResumeFetching || isUnbindFetching

  return (
    <>
      <ResumesList
        canEdit={canEdit}
        isFetching={isFetching}
        unbindResume={unbindResume}
        CVsData={CVsData}
      />
      {canEdit && (
        <>
          <StyledButtonContainer>
            <PrimaryButton onClick={toggleNewResumeModalOpen}>Create CV</PrimaryButton>
            <DefaultButton onClick={toggleAssignResumeModalOpen}>Assign Existing One</DefaultButton>
          </StyledButtonContainer>
          <NewResumeModal
            toggleOpen={toggleNewResumeModalOpen}
            isNewResumeModalOpen={isNewResumeModalOpen}
          />
          <AssignResumeModal
            employeeId={id}
            bindResume={bindResume}
            toggleOpen={toggleAssignResumeModalOpen}
            isAssignResumeModalOpen={isAssignResumeModalOpen}
          />
        </>
      )}
    </>
  )
}

export default CVs
