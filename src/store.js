import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from "./reducer/employeeReducer.js";

export default configureStore({
  reducer: {
    employee: employeeReducer
  },
  devTools: true
})