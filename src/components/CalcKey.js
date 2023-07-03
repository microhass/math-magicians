import React from 'react';

const CalcKey = ({ value, rightKey }) => {
  return (
    <div className={rightKey ? 'right-key key' : 'key'}>{value}</div>
  );
};

export default CalcKey;
