import { useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/state'

import { ADD_EMPLOYEE } from '@/GraphQL/mutations'
import { useMutation } from '@apollo/client'

import { setEmployees } from '@/features/employees/employeesSlice'
import { AddEmployeeFormValues } from '../types'

const useAddEmployee = () => {
  const [addEmployeeMutation] = useMutation(ADD_EMPLOYEE)
  const dispatch = useAppDispatch()
  const [isFetching, setIsFetching] = useState(false)

  const employees = useAppSelector((state) => state.employees)

  const addEmployee = (addFormValues: AddEmployeeFormValues) => {
    setIsFetching(true)
    addEmployeeMutation({
      variables: {
        user: {
          auth: {
            email: addFormValues.email,
            password: addFormValues.password
          },
          profile: {
            first_name: addFormValues.first_name ?? '',
            last_name: addFormValues.last_name ?? '',
            skills: [],
            languages: []
          },
          cvsIds: [],
          role: 'employee',
          departmentId: addFormValues.department_id ?? '',
          positionId: addFormValues.position_id ?? ''
        }
      }
    })
      .then(({ data }) => {
        const createUser: Employee = data.createUser
        dispatch(setEmployees(employees.concat(createUser)))
      })
      .catch(console.error)
      .finally(() => {
        setIsFetching(false)
      })
  }

  return { addEmployee, isFetching }
}

export { useAddEmployee }
