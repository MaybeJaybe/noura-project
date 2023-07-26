import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Components/Water.css";

function Water1(props) {
  const {
    whatIsYourTarget,
    number,
    oz,
    theUSNationalAc,
    next,
    temp,
    Every,
    rom,
  } = props;
  console.log(rom + "pp");
  const [nnumber, setnnumber] = useState("0");
  return (
    <div className="water-container">
      <div className="water1 screen">
        <div className="frame-29">
        </div>
        <div className="oz-prompt">
          {whatIsYourTarget}
        </div>
        <div className="oz-prompt">
          <div className="oz-prompt">{Every}</div>
          <div className="num-input">
            <input
              className="number"
              value={nnumber}
              onChange={(e) => {
                setnnumber(e.target.value);
              }}
            />
          </div>
          <div className="oz-prompt">{oz}</div>
        </div>
        <p className="info">{theUSNationalAc}</p>
        <div className="frame-27">
          <div className="next">
            <Link
              to={`/${nnumber === "" ? "" : rom}`}
              state={
                rom === "water2"
                  ? { number: nnumber }
                  : { number: temp, minute: nnumber }
              }
            >
              {nnumber === "" ? "back" : next}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Water1;
