import React, { useEffect, useState } from "react";
import { convert } from "./util/convert.js";
import { dummy_predict } from "../dummydata.js";
import { formatPredictions } from "../formatData.js";
import AvailableDays from "./AvailableDays.js";
import "./PredictWeather.css";
import { useLocation, useNavigate } from "react-router-dom";
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

export default function PredictWeather() {
  const location = useLocation();
  const navigate = useNavigate();
  const { city, country } = location.state || {};

  const [fiveDaysPredictions, setFiveDaysPredictions] = useState({});

  useEffect(() => {
    if (!city) {
      alert("Please Choose a city!");
      navigate("/");
    }

    const fetchWeatherPrediction = async () => {
      const url = `https://${API_URL}/forecast?q=${city}&appid=${API_KEY}`;
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();
      setFiveDaysPredictions(formatPredictions(data));
    };

    fetchWeatherPrediction();
  }, []);

  return (
    <div>
      <p>
        🌤️ Current Weather: <strong>{city}</strong>, <strong>{country}</strong>
      </p>
      <AvailableDays days={fiveDaysPredictions} />
    </div>
  );
}
