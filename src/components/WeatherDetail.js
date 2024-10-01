import "./WeatherDetail.css";
export default function WeatherDetail({
  description,
  Temperature,
  Wind_Speed,
  Humidity,
}) {
  return (
    <div className="weather-card">
      <div className="weather-details">
        <p>
          <b>description:</b> {description}
        </p>
        <p>
          <b>Temperature:</b> {Temperature}°C
        </p>
        <p>
          <b>Wind Speed:</b> {Wind_Speed} km/h
        </p>
        <p>
          <b>Humidity:</b> {Humidity}%
        </p>
        <p></p>
      </div>
    </div>
  );
}
