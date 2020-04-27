import React, { useEffect } from 'react';
import useDarkMode from './use-dark-mode';
import './style.css';

interface Props {
  modeChangeCallBack: (mode: boolean) => void;
}

const DarkModeToggle: React.FC<Props> = ({modeChangeCallBack})  => {
  
  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    modeChangeCallBack(darkMode);
  }
  ,[darkMode, modeChangeCallBack])

  return (<div className="toggle-container">
    <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
    <span className="toggle">
      <input
        checked={darkMode}
        onChange={() => setDarkMode((prevMode: any) => !prevMode)}
        id="checkbox"
        className="on-off-checkbox"
        type="checkbox"
      />
      <label htmlFor="checkbox" />
    </span>
    <span style={{ color: darkMode ? "slateblue" : "white" }}>☾</span>
  </div>
)};

export default DarkModeToggle;
