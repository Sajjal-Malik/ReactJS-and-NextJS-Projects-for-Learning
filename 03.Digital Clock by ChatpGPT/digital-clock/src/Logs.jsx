import React from 'react';

function Logs({ logs }) { // logs is expected as a prop here
    return (
        <div className="logs-container">
            <h2>Logs:</h2>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>{log}</li> // Render each log
                ))}
            </ul>
        </div>
    );
}

export default Logs;