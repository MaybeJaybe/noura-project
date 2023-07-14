import React from "react";
import "./geet.css";
import { Link } from "react-router-dom";

export const Getup = () => {
  return (
    <div className="getup1">
      <div className="frame">
        <Link to="/getup1">
          {" "}
          <a className="text-wrapper">Start</a>
          {/* <div className="text-wrapper">Start</div> */}
        </Link>
      </div>
      <div className="getup-div">
        <p className="p">
          It’s recommended to get up and move a few minutes each hour during a
          workday. How often do you want to move?
        </p>
        <div className="frame-2">
          <div className="div-wrapper">
            <input type="number" id="number" placeholder="0" max="30"/>
          </div>
          <div className="text-wrapper-3">minutes per hour</div>
        </div>
      </div>
    </div>
  );
};
