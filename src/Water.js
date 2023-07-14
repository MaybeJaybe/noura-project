import "./Water1.css";
import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Water1 from "./Water1";
function Water() {
  return (
    <Water1
      whatIsYourTarget="What is your target?"
      oz="oz."
      number={0}
      theUSNationalAc={
        <React.Fragment>
          <p>
            The U.S. National Academies of Sciences, Engineering, and Medicine
            determined that an adequate daily fluid intake is:
          </p>
          <ul>
            <li>
              About 15.5 cups (124 oz) of fluids a day for men
            </li>
            <li>
              About 11.5 cups (92 oz) of fluids a day for women
            </li>
          </ul>
          {/* The U.S. National Academies of Sciences, Engineering, and Medicine
          determined that an adequate daily fluid intake is:
          <br />
          About 15.5 cups (124 oz) of fluids a day for men
          <br />
          About 11.5 cups (92 oz) of fluids a day for women */}
        </React.Fragment>
      }
      next="Next"
      rom="water2"
    />
  );
}

export default Water;
