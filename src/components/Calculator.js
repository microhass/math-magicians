import React from 'react';
import CalcScreen from './CalcScreen';
import CalcKey from './CalcKey';

const Calculator = () => (
  <div className='calculator'>
    <CalcScreen />
    <div className='keys'>
      <CalcKey value='AC' />
      <CalcKey value='+/-' />
      <CalcKey value='%' />
      <CalcKey value='÷' rightKey={true} />
      <CalcKey value='7' />
      <CalcKey value='8' />
      <CalcKey value='9' />
      <CalcKey value='×' rightKey={true} />
      <CalcKey value='4' />
      <CalcKey value='5' />
      <CalcKey value='6' />
      <CalcKey value='-' rightKey={true} />
      <CalcKey value='1' />
      <CalcKey value='2' />
      <CalcKey value='3' />
      <CalcKey value='+' rightKey={true} />
      <CalcKey value='0' width='2' />
      <CalcKey value='.' />
      <CalcKey value='=' rightKey={true} />
    </div>
  </div>
);

export default Calculator;
