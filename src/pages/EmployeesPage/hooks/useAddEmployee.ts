import { useState } from 'react'
import { bindActionCreators } from 'redux'

import { actionCreators, useAppDispatch, useAppSelector } from '@/state'

import { ADD_EMPLOYEE } from '@/GraphQL/mutations'
import { useMutation } from '@apollo/client'

const useAddEmployee = () => {
  const [addEmployeeMutation] = useMutation(ADD_EMPLOYEE)
  const dispatch = useAppDispatch()
  const [isFetching, setIsFetching] = useState(false)

  const employees = useAppSelector((state) => state.employees)

  const { setEmployeeList } = bindActionCreators(actionCreators, dispatch)

  const addEmployee = (addFormValues) => {
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
          departmentId: '1',
          positionId: '1'
        }
      }
    })
      .then(({ data: { createUser } }) => {
        setEmployeeList(employees.concat(createUser))
      })
      .catch(console.error)
      .finally(() => {
        setIsFetching(false)
      })
  }

  return { addEmployee, isFetching }
}

export default useAddEmployee
