import React from 'react';
import './Components/Breathe.css';
import congo from './temp_preferences_custom.png';

const Breathe3 = () => {
	const handleAnotherSessionClick = () => {
		window.location.href = '/breathe';
	};
  return (
    <div className='breathe3'>
      <div className='div'>
        <p className='p'>Great job! You did it!</p>
        <div className='div-wrapper' onClick={handleAnotherSessionClick}>
          <div className='another-session'>Another Session?</div>
        </div>
        <img className='temp-preferences' alt='Temp preferences' src={congo} />
      </div>
    </div>
  );
};

export default Breathe3;
