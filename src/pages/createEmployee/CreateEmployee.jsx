import './createEmployee.scss'
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, reset } from "../../reducer/employeeReducer";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import FormCreateEmployee from "../../components/formCreateEmployee/FormCreateEmployee.jsx";
import { Link } from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css'

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.employee)
  const { handleSubmit, control, reset: resetForm } = useForm()

  const saveEmployee = (data) => {
    dispatch(addEmployee(data));
  };

  // Reset form after successful submission
  useEffect(() => {
    if (success) {
      resetForm();
      dispatch(reset());
    }

  }, [success, dispatch, resetForm])

  return (
      <main className="main create-employee">
        <h2>Create Employee</h2>

        <FormCreateEmployee
            handleSubmit={handleSubmit}
            control={control}
            saveEmployee={saveEmployee}
            loading={loading}
            error={error}
        />


        {/* ADD MODAL PLUGIN ? */}

        <Link to={'/employee-list'} className='link'>
            Employee List
        </Link>
      </main>
  )
}

export default CreateEmployee