// import React, { useState, useEffect } from 'react';
// import './Focus.css';
// import reset from './reset.png';

// const Focus = () => {
//   const [time, setTime] = useState(25 * 60); // Initial time in seconds
//   const [isActive, setIsActive] = useState(false);
//   const [isBreak, setIsBreak] = useState(false);
//   const [autoTransition, setAutoTransition] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [selectedDuration, setSelectedDuration] = useState(25);

//   useEffect(() => {
//     let interval = null;

//     if (isActive && time > 0) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime - 1);
//       }, 1000);
//     } else if (!isActive && time === 0) {
//       clearInterval(interval);
//       if (autoTransition) {
//         if (isBreak) {
//           setIsBreak(false); // Transition from short break to Pomodoro
//           setTime(25 * 60);
//         } else {
//           setIsBreak(true); // Transition from Pomodoro to short break
//           setTime(isLongBreak() ? 15 * 60 : 5 * 60);
//         }
//       }
//     }

//     return () => {
//       clearInterval(interval);
//     };
//   }, [isActive, time, autoTransition, isBreak]);

//   const startTimer = () => {
//     setIsActive(true);
//     setIsBreak(false);
//   };

//   const pauseTimer = () => {
//     setIsActive(false);
//   };

//   const resetTimer = () => {
//     setTime(25 * 60);
//     setIsActive(false);
//     setIsBreak(false);
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60).toString().padStart(2, '0');
//     const seconds = (time % 60).toString().padStart(2, '0');
//     return `${minutes}:${seconds}`;
//   };

  

//   const getTimerDuration = () => {
//     return isBreak ? (isLongBreak() ? 15 : 5) : 25;
//   };

//   const isLongBreak = () => {
//     return time === 0 && !isBreak && (getCompletedPomodoros() % 4 === 0);
//   };

//   const getCompletedPomodoros = () => {
//     return Math.floor((25 * 60 - time) / (25 * 60));
//   };

//   const handleAutoTransitionChange = (event) => {
//     setAutoTransition(event.target.checked);
//   };

//   const handleDropdownToggle = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleDurationSelect = (duration) => {
//     setSelectedDuration(duration);
//     setTime(duration * 60);
//     setIsDropdownOpen(false);
//   };

//   const handleTabClick = (duration) => {
//     setSelectedDuration(duration);
//     setTime(duration * 60);
//     setIsBreak(duration !== 25);
//     setIsActive(false);
//   };

//   return (
//     <div className={`container ${isDropdownOpen ? 'expanded-container' : ''}`}>
//       <div className="timer-container">
//         <div className="timer">
//           <div>{formatTime(time)}</div>
//         </div>
//         <div className="timer-controls">
//           {!isActive && (
//             <button className="start-pause-btn" onClick={startTimer}>Start</button>
//           )}
//           {isActive && (
//             <button className="start-pause-btn" onClick={pauseTimer}>Pause</button>
//           )}
//           <button className="reset-btn" onClick={resetTimer}><img className="reset-img" src={reset} alt="reset"></img></button>
//         </div>
//         {isLongBreak() && (
//           <div>Take a long break!</div>
//         )}
//       </div>
  
//       <div className="tabs-container">
//         <div className="tabs">
//           <button className={`tab ${!isBreak ? 'active' : ''}`} onClick={() => handleTabClick(25)}>Pomodoro</button>
//           <button className={`tab ${isBreak && !isLongBreak() ? 'active' : ''}`} onClick={() => handleTabClick(5)}>Short Break</button>
//           <button className={`tab ${isBreak && isLongBreak() ? 'active' : ''}`} onClick={() => handleTabClick(15)}>Long Break</button>
//         </div>
//       </div>
  
//       <div className="dropdown-container">
//         <button className="dropdown-toggle" onClick={handleDropdownToggle}>
//           <span>&#9662;</span>
//         </button>
//         {isDropdownOpen && (
//           <div className="dropdown-menu">
//             <label className="auto-transition-label">
//               <input
//                 className="checkbox"
//                 type="checkbox"
//                 checked={autoTransition}
//                 onChange={handleAutoTransitionChange}
//               />
//               Auto-transition timer
//             </label>
//             <div className="dropdown-item">
//               <table className="duration-table">
//                 <thead>
//                   <tr>
//                     <th>Pomodoro</th>
//                     <th>Short Break</th>
//                     <th>Long Break</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td><button className="duration-button" onClick={() => handleDurationSelect(25)}>25</button></td>
//                     <td><button className="duration-button" onClick={() => handleDurationSelect(5)}>5</button></td>
//                     <td><button className="duration-button" onClick={() => handleDurationSelect(15)}>15</button></td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}
//       </div>
  
//       <hr />
//     </div>
//   );
  
// };

// export default Focus;

import React, { useState, useEffect } from 'react';
import './Focus.css';
import reset from '../reset.png';

