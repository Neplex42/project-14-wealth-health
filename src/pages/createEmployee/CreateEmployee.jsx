import './createEmployee.scss'
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, reset } from "../../reducer/employeeReducer";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import FormCreateEmployee from "../../components/formCreateEmployee/FormCreateEmployee.jsx";
import { Link } from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css'
import SuccessModal from "../../components/successModal/successModal.jsx";
import useMountTransition from "../../components/successModal/useMountTransition.jsx";

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.employee)
  const { handleSubmit, control, reset: resetForm } = useForm()
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const hasTransitionedIn = useMountTransition(isSuccessModalOpen, 500);

  const saveEmployee = (data) => {
    dispatch(addEmployee(data));
  };

  // Reset form after successful submission
  useEffect(() => {
    if (success) {
      setIsSuccessModalOpen(true);
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

        {(hasTransitionedIn || isSuccessModalOpen) &&
            <SuccessModal
                text='Employee successfully added!'
                isSuccessModalOpen={isSuccessModalOpen}
                setIsSuccessModalOpen={setIsSuccessModalOpen}
                hasTransitionedIn={hasTransitionedIn}
            />}

        <Link to={'/employee-list'} className='link'>
          Employee List
        </Link>
      </main>
  )
}

export default CreateEmployee