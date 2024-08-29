import React, { useEffect, useState } from 'react';

const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // componentDidUpdate -> EXECUTA TODA VEZ QUE O COMPONENT ATUALIZA
  // useEffect(() => {
  //   console.log('COMPONENT ATUALIZADO');
  // });

  // componentDidMount -> EXECUTA 1 VEZ
  // useEffect(() => {
  //   console.log('EXECUTA 1 VEZ');
  // }, []);

  // Com dependencia -> EXECUTA TODA VEZ A DEPENDENCIA MUDAR
  useEffect(() => {
    console.log('C1: ', counter, 'C1: ', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <h1>UseEffect</h1>
      <div>
        <span>C1: {counter}</span>
        <button onClick={() => setCounter(counter + 1)}> + </button>
        <span>C2: {counter2}</span>
        <button onClick={() => setCounter2(counter2 + 2)}> + </button>
      </div>
    </div>
  );
};

export default UseEffect;
