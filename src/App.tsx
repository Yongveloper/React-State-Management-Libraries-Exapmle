import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { decrement, increment } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const onIncrementButtonClick = () => dispatch(increment());

  const onDecrementButtonClick = () => dispatch(decrement());

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
