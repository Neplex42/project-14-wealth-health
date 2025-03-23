import './employeeList.scss'
import { Link } from "react-router-dom";

const EmployeeList = () => {

  return (
      <main className="main employee-list">
        <h1>Current Employees</h1>
        Employee List
        <Link to={'/'} className='link'>
          Home
        </Link>
      </main>
  )
}

export default EmployeeList