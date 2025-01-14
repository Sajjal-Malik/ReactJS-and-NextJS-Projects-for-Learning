import React from 'react';
import './ClockDisplay.css';

function ClockDisplay({ time, date }) {
    return (
        <div className='clock-display'>
            <p>{time}</p> {/* Display current time */}
            <p>{date}</p> {/* Display current date */}
        </div>
    );
}

export default ClockDisplay;