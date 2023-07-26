import React from "react";
import "./Components/Breathe.css";
import congo from "./temp_preferences_custom.png";
import cancel from "./cancel.svg";

const Breathe3 = () => {
  const handleAnotherSessionClick = () => {
    window.location.href = "/breathe"; // Change the URL to "/breathe" on div click
  };
  return (
    <div className="breathe3">
      <div className="div">
        <div className="frame3">
          <div className="Noura">Noura</div>
          <img className="cancel" alt="Cancel" src={cancel}  />
        </div>
        <p className="p">Great job! You did it!</p>
        <div className="div-wrapper" onClick={handleAnotherSessionClick}>
          <div className="another-session">Another Session?</div>
        </div>
        <img className="temp-preferences" alt="Temp preferences" src={congo} />
      </div>
    </div>
  );
};

export default Breathe3;
