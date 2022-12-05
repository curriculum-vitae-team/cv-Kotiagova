type Profile = EmployeesPageUser['profile']
type Department = EmployeesPageUser['department']
type Position = EmployeesPageUser['position']

const hasSearchValue = (searchValue: string, name?: string) =>
  (name ?? '').search(new RegExp(searchValue, 'i')) === 0

const filterByName = (value: string, record: EmployeesPageUser) =>
  hasSearchValue(value, record.profile.first_name) ||
  hasSearchValue(value, record.profile.last_name)

const sortByFirstName = (a: EmployeesPageUser, b: EmployeesPageUser) =>
  a.profile.first_name?.localeCompare(b.profile.first_name)

const sortByLastName = (a: EmployeesPageUser, b: EmployeesPageUser) =>
  a.profile.last_name?.localeCompare(b.profile.last_name)

export const useColumns = (searchedEmployee: string) => {
  return [
    {
      title: 'First Name',
      dataIndex: 'profile',
      filteredValue: [searchedEmployee],
      key: 'firstName',
      width: '15%',
      render: (profile: Profile) => profile?.first_name || 'Unknown',
      onFilter: filterByName,
      sorter: sortByFirstName
    },
    {
      title: 'Last Name',
      dataIndex: 'profile',
      filteredValue: [searchedEmployee],
      key: 'lastName',
      width: '15%',
      render: (profile: Profile) => profile?.last_name || 'Unknown',
      sorter: sortByLastName
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '30%'
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      width: '20%',
      render: (department: Department) => department?.name || 'Unknown'
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
      width: '20%',
      render: (position: Position) => position?.name || 'Unknown'
    }
  ]
}
