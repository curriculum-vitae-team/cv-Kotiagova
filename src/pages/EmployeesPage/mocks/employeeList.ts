import { nanoid } from 'nanoid'
import { Employee } from './../../../components/EmployeesList/EmployeesList'

export const mockEmployeeList: Employee[] = [
  {
    key: nanoid(),
    firstName: 'Vasya',
    lastName: 'Pupkin',
    email: 'Vasya.Pupkin@gmail.com',
    department: 'JavaScript',
    specialization: 'React'
  },
  {
    key: nanoid(),
    firstName: 'Anton',
    lastName: 'Mihailov',
    email: 'Anton.Mihailov@gmail.com',
    department: 'JavaScript',
    specialization: 'Angular'
  },
  {
    key: nanoid(),
    firstName: 'Kirill',
    lastName: 'Sadovnikov',
    email: 'Kirill.Sadovnikov@gmail.com',
    department: 'JavaScript',
    specialization: 'Vue'
  },
  {
    key: nanoid(),
    firstName: 'Mihail',
    lastName: 'Novoselov',
    email: 'Mihail.Novoselov@gmail.com',
    department: 'JavaScript',
    specialization: 'Svetle'
  }
]
