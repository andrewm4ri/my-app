import React from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/')
  }
  const users = useSelector((state) => state.users)
  console.log(users)

  console.log(location)
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="h-full  w-64 shadow-lg bg-slate-300 dark:bg-gray-800 text-gray-800 dark:text-white flex flex-col justify-between ">
        <div className="py-4">
          <h1 className="text-2xl font-bold text-center dark:text-white">Dashboard</h1>
          <nav className="mt-6 px-4">
            <ul>
              <li className="mb-4 ">
                <Link to={"dashboard"}>
                  <a className={location.pathname === '/dashboard' ? "block px-6  py-3 bg-slate-200 dark:bg-gray-700 rounded-full" : "block px-6 py-3 hover:bg-slate-200 dark:hover:bg-gray-700 rounded-full"}>
                    Dashboard
                  </a>
                </Link>
              </li>
              <li className="mb-4 ">
                <Link to={"users"}>
                  <a className={location.pathname === '/dashboard/users' ? "block px-6  py-3 bg-slate-200 dark:bg-gray-700 rounded-full" : "block px-6 py-3 hover:bg-slate-200 dark:hover:bg-gray-700 rounded-full"}>
                    Users
                  </a>
                </Link>
              </li>
              <li className="mb-4">
                <Link to={"location"}>
                  <a className={location.pathname === '/dashboard/location' ? "block px-6  py-3 bg-slate-200 dark:bg-gray-700 rounded-full" : "block px-6 py-3 hover:bg-slate-200 dark:hover:bg-gray-700 rounded-full"}>
                    Location
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="py-4 px-8 w-full flex justify-center">
          <Button fullWidth variant="outlined" sx={{ borderRadius: '20px', textDecoration: 'none', textTransform: 'none' }} onClick={handleLogout}>Logout</Button>
        </div>
      </div>


      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* App Bar */}
        <div className="h-16 bg-slate-200 dark:bg-gray-800 text-gray-800 dark:text-white flex items-center flex-row-reverse justify-between px-4">
          <h2 className="text-lg font-200 dark:text-white">{users[0]?.email}</h2>
        </div>

        {/* Content Area */}
        <div className="p-8 overflow-y-auto">
          <div className='h-[80vh] w-full  bg-slate-50 dark:bg-slate-700 rounded-2xl shadow-md flex justify-start p-6'>
            {
              location.pathname === '/dashboard' &&
              <h1 className="text-2xl font-bold cursor-pointer resize justify-center  text-gray-900 dark:text-white">Welcome to dashboard!</h1>
            }
            <Outlet />
          </div>
          {/* <Users /> */}
          {/* <Locations /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
