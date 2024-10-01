import React, { useState } from "react";
import Select from "react-select";
// import { dummy } from "../dummydata.js";
import { countriesList, cities_list } from "../data/countries.js";
import "./WeatherDetail.css";
import { convert } from "./util/convert.js";
import WeatherDetail from "./WeatherDetail.js";
import { Link } from "react-router-dom";
import UserLocationWeather from "./UserLocationWeather.js";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

export default function WeatherDetails() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState();
  const [country, setCountry] = useState();

  const fetchWeather = () => {
    const predict = async () => {
      try {
        const url = `https://${API_URL}/weather?q=${city}&appid=${API_KEY}`;
        const response = await fetch(url, { method: "GET" });
        const data = await response.json();
        if (data && data.main) {
          setWeather(data);
        } else {
          console.error("Weather data not found");
        }
      } catch (err) {
        console.error("Error fetching weather:", err);
      }
    };
    predict();
  };
  const chooseCountry = (e) => {
    setCountry(e.value);
  };
  const chooseCity = (e) => {
    setCity(e.value);
  };
  const handleUserLocationData = (data, city, country) => {
    setWeather(data);
    setCountry(country);
    setCity(city);
  };

  return (
    <div className="main-container">
      <UserLocationWeather
        handleUserLocationData={handleUserLocationData}
      ></UserLocationWeather>

      <div className="weather-container">
        <div className="dropdown-container">
          <Select
            placeholder="Choose a country"
            defaultValue={country}
            onChange={chooseCountry}
            options={countriesList}
          />
          <Select
            placeholder="Choose a city"
            defaultValue={city}
            onChange={(e) => chooseCity(e)}
            options={cities_list[country]}
            isDisabled={!country}
          />
          <div className="button_container">
            <button
              disabled={!city}
              className="submit-button"
              onClick={fetchWeather}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      {weather && (
        <div className="WeatherDetail-container">
          <p>
            🌤️ Current Weather: <strong>{city}</strong>,{" "}
            <strong>{country}</strong>
          </p>
          <WeatherDetail
            description={weather["weather"][0].description}
            Temperature={convert(weather["main"].temp)}
            Wind
            Speed={weather["wind"].speed}
            Humidity={weather["main"].humidity}
            city={city}
          />
          <Link to={"/predictWeather"} state={{ city, country }}>
            <button disabled={!city || !country} className="next-days-button">
              See 5-Day Forecast
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
