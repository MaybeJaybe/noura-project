import React from "react";
import "./Components/Breathe.css";

const Breathe3 = () => {
	const handleAnotherSessionClick = () => {
		window.location.href = "/breathe";
	};
  return (
    <div className="breathe3">
      <div className="div">
        <p className="p">Great job! You did it!</p>
        <div className="div-wrapper" onClick={handleAnotherSessionClick}>
          <div className="another-session">Another Session?</div>
        </div>
        <div className="sparkles">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="92" 
            height="92" 
            viewBox="0 0 92 92" 
            fill="none"
          >
            <path 
              d="M75.1665 33.5L69.9582 22.0417L58.4998 16.8333L69.9582 11.625L75.1665 0.166656L80.3748 11.625L91.8332 16.8333L80.3748 22.0417L75.1665 33.5ZM75.1665 91.8333L69.9582 80.375L58.4998 75.1667L69.9582 69.9583L75.1665 58.5L80.3748 69.9583L91.8332 75.1667L80.3748 80.375L75.1665 91.8333ZM33.4998 79.3333L23.0832 56.4167L0.166504 46L23.0832 35.5833L33.4998 12.6667L43.9165 35.5833L66.8332 46L43.9165 56.4167L33.4998 79.3333ZM33.4998 59.125L37.6665 50.1667L46.6248 46L37.6665 41.8333L33.4998 32.875L29.3332 41.8333L20.3748 46L29.3332 50.1667L33.4998 59.125Z" 
              fill="#9FB6BF"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Breathe3;
