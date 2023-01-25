import { useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/state'

import { UPDATE_EMPLOYEE } from '@/GraphQL/mutations'
import { useMutation } from '@apollo/client'

import { UpdateEmployeeFormValues } from '@/components/UpdateEmployeeForm/types'
import { setEmployees } from '@/features/employees/employeesSlice'
import { setSelectedEmployee } from '@/features/selectedEmployee/selectedEmployeeSlice'

const useUpdateEmployee = () => {
  const [updateEmployeeMutation] = useMutation(UPDATE_EMPLOYEE)
  const [isFetching, setIsFetching] = useState(false)

  const { employees } = useAppSelector((state) => state)
  const dispatch = useAppDispatch()

  const selectedEmployee = useAppSelector((state) => state.selectedEmployee)

  const updateEmployee = (updateFormValues: UpdateEmployeeFormValues) => {
    const ids = selectedEmployee?.cvs?.length ? selectedEmployee.cvs.map((cv) => cv.id) : []

    setIsFetching(true)
    updateEmployeeMutation({
      variables: {
        id: selectedEmployee.id,
        user: {
          departmentId: updateFormValues.departmentId || selectedEmployee?.department?.id || '',
          positionId: updateFormValues.positionId || selectedEmployee?.position?.id || '',
          cvsIds: ids,
          profile: {
            first_name: updateFormValues.first_name ?? '',
            last_name: updateFormValues.last_name ?? '',
            skills: selectedEmployee.profile.skills,
            languages: selectedEmployee.profile.languages
          }
        }
      }
    })
      .then(({ data }) => {
        const updateUser: Employee = data.updateUser
        dispatch(setSelectedEmployee(updateUser))
        if (employees.length) {
          dispatch(
            setEmployees(
              employees.map((employee) => (employee.id === updateUser.id ? updateUser : employee))
            )
          )
        }
      })
      .catch(console.error)
      .finally(() => setIsFetching(false))
  }

  return { updateEmployee, isFetching }
}

export { useUpdateEmployee }
