import './App.css';
import { useCountStore } from './features/counter/store';

function App() {
  const { count, increment, decrement } = useCountStore();

  return (
    <>
      <h1>리액트 상태 관리 라이브러리 에제</h1>
      <div className="card">
        <button onClick={increment}>Increment value</button>
      </div>
      <span>{count}</span>
      <div className="card">
        <button onClick={decrement}>Decrement value</button>
      </div>
    </>
  );
}

export default App;
