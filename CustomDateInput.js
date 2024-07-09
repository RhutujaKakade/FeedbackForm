import React from 'react';

const formatDateForInput = (date) => {
  if (!date) return '';
  const d = new Date(date);
  const day = (`0${d.getDate()}`).slice(-2);
  const month = (`0${d.getMonth() + 1}`).slice(-2);
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

const parseDateFromInput = (dateString) => {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month - 1, day);
};

const CustomDateInput = ({ name, value, onChange }) => {
  const handleDateChange = (e) => {
    const formattedDate = parseDateFromInput(e.target.value);
    onChange({ target: { name, value: formattedDate } });
  };

  return (
    <input
      type="text"
      name={name}
      value={formatDateForInput(value)}
      onChange={handleDateChange}
      placeholder="dd/mm/yyyy"
    />
  );
};

export default CustomDateInput;
