
import './App.css';
import Days from './Days';

function App(props) {
  return (
    <div>
      <Days age={10}/>
      <Days age={20}/>
      <Days age={30}/>
    </div>
  );
}

export default App;
