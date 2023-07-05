import React from 'react';
import PropTypes from 'prop-types';

const CalcScreen = ({ calcObj }) => {
  const { total, next, operation } = calcObj;

  const totalString = total || '';
  const nextString = next || '';
  const operationString = operation || '';

  const screenValue = `${totalString}${operationString}${nextString}`;

  return <div className="screen">{screenValue || 0}</div>;
};

CalcScreen.propTypes = {
  calcObj: PropTypes.objectOf(PropTypes.string),
};

CalcScreen.defaultProps = {
  calcObj: {},
};

export default CalcScreen;
