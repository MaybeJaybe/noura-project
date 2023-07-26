import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [startClicked, setStartClicked] = useState(false);
  // const [nextClicked, setNextClicked] = useState(false);

  const handleStartClick = () => {
    setStartClicked(true);
  };

  const handleButtonClick = (buttonId) => {
    if (buttonId === "b1") {
      handleStartClick();
      setSelectedButton(buttonId);
    } else if (buttonId === "b2") {
      handleStartClick();
      setSelectedButton(buttonId);
    } else if (buttonId === "b3") {
      handleStartClick();
      setSelectedButton(buttonId);
    } else if (buttonId === "b4") {
      handleStartClick();
      setSelectedButton(buttonId);
    } else if (buttonId === "b5") {
      handleStartClick();
      setSelectedButton(buttonId);
    } else if (buttonId === "Back") {
      setSelectedButton(null);
      setStartClicked(false);
      // setNextClicked(false);
    } else {
      setSelectedButton(buttonId);
    }
  };

  return (
    <div className="container">
      <div className="home">
        <nav className="nav">
          <div className="nav-title">Noura</div>
          <button className="close">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="cancel">
                <mask 
                  id="mask0_302_9"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect 
                    id="Bounding box"
                    width="20"
                    height="20"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_302_9)">
                  <path 
                    id="cancel_2" 
                    d="M7.00008 14.1667L10.0001 11.1667L13.0001 14.1667L14.1667 13L11.1667 10L14.1667 7.00002L13.0001 5.83335L10.0001 8.83335L7.00008 5.83335L5.83341 7.00002L8.83342 10L5.83341 13L7.00008 14.1667ZM10.0001 18.3334C8.8473 18.3334 7.76397 18.1146 6.75008 17.6771C5.73619 17.2396 4.85425 16.6459 4.10425 15.8959C3.35425 15.1459 2.7605 14.2639 2.323 13.25C1.8855 12.2361 1.66675 11.1528 1.66675 10C1.66675 8.84724 1.8855 7.76391 2.323 6.75002C2.7605 5.73613 3.35425 4.85419 4.10425 4.10419C4.85425 3.35419 5.73619 2.76044 6.75008 2.32294C7.76397 1.88544 8.8473 1.66669 10.0001 1.66669C11.1529 1.66669 12.2362 1.88544 13.2501 2.32294C14.264 2.76044 15.1459 3.35419 15.8959 4.10419C16.6459 4.85419 17.2397 5.73613 17.6772 6.75002C18.1147 7.76391 18.3334 8.84724 18.3334 10C18.3334 11.1528 18.1147 12.2361 17.6772 13.25C17.2397 14.2639 16.6459 15.1459 15.8959 15.8959C15.1459 16.6459 14.264 17.2396 13.2501 17.6771C12.2362 18.1146 11.1529 18.3334 10.0001 18.3334ZM10.0001 16.6667C11.8612 16.6667 13.4376 16.0209 14.7292 14.7292C16.0209 13.4375 16.6667 11.8611 16.6667 10C16.6667 8.13891 16.0209 6.56252 14.7292 5.27085C13.4376 3.97919 11.8612 3.33335 10.0001 3.33335C8.13897 3.33335 6.56258 3.97919 5.27091 5.27085C3.97925 6.56252 3.33341 8.13891 3.33341 10C3.33341 11.8611 3.97925 13.4375 5.27091 14.7292C6.56258 16.0209 8.13897 16.6667 10.0001 16.6667Z" 
                    fill="#F2F2F2"
                  />
                </g>
              </g>
            </svg>
          </button>
        </nav>
        <div className="button-select">
          <p
            className={`prompt ${selectedButton || startClicked ? "hidden" : ""}`}
          >
            What would you like to do?
          </p>
          <div
            className={`btn-container ${
              selectedButton || startClicked ? "hidden" : ""
            }`}
          >
            <div className="btn-item">
              <Link to="/stretch">
                <button
                  type="button"
                  id="b1"
                  className="button"
                  onClick={() => handleButtonClick("b1")}
                >
                  Stretch
                </button>
              </Link>
            </div>
            <div className="btn-item">
              <Link to="/focus">
                <button
                  type="button"
                  id="b2"
                  className="button"
                  onClick={() => handleButtonClick("b2")}
                >
                  Focus
                </button>
              </Link>
            </div>
            <div className="btn-item">
              <Link to="/breathe">
                <button
                  type="button"
                  id="b3"
                  className="button"
                  onClick={() => handleButtonClick("b3")}
                >
                  Breathe
                </button>
              </Link>
            </div>
            <div className="btn-item">
              <Link to="/water">
                <button
                  type="button"
                  id="b4"
                  className="button"
                  onClick={() => handleButtonClick("b4")}
                >
                  Water
                </button>
              </Link>
            </div>
            <div className="btn-item">
              <Link to="/custom">
                <button
                  type="button"
                  id="b5"
                  className="button"
                  onClick={() => handleButtonClick("b5")}
                >
                  Custom
                </button>
              </Link>
            </div>
          </div>
          {startClicked && <Outlet />}
        </div>

        {/* eventually change back button to be going to the previous page instead of the home page */}
        
        <div className="bottom-link">
          {startClicked && (
            <Link to="/">
              <button
                type="button"
                className="bottom-button"
                onClick={() => handleButtonClick("Back")}
              >
                {selectedButton ? "Back" : "Next"}
              </button>
            </Link>
          )}

          {/* hiding "Next" button for now as we have no use for it, but this was what i was working on */}

          {/* Render different content based on "Next" button state */}
          {/* {nextClicked ? (
            <Link to="/">
              <button
                type="button"
                className="bottom-button"
                onClick={() => handleButtonClick("Back")}
              >
                Back
              </button>
            </Link>
          ) : (
            <Link to="/streak">
              <button
                type="button"
                className="bottom-button"
                onClick={() => handleButtonClick("Next")}
              >
                Next
              </button>
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Home;
