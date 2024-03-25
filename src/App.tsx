import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>리액트 상태 관리 라이브러리 에제</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment value
        </button>
      </div>
      <span>{count}</span>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Decrement value
        </button>
      </div>
    </>
  );
}

export default App;
