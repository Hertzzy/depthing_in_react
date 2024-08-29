import React, { useCallback, useState } from 'react';
import P from 'prop-types';

const Button = React.memo(({ incrementButton }) => {
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func
};

const UseCallback = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback(num => {
    setCounter(c => c + num);
  }, []);

  return (
    <div className="App">
      <h1>UseCallback</h1>

      <h3>C1: {counter}</h3>
      <Button incrementButton={incrementCounter} />
    </div>
  );
};

export default UseCallback;
