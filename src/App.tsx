import React, {useState} from 'react';

import './App.css';
import Counter from "./counter/Counter";
import Settings from "./setting/Settings";

function App() {

  const maxValue = 5

  const [count, setCount] = useState(0)
  const increment = () => {
    if(maxValue === count) {
      return
    }
    setCount(count + 1)
  }
  const reset = () => setCount(0)

  return (
      <div className='content'>
          <div className='settings'>
              <Settings />
          </div>
          <div className='counter'>
              <Counter increment={increment}
                       count={count}
                       reset={reset}
                       maxValue={maxValue}

              />
        </div>

      </div>

  )

}

export default App;
