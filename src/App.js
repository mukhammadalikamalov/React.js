import { useState } from 'react';
import '../src/index.css';

function Counter() {

  const [ counter, setCounter ] = useState(0);

  function increment() {
    setCounter( prevCounter => prevCounter + 1);
  }

  function decrement() {
    if ( counter > 0 ) {
      setCounter( prevCounter => prevCounter - 1);
    }
  }

  return (
    <div className='input-group'>
      <button className='decrement' onClick={decrement}>-</button>
      <input type='number' value={counter} readOnly />
      <button className='increment' onClick={increment}>+</button>
    </div>
  )
 
}

export default Counter;