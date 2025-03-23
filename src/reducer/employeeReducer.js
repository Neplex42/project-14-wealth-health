import { createSlice } from "@reduxjs/toolkit";

const employeeList = localStorage.getItem('employeeList')
    ? JSON.parse(localStorage.getItem('employeeList'))
    : []

const initialState = {
  employeeList,
  loading: false,
  error: null,
  success: false
}

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.error = null
      state.success = false
    },
    addEmployee: (state, action) => {
      state.loading = true
      try {
        state.employeeList.push(action.payload)
        localStorage.setItem('employeeList', JSON.stringify(state.employeeList))
        state.loading = false
        state.success = true
      } catch (error) {
        state.loading = false
        state.error = error
      }
    }
  }
})

export const {reset, addEmployee} = employeeSlice.actions

export default employeeSlice.reducer