import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from "./reducer/employeeReducer.js";

export default configureStore({
  reducer: {
    employee: employeeReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true
})