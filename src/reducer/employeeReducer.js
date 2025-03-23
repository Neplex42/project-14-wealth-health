import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { employeeService } from '../services/employee/employeeService'

const employeeList = localStorage.getItem('employeeList')
    ? localStorage.getItem('employeeList')
    : null

const initialState = {
  employeeList,
  loading: false,
  error: null,
  success: false
}

export const addEmployee = createAsyncThunk(
    'employee/addEmployee',
    async (employee, thunkAPI) => {
      try {
        return await employeeService.addEmployee(employee)
      } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
)

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.error = null
      state.success = false
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(addEmployee.pending, (state) => {
          state.loading = true
          state.error = null
        })
        .addCase(addEmployee.fulfilled, (state, action) => {
          state.loading = false
          state.employeeList = action.payload
          state.success = true
        })
        .addCase(addEmployee.rejected, (state, {payload}) => {
          state.loading = false
          state.error = payload
        })
  }
})

export const {reset} = employeeSlice.actions

export default employeeSlice.reducer