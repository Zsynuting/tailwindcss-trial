import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo text-center" alt="logo" />
      <div className={"flex flex-row items-center justify-between"}>
        <div className={"flex-auto h-4 bg-gray-500"}></div>
        <div className={"flex-auto h-4 bg-gray-400"}></div>
        <div className={"flex-auto h-4 bg-gray-300"}></div>
      </div>
    </div>
  );
}

export default App;
