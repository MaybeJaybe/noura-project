import React from "react";
import "./Custom.css";

const Custom = () => {
	return (
		<div className="custom-container">
			<p className="custom-prompt">What are we tracking?</p>
			<div class="custom-dropdown">
				<select id="custom-dropdown">
					<option value="blank">_</option>
					<option value="snack">Snack Break</option>
					<option value="socialize">Socialize</option>
				</select>
			</div>
			<p className="custom-prompt">How often do you want a reminder?</p>
			<div class="time-dropdown">
				<select id="time-dropdown">
					<option value="hourly">Every hour</option>
					<option value="daily">Every day</option>
					<option value="weekly">Every week</option>
					<option value="yearly">Every year</option>
					<option value="custom">Custom period</option>
				</select>
			</div>
			<div className="start-wrapper">
				<button className="custom-start-btn">Start</button>
			</div>
		</div>
	)
}

export default Custom;