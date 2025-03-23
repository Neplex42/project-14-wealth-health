import './formCreateEmployee.scss'
import { Controller } from "react-hook-form";
import { states } from "../../data/states.js";
import { department } from "../../data/department.js";
import Select from 'react-select'
import { useState } from "react";
import DatePicker from 'react-datepicker'

const FormCreateEmployee = ({ handleSubmit, control, saveEmployee, loading, error }) => {
  const [startDate, setStartDate] = useState(new Date());

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


  return (
      <form onSubmit={handleSubmit(saveEmployee)}>
        <div className="inputs-wrapper">
          <div className='input'>
            <label htmlFor="first-name">First Name</label>
            <Controller
                name="first-name"
                control={control}
                render={({ field }) =>
                    <input  {...field} value={field.value || ""} type="text" />}
            />
          </div>

          <div className='input'>
            <label htmlFor="last-name">Last Name</label>
            <Controller
                name="last-name"
                control={control}
                render={({ field }) =>
                    <input {...field} value={field.value || ""} type="text" />}
            />
          </div>
        </div>
        <div className="inputs-wrapper">
          <div className='input'>
            <label htmlFor="date-of-birth">Date of Birth</label>
            <Controller
                name="date-of-birth"
                control={control}
                render={({ field }) =>
                 <DatePicker
                        placeholderText='Select birth date'
                        showIcon
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                    />}
            />
          </div>

          <div className='input'>
            <label htmlFor="start-date">Start Date</label>
            <Controller
                name="start-date"
                control={control}
                render={({ field }) =>
                    <DatePicker
                        placeholderText='Select start date'
                        showIcon
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                    />}
            />
          </div>
        </div>


        <fieldset className="address">
          <legend>Address</legend>

          <div className='input'>
            <label htmlFor="street">Street</label>
            <Controller
                name="street"
                control={control}
                render={({ field }) =>
                    <input {...field} value={field.value || ""} type="text" />}
            />
          </div>

          <div className='input'>
            <label htmlFor="city">City</label>
            <Controller
                name="city"
                control={control}
                render={({ field }) =>
                    <input {...field} value={field.value || ""} type="text" />}
            />
          </div>

          <div className="inputs-wrapper">
            <div className='input'>
              <label htmlFor="state">State</label>
              <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                      <Select
                          {...field}
                          options={states}
                          getOptionValue={(state) => `${state.name}`}
                          getOptionLabel={(state) => `${state.name}`}
                      />
                  )}
              />
            </div>

            <div className='input'>
              <label htmlFor="zip-code">Zip Code</label>
              <Controller
                  name="zip-code"
                  control={control}
                  render={({ field }) =>
                      <input {...field} value={field.value || ""} type="number" />}
              />
            </div>
          </div>

        </fieldset>

        <div className='input'>

          <label htmlFor="department">Department</label>
          <Controller
              name="department"
              control={control}
              render={({ field }) => (
                  <Select {...field} options={department} />
              )}
          />
        </div>

        <button type='submit' className='add-employee-button' disabled={loading}>
          {loading ? 'Loading' : 'Add Employee'}
        </button>
      </form>
  )
      ;
};

export default FormCreateEmployee;