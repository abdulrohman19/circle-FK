import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1>{count}</h1>
      <div style={styles.buttonContainer}>
        <button onClick={increment} style={styles.button}>+</button>
        <button onClick={decrement} style={styles.button}>-</button>
        <button onClick={reset} style={styles.resetButton}>Reset Value</button>
      </div>
    </div>
  );
};

// Cast the styles object to React.CSSProperties for TypeScript compatibility
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#222',
    color: 'white',
    minHeight: '100vh',
  },
  buttonContainer: {
    display: 'inline-flex',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#44b',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  resetButton: {
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#339999',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Counter;
