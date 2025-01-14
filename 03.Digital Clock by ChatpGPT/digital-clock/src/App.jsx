import React, { useState, useEffect } from 'react';
import ClockDisplay from './ClockDisplay';
import Logs from './Logs'; // This is the component where logs are displayed
import './App.css';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [isRunning, setIsRunning] = useState(true);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString());
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div className="clock-container">
      <h1>Digital Clock</h1>
      <ClockDisplay time={time} date={date} /> {/* Display current time and date */}
      <div className="buttons-container">
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button
          onClick={() => {
            setIsRunning(false);
            setLogs((prevLogs) => [...prevLogs, `Stopped at ${time}`]);
          }}> Stop</button>
      </div>
      {!isRunning && <p className="stopped-message">The clock is stopped!</p>}
      <Logs logs={logs} /> {/* Pass logs to the Logs component */}
    </div>
  );
}

export default App;