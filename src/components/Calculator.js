import React, { useState } from 'react';
import CalcScreen from './CalcScreen';
import CalcKey from './CalcKey';

const Calculator = () => {
  const [expr, setExpr] = useState('');

  const keyClickHandler = (value) => {
    setExpr((prevExpr) => {
      const newExpr = prevExpr + value;
      return newExpr;
    });
  };

  const clearScreen = () => setExpr(() => '');

  return (
    <div className="calculator">
      <CalcScreen value={expr} />
      <div className="keys">
        <CalcKey value="AC" clickHandler={clearScreen} />
        <CalcKey value="+/-" clickHandler={keyClickHandler} />
        <CalcKey value="%" clickHandler={keyClickHandler} />
        <CalcKey value="÷" rightKey clickHandler={keyClickHandler} />
        <CalcKey value="7" clickHandler={keyClickHandler} />
        <CalcKey value="8" clickHandler={keyClickHandler} />
        <CalcKey value="9" clickHandler={keyClickHandler} />
        <CalcKey value="×" rightKey clickHandler={keyClickHandler} />
        <CalcKey value="4" clickHandler={keyClickHandler} />
        <CalcKey value="5" clickHandler={keyClickHandler} />
        <CalcKey value="6" clickHandler={keyClickHandler} />
        <CalcKey value="-" rightKey clickHandler={keyClickHandler} />
        <CalcKey value="1" clickHandler={keyClickHandler} />
        <CalcKey value="2" clickHandler={keyClickHandler} />
        <CalcKey value="3" clickHandler={keyClickHandler} />
        <CalcKey value="+" rightKey clickHandler={keyClickHandler} />
        <CalcKey
          value="0"
          doubleWidth
          clickHandler={keyClickHandler}
        />
        <CalcKey value="." clickHandler={keyClickHandler} />
        <CalcKey value="=" rightKey clickHandler={keyClickHandler} />
      </div>
    </div>
  );
};

export default Calculator;
