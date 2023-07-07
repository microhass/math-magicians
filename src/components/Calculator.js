import React, { useState } from 'react';
import CalcScreen from './CalcScreen';
import CalcKey from './CalcKey';
import calculate from '../logic/calculate';
import allKeys from '../data/allKeys';

const Calculator = () => {
  const [calcObj, setCalcObj] = useState({});

  const keyClickHandler = (value) => {
    const newCalcObj = calculate(calcObj, value);
    setCalcObj(newCalcObj);
  };

  return (
    <section className="calc-page">
      <div className="calc-text">Lets do some math</div>
      <div className="calculator">
        <CalcScreen calcObj={calcObj} />
        <div className="keys">
          {allKeys.map((key) => (
            <CalcKey
              key={key.value}
              value={key.value}
              rightKey={key.rightKey}
              doubleWidth={key.doubleWidth}
              clickHandler={keyClickHandler}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
