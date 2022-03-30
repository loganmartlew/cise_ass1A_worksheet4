import React from 'react';

const Dropdown = ({ options, value, onChange, defaultText }) => {
  return (
    <div>
      <select value={value} onChange={onChange}>
        <option value={-1}>{defaultText}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
