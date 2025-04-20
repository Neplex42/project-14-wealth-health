import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, createRoutesFromElements, Route,
  RouterProvider
} from "react-router-dom";

const Root = lazy(() => import('./routes/root'))
const Error = lazy(() => import('./pages/error/Error.jsx'))
const Layout = lazy(() => import('./pages/Layout.jsx'))
const EmployeeList = lazy(() => import('./pages/employeeList/EmployeeList.jsx'))

import { Provider } from "react-redux";
import store from './store'

import './styles/main.scss'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />} errorElement={<Error />}>
          <Route path="/" element={<Root />} />
          <Route path="/employee-list" element={<EmployeeList />}
          />
          <Route path="*" element={<Error />} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
)
