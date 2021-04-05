import React from "react";

function Weather(props) {
  return (
    <div className="weather-box">
      <div className="temp">
          {Math.round(props.weather.main.temp)}°C
      </div>
      <div className="weather">
          {props.weather.weather[0].main}
      </div>
    </div>
  );
}

export default Weather;
