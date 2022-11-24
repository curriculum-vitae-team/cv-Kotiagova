import { Employee } from '../EmployeesList'

export const useColumns = (searchedEmployee: string) => {
  return [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      filteredValue: [searchedEmployee],
      key: 'firstName',
      width: '15%',
      onFilter: (value: string, record: Employee) =>
        record.firstName.toLowerCase().includes(value.toLowerCase()) ||
        record.lastName.toLowerCase().includes(value.toLowerCase()),
      sorter: (a: Employee, b: Employee) => a.firstName.localeCompare(b.firstName)
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      width: '15%',
      sorter: (a: Employee, b: Employee) => a.lastName.localeCompare(b.lastName)
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '30%',
      sorter: (a: Employee, b: Employee) => a.email.localeCompare(b.email)
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      width: '20%',
      sorter: (a: Employee, b: Employee) => a.department.localeCompare(b.department)
    },
    {
      title: 'Specialization',
      dataIndex: 'specialization',
      key: 'specialization',
      width: '20%',
      sorter: (a: Employee, b: Employee) => a.specialization.localeCompare(b.specialization)
    }
  ]
}
