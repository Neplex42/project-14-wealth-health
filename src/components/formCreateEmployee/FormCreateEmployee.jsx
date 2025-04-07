import './formCreateEmployee.scss'
import { states } from "../../data/states.js";
import { department } from "../../data/department.js";
import { Navigate } from "react-router-dom";
import Button from "../button/Button.jsx";
import Input from "../input/Input.jsx";

const FormCreateEmployee = ({ handleSubmit, control, saveEmployee, loading, error }) => {

  return (
      <>
        {error && <Navigate to={'/error'} />}

        <form onSubmit={handleSubmit(saveEmployee)}>
          <div className="inputs-wrapper">
            <Input label='First Name' name='first-name' control={control} inputType='text' />
            <Input label='Last Name' name='last-name' control={control} inputType='text' />
          </div>

          <div className="inputs-wrapper">
            <Input label='Date of Birth' name='date-of-birth' control={control} inputType='date'
                   placeholder='Select birth date' />
            <Input label='Start Date' name='start-date' control={control} inputType='date'
                   placeholder='Select start date' />
          </div>


          <fieldset className="address">
            <legend>Address</legend>

            <Input label='Street' name='street' control={control} inputType='text' />
            <Input label='City' name='city' control={control} inputType='text' />

            <div className="inputs-wrapper">
              <Input label='State' name='state' control={control} inputType='select' options={states}
                     customOption={true} />
              <Input label='Zip Code' name='zip-code' control={control} inputType='number' />
            </div>
          </fieldset>

          <Input label='Department' name='department' control={control} inputType='select' options={department} />

          <Button loading={loading} />
        </form>
      </>
  )
};

export default FormCreateEmployee;