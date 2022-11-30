export const useColumns = (searchedEmployee: string) => {
  return [
    {
      title: 'First Name',
      dataIndex: 'profile',
      filteredValue: [searchedEmployee],
      key: 'firstName',
      width: '15%',
      render: (item) => item.first_name || 'Unknown',
      onFilter: (value: string, record: Employee) =>
        (record.profile.first_name ?? 'Unknown')?.toLowerCase().includes(value.toLowerCase()) ??
        (record.profile.last_name ?? 'Unknown')?.toLowerCase().includes(value.toLowerCase()),
      sorter: (a: Employee, b: Employee) =>
        a.profile.first_name?.localeCompare(b.profile.first_name)
    },
    {
      title: 'Last Name',
      dataIndex: 'profile',
      key: 'lastName',
      width: '15%',
      render: (item) => item.last_name || 'Unknown',
      sorter: (a: Employee, b: Employee) => a.profile.last_name?.localeCompare(b.profile.last_name)
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
      render: (department) => (!department ? 'Unknown' : department.name)
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
      width: '20%',
      render: (position) => (!position ? 'Unknown' : position.name)
    }
  ]
}
