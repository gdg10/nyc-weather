import React from "react";

const CurrentWeather = ({ currentWeather }) => {
  return (
    <React.Fragment>
      <p id={1}>{currentWeather.weather[0].main} & {currentWeather.main.temp}° F</p>
      {/* <p id={1}>{currentWeather.weather[0].description}</p>
      <p id={2}>{currentWeather.main.description}</p>
      <p id={3}>{currentWeather.main.humidity}</p>
      <p id={4}>{currentWeather.main.pressure}</p>
      <p id={6}>{currentWeather.main.temp_max}</p>
      <p id={7}>{currentWeather.main.temp_min}</p> */}
    </React.Fragment>
  );
};

export default CurrentWeather;
