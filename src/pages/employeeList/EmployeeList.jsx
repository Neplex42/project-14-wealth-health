import './employeeList.scss'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RenderHeader } from "../../components/tableHeader/TableHeader.jsx";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from "primereact/api";
import "primereact/resources/themes/viva-light/theme.css";
import 'primeicons/primeicons.css';

const EmployeeList = () => {
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
  });
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const employees = useSelector((state) => state.employee.employeeList)

  const formatDateStringToDDMMYYYY = (dateString) => {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.getMonth() + 1; // months start at 0 so add 1
    const year = date.getFullYear();

    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  }

  const header = <RenderHeader globalFilterValue={globalFilterValue} onGlobalFilterChange={onGlobalFilterChange}
                               placeholder='Search by name' />

  const formatDateOfBirthCol = (rowData) => formatDateStringToDDMMYYYY(rowData['date-of-birth'])
  const formatDateOfStartCol = (rowData) => formatDateStringToDDMMYYYY(rowData['start-date'])

  return (
      <main className="main employee-list">
        <h1>Current Employees</h1>

        <DataTable value={employees}
                   header={header}
                   paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
                   currentPageReportTemplate="Showing {first} to {last} of {totalRecords} employees"
                   paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                   removableSort showGridlines
                   filters={filters}
                   emptyMessage="No employees found.">
          <Column field="first-name" header="First name" sortable style={{ minWidth: '9rem' }} />
          <Column field="last-name" header="Last name" sortable style={{ minWidth: '9rem' }} />
          <Column field="start-date" body={formatDateOfBirthCol} header="Start date" sortable
                  style={{ minWidth: '9.8rem' }} />
          <Column field='department.value' header="Department" sortable style={{ minWidth: '10rem' }} />
          <Column field='date-of-birth' body={formatDateOfStartCol} header="Date of Birth" sortable
                  style={{ minWidth: '9.8rem' }} />
          <Column field='street' header="Street" sortable style={{ minWidth: '10rem' }} />
          <Column field='city' header="City" sortable style={{ minWidth: '6rem' }} />
          <Column field='state.abbreviation' header="State" sortable style={{ minWidth: '1rem' }} />
          <Column field='zip-code' header="Zip Code" sortable style={{ minWidth: '9rem' }} />
        </DataTable>


        <Link to={'/'} className='link'>
          Home
        </Link>
      </main>
  )
}

export default EmployeeList