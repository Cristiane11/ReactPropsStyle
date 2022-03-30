
import Nav from './component/Nav';
import Home from './component/Home'
import './App.css';

function App() {
  return (
    <div className="App">
       <Nav/>
       <Home/>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
