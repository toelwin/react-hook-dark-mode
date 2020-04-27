import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle';


function App() {
  
  const [ theme, setTheme ] = useState('');
  const onModeChanged = (mode:boolean) => setTheme( mode ? 'Dark Theme' : 'Light Theme');

  return (
    <div className="App">      
      <nav>
        <DarkModeToggle modeChangeCallBack={onModeChanged}/>
      </nav>
      <main>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
  REACT HOOK DARK MODE: <span>{theme}</span>
        </p>        
      </main>
    </div>
  );
}

export default App;
