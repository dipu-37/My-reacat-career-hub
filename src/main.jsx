import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './component/Root';
import Home from './component/Home/Home';
import ErrorPage from './component/ErrorPage/ErrorPage';
import AppliedJobs from './component/ErrorPage/AppliedJobs/AppliedJobs';
import JobDetails from './component/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/AppliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=> fetch('/jobs.json'),
      },
      
      {
        path: "/Job/:id",
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('/jobs.json'),
      },
    ],
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
