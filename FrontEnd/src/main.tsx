import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error404Page from './Page/404Page';
import UserHomePage from './Page/User/HomePage';
import UserLayout from './Page/User/UserLayout';
import DoctorList from './Page/User/DoctorList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout/>,
    errorElement: <Error404Page />,
    children: [
      {
        path: "/",
        element: <UserHomePage/> ,
      },
      {
        path: "/doctorList",
        element: <DoctorList/> ,
      },
    ],
  },
  {
    path: "/doctor",
    element: <div>Doctor</div>,
  },
  {
    path: "/suppoter",
    element: <div>suppoter</div>,
  },
  {
    path: "/admin",
    element: <div>Admin</div>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
