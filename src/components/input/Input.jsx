import './input.scss'
import { Controller } from "react-hook-form";
import DatePicker from 'react-datepicker'
import Select from "react-select";

const Input = ({ label, name, control, inputType, placeholder, options, customOption }) => {
  return (
      <div className='input'>
        <label htmlFor={name}>{label}</label>
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <>
                  {(inputType === 'text' || inputType === 'number') && (
                      <input {...field} value={field.value || ""} type={inputType} />
                  )}
                  {inputType === 'date' && (
                      <DatePicker
                          placeholderText={placeholder}
                          showIcon
                          onChange={(date) => field.onChange(date)}
                          selected={field.value}
                      />
                  )}
                  {(inputType === 'select' && customOption) && (
                      <Select
                          {...field}
                          options={options}
                          getOptionValue={(option) => `${option.name}`}
                          getOptionLabel={(option) => `${option.name}`}
                      />
                  )}
                  {(inputType === 'select' && !customOption) && (
                      <Select {...field} options={options} />
                  )}
                </>
            )}
        />
      </div>
  );
};

export default Input;