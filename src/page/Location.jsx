import React from 'react'
import Table from '../components/Table';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'locationName',
    headerName: 'Location Name',
    width: 200,
    editable: true,
  },
  {
    field: 'latitude',
    headerName: 'Latitude',
    width: 150,
    editable: true,
  },
  {
    field: 'longitude',
    headerName: 'Longitude',
    width: 150,
    editable: true,
  },
];

const rows = [
  { id: 1, locationName: 'New York', latitude: 40.7128, longitude: -74.006 },
  { id: 2, locationName: 'London', latitude: 51.5074, longitude: -0.1278 },
  { id: 3, locationName: 'Tokyo', latitude: 35.6895, longitude: 139.6917 },
  { id: 4, locationName: 'Sydney', latitude: -33.8688, longitude: 151.2093 },
  { id: 5, locationName: 'Paris', latitude: 48.8566, longitude: 2.3522 },
  // Add more rows as needed
];

const Location = () => {
  return (
    <div className='w-full flex-col gap-8'>
      <h1 className="text-2xl font-bold resize justify-center  text-gray-900 dark:text-white"> Location</h1>
      <Table rows={rows} columns={columns} sx={{ mt: '16px' }} />
    </div>
  )
}

export default Location
