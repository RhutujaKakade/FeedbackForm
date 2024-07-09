import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ name, value, onChange, required }) => {
  const handleDateChange = (date) => {
    onChange({ target: { name, value: date ? date.toISOString().split('T')[0] : '' } });
  };

  return (
    <DatePicker
      selected={value ? new Date(value) : null}
      onChange={handleDateChange}
      dateFormat="dd/MM/yyyy"
      className="form-control"
      required={required}
    />
  );
};

export default CustomDatePicker;
