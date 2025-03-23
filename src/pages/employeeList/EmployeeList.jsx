import './employeeList.scss'
import { Link } from "react-router-dom";

const EmployeeList = () => {

  return (
      <main className="main">
        <h1>Current Employees</h1>
        Employee List
        <Link to={'/employee-list'} className='link'>
          Employee List
        </Link>
      </main>
  )
}

export default EmployeeList