import logo from './logo.svg';
import './App.css';
import Device from './components/Device';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name="Realme Narzo 50 Pirme" price="15600"/>
      <Watch/>
    </div>
  );
}

export default App;
