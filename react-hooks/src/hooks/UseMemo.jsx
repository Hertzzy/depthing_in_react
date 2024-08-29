import React, { useEffect } from 'react';

const UseMemo = () => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
  });
  return (
    <div className="App">
      <h1>UseMemo</h1>
    </div>
  );
};

export default UseMemo;
