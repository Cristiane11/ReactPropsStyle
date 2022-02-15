import logo from './logo.svg';
import NavBar from './component/pages/NavBar';
import Main from './component/pages/Main';
import Card from './component/pages/Cards'
import './App.css';

function App() {
  return (
    <div className="App">

      <NavBar/>
      <Main/>
      <Card/>
    </div>
  );
}

export default App;
