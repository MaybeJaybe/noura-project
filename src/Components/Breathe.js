import React, { useState } from 'react';
import './Breathe.css';
import Breathe2 from '../Breathe2';
import Breathe3 from '../Breathe3';

// breathe links need to be like stretch links, idk what this conditional is doing with the start button

const Breathe = () => {
  const [startClicked, setStartClicked] = useState(false);
  const [sessionDuration, setSessionDuration] = useState(0);

  const handleStartClick = () => {
    setStartClicked(true);
  };

  const handleDurationChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setSessionDuration(Math.max(0, Math.min(60, value)));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSessionDuration((prevDuration) => Math.min(60, prevDuration + 1));
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSessionDuration((prevDuration) => Math.max(0, prevDuration - 1));
    }
  };

  return (
    <div className="breathe-container">
      <p className="breathe-prompt">How long do you want this session to last?</p>
      <div className="determine-timer">
        <div className="timer-input">
          <input
            type="number"
            id="number"
            placeholder="0"
            max="30"
            value={sessionDuration}
            onChange={handleDurationChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="input-text">minutes</div>
      </div>

      {!startClicked ? (
        <div className="start" onClick={handleStartClick}>
          <div className="start-button">Start</div>
        </div>
      ) : ( sessionDuration>0 ? 
        <Breathe2 sessionDuration={sessionDuration} /> : <Breathe3 />
      
      )}
    </div>
  );
};

export default Breathe;
