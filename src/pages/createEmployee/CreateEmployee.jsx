import './createEmployee.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addEmployee, reset } from '../../reducer/employeeReducer'
import { useForm } from 'react-hook-form'
import { lazy, Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'

import { SuccessModal, useMountTransition } from 'success-modal-oc-jd';
const FormCreateEmployee = lazy(() =>
  import('../../components/formCreateEmployee/FormCreateEmployee.jsx')
)

const CreateEmployee = () => {
  const dispatch = useDispatch()
  const { loading, success, error } = useSelector((state) => state.employee)
  const { handleSubmit, control, reset: resetForm } = useForm()
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const hasTransitionedIn = useMountTransition(isSuccessModalOpen, 500)

  const saveEmployee = (data) => {
    dispatch(addEmployee(data))
  }

  // Reset form after successful submission
  useEffect(() => {
    if (success) {
      setIsSuccessModalOpen(true)
      resetForm()
      dispatch(reset())
    }
  }, [success, dispatch, resetForm])

  return (
    <main className="main create-employee">
      <div className="create-employee__wrapper">
        <h1>- HRnet -</h1>
        <h2>Create Employee</h2>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <FormCreateEmployee
            handleSubmit={handleSubmit}
            control={control}
            saveEmployee={saveEmployee}
            loading={loading}
            error={error}
          />
        </Suspense>

        {(hasTransitionedIn || isSuccessModalOpen) && (
          <Suspense>
            <SuccessModal
              text="Employee successfully added!"
              isSuccessModalOpen={isSuccessModalOpen}
              setIsSuccessModalOpen={setIsSuccessModalOpen}
              hasTransitionedIn={hasTransitionedIn}
            />
          </Suspense>
        )}

        <Link to={'/employee-list'} className="link">
          Employee List
        </Link>
      </div>
    </main>
  )
}

export default CreateEmployee
