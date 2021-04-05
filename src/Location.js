import React from "react";

function Location(props) {
  return (
    <div className="location-box">
      <div className="location">
        {props.weather.name}, {props.weather.sys.country}
      </div>
      <div className="date">{props.dateBuilder(new Date())}</div>
    </div>
  );
}

export default Location;
