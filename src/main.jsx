import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, createRoutesFromElements, Route,
  RouterProvider
} from "react-router-dom";

import Root from "./routes/root";
import Error from "./pages/error/Error.jsx";
import Layout from "./pages/Layout.jsx";
import EmployeeList from "./pages/employeeList/EmployeeList.jsx";

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
