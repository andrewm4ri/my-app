import React from 'react';
import Table from '../components/Table';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'Birthdate',
    headerName: 'Birthdate',
    width: 110,
    valueGetter: (value, row) => `${row.birthdate}`,
  },
];

const rows = [
  { id: 1, location: 'Philippines', birthdate: '01/23/2000', lastName: 'Snow', firstName: 'Jon' },
  { id: 2, location: 'USA', birthdate: '01/23/2000', lastName: 'Lannister', firstName: 'Cersei' },
  { id: 3, location: 'Legazpi', birthdate: '01/23/2000', lastName: 'Lannister', firstName: 'Jaime' },
  { id: 4, location: 'Legazpi', birthdate: '01/23/2000', lastName: 'Stark', firstName: 'Arya' },
  { id: 5, location: 'USA', birthdate: '01/23/2000', lastName: 'Targaryen', firstName: 'Daenerys', },
  { id: 6, location: 'Canada', birthdate: '01/23/2000', lastName: 'Melisandre', firstName: 'Andrew', },
  { id: 7, location: 'Philippines', birthdate: '01/23/2000', lastName: 'Clifford', firstName: 'Ferrara' },
  { id: 8, location: 'Philippines', birthdate: '01/23/2000', lastName: 'Frances', firstName: 'Rossini' },
  { id: 9, location: 'Canada', birthdate: '01/23/2000', lastName: 'Roxie', firstName: 'Harvey' },
];

const Users = () => {
  return (
    <div className='w-full flex-col gap-8'>
      <h1 className="text-2xl font-bold resize justify-center  text-gray-900 dark:text-white">  Users</h1>
      <Table rows={rows} columns={columns} sx={{ mt: '16px' }} />
    </div>
  );
};

export default Users;