const Focus = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerType, setTimerType] = useState('Work');
  const [workDuration, setWorkDuration] = useState(25);
  const [shortBreakDuration, setShortBreakDuration] = useState(5);
  const [longBreakDuration, setLongBreakDuration] = useState(15);
  const [currentBreakCount, setCurrentBreakCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [autoTransitionEnabled, setAutoTransitionEnabled] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else if (minutes > 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          clearInterval(intervalId);
          setIsRunning(false);
          handleTimerCompletion();
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, minutes, seconds]);

  const handleTimerCompletion = () => {
    if (timerType === 'Work') {
      if (currentBreakCount < 3) {
        setTimerType('Short Break');
        setMinutes(shortBreakDuration);
        setCurrentBreakCount((prevCount) => prevCount + 1);
      } else {
        setTimerType('Long Break');
        setMinutes(longBreakDuration);
        setCurrentBreakCount(0);
      }
    } else if (timerType === 'Short Break') {
      setTimerType('Work');
      setMinutes(workDuration);
    } else {
      // Timer type is 'Long Break'
      if (autoTransitionEnabled) {
        // Do not transition to any other state after Long Break
        setTimerType('Work');
        setMinutes(workDuration);
      } else {
        // Stay on Long Break after completion
        setMinutes(longBreakDuration);
      }
    }
  };
  

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimerType('Work');
    setMinutes(workDuration);
    setSeconds(0);
    setCurrentBreakCount(0);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleTimerChange = (duration) => {
    if (!isRunning) {
      setMinutes(duration);
      setSeconds(0);
      setAutoTransitionEnabled(false); // Reset the auto-transition state
    }
  };
  

  return (
    <div
      style={{
        background: '#243340',
        width: isDropdownOpen ? '280px' : '280px',
        height: isDropdownOpen ? '286px' : '162px',
        top: '96px',
        left: '1136px',
      }}
    >
      <div className='t-cont'>
        <div className='timer'>
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </div>
        <div className="start">
          {!isRunning ? (
            <button className='start-btn' onClick={startTimer}>Start</button>
          ) : (
            <button className='start-btn' onClick={pauseTimer}>Pause</button>
          )}
        </div>
        <div className="reset">
          {/* <button className='reset-btn' onClick={resetTimer}><img src={reset}></img></button> */}
          <button className="reset-btn" onClick={resetTimer}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <mask id="mask0_288_1245" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                <rect width="20" height="20" transform="matrix(-1 0 0 1 20 0.5)" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_288_1245)">
                <path d="M10 18.8334C11.0417 18.8334 12.0174 18.6355 12.9271 18.2396C13.8368 17.8438 14.6285 17.3091 15.3021 16.6355C15.9757 15.9618 16.5104 15.1702 16.9062 14.2605C17.3021 13.3507 17.5 12.375 17.5 11.3334H15.8333C15.8333 12.9584 15.2674 14.3368 14.1354 15.4688C13.0035 16.6007 11.625 17.1667 10 17.1667C8.375 17.1667 6.99653 16.6007 5.86458 15.4688C4.73264 14.3368 4.16667 12.9584 4.16667 11.3334C4.16667 9.70837 4.73264 8.3299 5.86458 7.19796C6.99653 6.06601 8.375 5.50004 10 5.50004H10.125L8.83333 6.79171L10 8.00004L13.3333 4.66671L10 1.33337L8.83333 2.54171L10.125 3.83337H10C8.95833 3.83337 7.98264 4.03129 7.07292 4.42712C6.16319 4.82296 5.37153 5.35768 4.69792 6.03129C4.02431 6.7049 3.48958 7.49657 3.09375 8.40629C2.69792 9.31601 2.5 10.2917 2.5 11.3334C2.5 12.375 2.69792 13.3507 3.09375 14.2605C3.48958 15.1702 4.02431 15.9618 4.69792 16.6355C5.37153 17.3091 6.16319 17.8438 7.07292 18.2396C7.98264 18.6355 8.95833 18.8334 10 18.8334Z" fill="#F2F2F2"/>
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button className='timer-btn' onClick={() => handleTimerChange(25)}>Pomodoro</button>
        <button className='timer-btn' onClick={() => handleTimerChange(5)}>Short Break</button>
        <button className='timer-btn' onClick={() => handleTimerChange(15)}>Long Break</button>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          &#9662;
        </button>
        <hr style={{ marginTop: '7.5px', marginBottom: '0' }} />
        {isDropdownOpen && (
          <div className="dropdown-content">
            <label>
              <input type="checkbox" />
              Auto-transition timer
            </label>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Pomodoro</th>
                    <th>Short Break</th>
                    <th>Long Break</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                      {/* this section doesnt change the timer display, and also doesnt start from the placeholder number. need to figure that out */}
                      <input type="number" id="dropdown-input" placeholder="25" min="0" max="60" onClick={() => handleTimerChange(25)}/>
                      {/* <button className="dropdown-input" onClick={() => handleTimerChange(25)}>25</button> */}
                    </td>
                    <td>
                      <input type="number" id="dropdown-input" placeholder="5" min="0" max="60" onClick={() => handleTimerChange(5)}/>
                      {/* <button className="dropdown-input" onClick={() => handleTimerChange(5)}>5</button> */}
                    </td>
                    <td>
                      <input type="number" id="dropdown-input" placeholder="15" min="0" max="60" onClick={() => handleTimerChange(15)}/>
                      {/* <button className="dropdown-input" onClick={() => handleTimerChange(15)}>15</button> */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Focus;
