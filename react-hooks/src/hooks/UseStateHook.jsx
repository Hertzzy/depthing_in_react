import logo from '../logo.svg';
import '../App.css';

import { useState } from 'react';

const UseStateHook = () => {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);

  const reverseClass = reverse ? 'reverse' : '';

  const handkeClick = () => {
    setReverse(!reverse);
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <span>Counter {counter}</span>
        <button type="button" onClick={handkeClick}>
          Reverse {reverseClass}
        </button>
      </header>
    </div>
  );
};

export default UseStateHook;
