

import './button.scss'

const Button = ({ loading }) => {
  return (
      <button type='submit' className='add-employee-button' disabled={loading}>
        {loading ? 'Loading' : 'Add Employee'}
      </button>
  );
};

export default Button;