import React, { useState, useEffect } from "react";
import "./WeatherDetail.css";
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

export default function UserLocationWeather({ handleUserLocationData }) {
  const fetchWeather = async (latitude, longitude) => {
    const url = `https://${API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    const response = await fetch(url, { method: "GET" });
    const data = await response.json();
    console.log(data);
    handleUserLocationData(data, data.name, data.sys.country);
  };
  const fetchWeatherBasedonUserLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(latitude, "longitude", longitude);
          fetchWeather(latitude, longitude);
        },

        (err) => {
          console.log(err);
        }
      );
    } else {
      console.log("Something went wrong!");
    }
  };

  return (
    <button
      className="location_button"
      onClick={fetchWeatherBasedonUserLocation}
    >
      See the weather based on your location.
    </button>
  );
}
