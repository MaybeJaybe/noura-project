import React from "react";
import { Link } from "react-router-dom";
import "./Stretch.css";

const Stretch = () => {
  return (
    <div className="stretch-container">
      <p className="prompt">
        It’s recommended to get up and move a few minutes each hour during a workday. How often do you want to move?
      </p>
      <div className="input-container">
        <div className="div-wrapper">
          <input type="number" id="number" placeholder="0" min="0" max="30"/>
        </div>
        <div className="text-wrapper">minutes per hour</div>
        <Link to="/stretch1">
          <button 
            type="button"
            className="start-button"
          >
            Start
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Stretch;
