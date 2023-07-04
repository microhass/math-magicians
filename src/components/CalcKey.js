import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const CalcKey = ({ value, rightKey, doubleWidth }) => {
  const classes = `${rightKey ? 'right-key' : ''} ${
    doubleWidth ? 'double-width' : ''
  } key`;

  return <div className={classes}>{value}</div>;
};

CalcKey.propTypes = {
  value: PropTypes.string,
  rightKey: PropTypes.bool,
  doubleWidth: PropTypes.bool,
};

CalcKey.defaultProps = {
  value: '',
  rightKey: false,
  doubleWidth: false,
};

export default CalcKey;
