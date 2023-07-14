import React from 'react';
import PropTypes from 'prop-types';

const CalcKey = ({
  value, rightKey, doubleWidth, clickHandler,
}) => {
  const classes = `key ${rightKey ? 'right-key' : ''} ${
    doubleWidth ? 'double-width' : ''
  }`;

  return (
    <button
      type="button"
      className={classes}
      onClick={() => clickHandler(value)}
    >
      {value}
    </button>
  );
};

CalcKey.propTypes = {
  value: PropTypes.string,
  rightKey: PropTypes.bool,
  doubleWidth: PropTypes.bool,
  clickHandler: PropTypes.func,
};

CalcKey.defaultProps = {
  value: '',
  rightKey: false,
  doubleWidth: false,
  clickHandler: () => {},
};

export default CalcKey;
