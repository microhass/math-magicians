/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const CalcScreen = ({ value }) => (
  <form className="screen">
    <input
      type="text"
      name="expr"
      id="expr"
      placeholder="0"
      value={value}
    />
  </form>
);

CalcScreen.propTypes = {
  value: PropTypes.string,
};

CalcScreen.defaultProps = {
  value: '',
};

export default CalcScreen;
