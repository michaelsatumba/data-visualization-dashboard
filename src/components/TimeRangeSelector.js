import React from 'react';

const TimeRangeSelector = ({ onChange }) => {
  return (
    <select onChange={e => onChange(e.target.value)}>
      <option value="24h">24 Hours</option>
      <option value="7d">7 Days</option>
      <option value="30d">30 Days</option>
      <option value="1y">1 Year</option>
    </select>
  );
};

export default TimeRangeSelector;