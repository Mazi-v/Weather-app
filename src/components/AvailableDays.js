import React, { useState } from "react";
import Tabs from "./Tabs";
import WeatherDetail from "./WeatherDetail";
import "./PredictWeather.css";

export default function AvailableDays({ days }) {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleSelectTime = (time) => {
    setSelectedTime(time);
  };

  const handleSelectDay = (day) => {
    setSelectedDay(day);
    setSelectedTime(null);
  };

  const availableDays = Object.keys(days).filter(
    (key) => key !== "label" && days[key].times
  );

  return (
    <div className={"availableDays_container"}>
      {availableDays.length > 0 && (
        <div className={"main_AvailableDays_Container"}>
          <Tabs
            className={"days_tabs_container"}
            options={availableDays}
            onSelect={handleSelectDay}
            selectedOption={selectedDay}
          />
        </div>
      )}

      {selectedDay && (
        <div className="times_tab_container">
          <Tabs
            className={"times_tabs_container"}
            options={Object.keys(days[selectedDay].times)}
            onSelect={handleSelectTime}
            selectedOption={selectedTime}
          />
        </div>
      )}

      {selectedTime && selectedDay && (
        <div className="weather_container">
          <WeatherDetail
            description={days[selectedDay].times[selectedTime].description}
            Temperature={days[selectedDay].times[selectedTime].Temperature}
            Wind_Speed={days[selectedDay].times[selectedTime]["Wind Speed"]}
            Humidity={days[selectedDay].times[selectedTime].Humidity}
          />
        </div>
      )}
    </div>
  );
}
