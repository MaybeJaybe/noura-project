import React, { useState, useEffect } from "react";
import "./Components/Water.css";
// import "./Water3.css";
import { useNavigate, useLocation } from "react-router-dom";

function Water3() {
  const [isRunning, setIsRunning] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const data_number = location?.state?.number;
  const data_minute = location?.state?.minute;
  const [workDuration, setWorkDuration] = useState(data_minute);
  const [minutes, setMinutes] = useState(data_minute);
  const [seconds, setSeconds] = useState(0);
  const [currentBreakCount, setCurrentBreakCount] = useState(0);
  const handleClick = () => {
    navigate("/");
  };
  const startTimer = () => {
    setIsRunning(true);
  };
	const pauseTimer = () => {
    setIsRunning(false);
  };
  const resetTimer = () => {
    setIsRunning(false);
    // setTimerType("Work");
    setMinutes(workDuration);
    setSeconds(0);
    setCurrentBreakCount(0);
  };
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
          // handleTimerCompletion();
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, minutes, seconds]);
  return (
    <div className="water">
      <div className="div">
        <div className="frame">
        </div>
        <div className="text-wrapper-2">Daily water gauge.</div>
        <p className="p">Keep it up! Next water break in:</p>
        <div className="text-wrapper-3">{data_number}oz</div>
        <div className="text-wrapper-4">0 oz</div>
        <div className="overlap-group">
          <div className="rectangle" />
        </div>
        <h1 className="h-1">
          <div className="t-cont">
            <div className="timer">
              {minutes.toString().padStart(2, "0")}:
              {seconds.toString().padStart(2, "0")}
            </div>
            <div className="start">
              {!isRunning ? (
                <button className="start-btn" onClick={startTimer}>
                  Start
                </button>
              ) : (
                <button className="start-btn" onClick={pauseTimer}>
                  Pause
                </button>
              )}
            </div>
            <div className="reset">
              <button className="reset-btn" onClick={resetTimer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <mask
                    id="mask0_288_1245"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="21"
                  >
                    <rect
                      width="20"
                      height="20"
                      transform="matrix(-1 0 0 1 20 0.5)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_288_1245)">
                    <path
                      d="M10 18.8334C11.0417 18.8334 12.0174 18.6355 12.9271 18.2396C13.8368 17.8438 14.6285 17.3091 15.3021 16.6355C15.9757 15.9618 16.5104 15.1702 16.9062 14.2605C17.3021 13.3507 17.5 12.375 17.5 11.3334H15.8333C15.8333 12.9584 15.2674 14.3368 14.1354 15.4688C13.0035 16.6007 11.625 17.1667 10 17.1667C8.375 17.1667 6.99653 16.6007 5.86458 15.4688C4.73264 14.3368 4.16667 12.9584 4.16667 11.3334C4.16667 9.70837 4.73264 8.3299 5.86458 7.19796C6.99653 6.06601 8.375 5.50004 10 5.50004H10.125L8.83333 6.79171L10 8.00004L13.3333 4.66671L10 1.33337L8.83333 2.54171L10.125 3.83337H10C8.95833 3.83337 7.98264 4.03129 7.07292 4.42712C6.16319 4.82296 5.37153 5.35768 4.69792 6.03129C4.02431 6.7049 3.48958 7.49657 3.09375 8.40629C2.69792 9.31601 2.5 10.2917 2.5 11.3334C2.5 12.375 2.69792 13.3507 3.09375 14.2605C3.48958 15.1702 4.02431 15.9618 4.69792 16.6355C5.37153 17.3091 6.16319 17.8438 7.07292 18.2396C7.98264 18.6355 8.95833 18.8334 10 18.8334Z"
                      fill="#F2F2F2"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Water3;