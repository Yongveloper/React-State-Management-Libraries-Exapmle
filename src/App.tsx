import './App.css';
import { useRecoilState } from 'recoil';
import { countState } from './features/counter/atom';

function App() {
  const [count, setCount] = useRecoilState(countState);

  const onIncrementButtonClick = () => setCount((count) => count + 1);

  const onDecrementButtonClick = () => setCount((count) => count - 1);

  return (
    <>
      <h1>리액트 상태 관리 라이브러리 에제</h1>
      <div className="card">
        <button onClick={onIncrementButtonClick}>Increment value</button>
      </div>
      <span>{count}</span>
      <div className="card">
        <button onClick={onDecrementButtonClick}>Decrement value</button>
      </div>
    </>
  );
}

export default App;
