import React, { useState } from 'react';
import Select from 'react-select';
import {countries} from '../data/countries.js' ;
// import {dummy} from '../dummydata.js'
const API_KEY = process.env.REACT_APP_WEATHERBIT_API_KEY;
const API_URL = process.env.REACT_APP_WEATHERBIT_API_URL

const countriesList =[]
let cities_list ={}
Object.entries(countries).forEach(([country, cities]) =>{countriesList.push({value:country,label:country})
const curr_cities = cities.map(city => ({ value: city, label: city }));
cities_list[country]=curr_cities

} 
)
export default function WeatherDetails() {
    const [weather,setWeather]=useState(null)
    const [city, setCity] = useState(null); 
    const [country, setCountry] = useState(null); 
    const fetchWeather=() =>{
        const predict = async()=>{ 
            try{
                const url = `https://${API_URL}/current?access_key=${API_KEY}&query=${city}`
                const response = await fetch(url,{method:'GET'})
                const data = await response.json(); 
                if (data && data.current) {
                  setWeather(data.current); 
                  console.log('Weather data:', data.current);
                } else {
                  console.error('Weather data not found');
                }
              } catch (err) {
                console.error('Error fetching weather:', err);
              }
    
    }
    predict();
}
    const chooseCountry= (e)=>{
        console.log(e.value)
        setCountry(e.value)
    }
    const chooseCity= (e)=>{
        setCity(e.value)
    }

  return (
    <div>
            <Select placeholder='Choose a country' defaultValue = {country} onChange={chooseCountry} options={countriesList}  />
            <Select placeholder='Choose a city' defaultValue = {city} onChange={(e)=>chooseCity(e)} options={cities_list[country]}/>
            {weather &&<div>temperature: {weather['temperature']}</div>}
            {weather  &&<img src = {weather['weather_icons']}/>}
            {weather &&<div>wind_speed: {weather['wind_speed']}</div>}
            {weather  &&<div>humidity: {weather && weather['humidity']}</div>}
            {weather &&<div>uv_index: {weather && weather['uv_index']  }</div>}
           <button type="submit" onClick={fetchWeather}> submit</button>
          <div>
     
    </div>
     

    </div>
  )

}
