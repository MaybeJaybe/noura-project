import React from "react";
import Water1 from "./Water1";
import { useLocation } from "react-router-dom";
import "./Components/Water.css";

function Water2(props) {
  const {
    noura,
    cancel,
    whatIsYourTarget,
    number,
    oz,
    theUSNationalAc,
    next,
    rom,
  } = props;
  const location = useLocation();
  console.log(location);
  return (
    <Water1
      whatIsYourTarget="How often do you want to be reminded?"
      oz="mins"
      next="Next"
      Every="Every"
      rom="water3"
    />
  );
}

export default Water2;
