import "./App.css";
import Dashboard from "./page/Dashboard";
import Login from "./page/Login";
import Loading from "./page/Loading";
import Users from "./page/Users";
import Location from "./page/Location";
import Signup from "./page/Signup";
import * as React from "react";
import ReduxPage from "./reduxpage";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from './hooks/userReducer';

const rootReducer = combineReducers({
  users: userReducer,
});

const store = configureStore({
  reducer: rootReducer
});

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [{
        path: "*",
        element: <Navigate to="" replace />
      }, {
        path: "users",
        element: <Users />
      }, {
        path: "location",
        element: <Location />
      }]
    },
    { path: "/loading", element: <Loading /> },
    { path: "/signup", element: <Signup /> },
  ]);;


  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  )
}

export default App;
