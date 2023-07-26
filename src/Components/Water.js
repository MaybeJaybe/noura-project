// import React, { useState } from "react";
// import "./Water.css";
// import {
//   Route,
//   BrowserRouter as Router,
//   Routes,
//   useLocation,
// } from "react-router-dom";

// const Water = () => {
//   return (
//     <div className="water-container">
//       <p className="oz-prompt">
//         What is your target?
//       </p>
//       <div className="div-wrapper">
//         <div className="num-input">
//           <input type="number" id="number" placeholder="0" min="0" max="100"/>
//         </div>
//         <p className="oz-text">oz.</p>
//       </div>
//       <div className="info">
//         <p className="info-preamble">
//           The U.S. National Academies of Sciences, Engineering, and Medicine
//           determined that an adequate daily fluid intake is:
//         </p>
//         <ul className="bullet-list">
//           <li>
//             About 15.5 cups (124 oz) of fluids a day for men
//           </li>
//           <li>
//             About 11.5 cups (92 oz) of fluids a day for women
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default Water;

import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Water1 from "../Water1";
function Water() {
  return (
    <Water1
      whatIsYourTarget="What is your target?"
      oz="oz."
      number={0}
      theUSNationalAc={
        <React.Fragment>
          The U.S. National Academies of Sciences, Engineering, and Medicine
          determined that an adequate daily fluid intake is:
          <br />
          About 15.5 cups (124 oz) of fluids a day for men
          <br />
          About 11.5 cups (92 oz) of fluids a day for women
        </React.Fragment>
      }
      next="Next"
      rom="water2"
    />
  );
}

export default Water;
