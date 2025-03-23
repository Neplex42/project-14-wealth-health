import './createEmployee.scss'
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../../reducer/employeeReducer.js";
import { Controller, useForm } from "react-hook-form";

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector((state) => state.employee)
  const {register, handleSubmit, control} = useForm()

  const saveEmployee = (data) => {
    dispatch(addEmployee(data));
  };

  return (
      <main className="main">
        <h2>Create Employee</h2>

        <form onSubmit={handleSubmit(saveEmployee)}>
          <label htmlFor="first-name">First Name</label>
          <Controller
              name="first-name"
              control={control}

              render={({field}) => <input  {...field} value={field.value || ""} type="text" />}
          />

          <label htmlFor="last-name">Last Name</label>
          <Controller
              name="last-name"
              control={control}
              render={({field}) => <input {...field} value={field.value || ""} type="text" />}
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <Controller
              name="date-of-birth"
              control={control}
              render={({field}) => <input {...field} value={field.value || ""} type="text" />}
          />

          <label htmlFor="start-date">Start Date</label>
          <Controller
              name="start-date"
              control={control}
              render={({field}) => <input {...field} value={field.value || ""} type="text" />}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <Controller
                name="street"
                control={control}
                render={({field}) => <input {...field} value={field.value || ""} type="text" />}
            />

            <label htmlFor="city">City</label>
            <Controller
                name="city"
                control={control}
                render={({field}) => <input {...field} value={field.value || ""} type="text" />}
            />

            <label htmlFor="state">State</label>
            <Controller
                name="state"
                control={control}
                render={({field}) => <input {...field} value={field.value || ""} type="text" />}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <Controller
                name="zip-code"
                control={control}
                render={({field}) => <input {...field} value={field.value || ""} type="number" />}
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <Controller
              name="department"
              control={control}
              render={({field}) => (
                  <select {...field}>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Legal">Legal</option>
                  </select>
              )}
          />

          <button type='submit' className='add-employee-button' disabled={loading}>
            {loading ? 'Loading' : 'Add Employee'}
          </button>
        </form>
        {/* ADD MODAL PLUGIN ? */}
      </main>
  )
}

export default CreateEmployee