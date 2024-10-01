import "./App.css";
import PredictWeather from "./components/PredictWeather";
import WeatherDetails from "./components/Weather";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import NotFound from "./components/NotFound.js";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<WeatherDetails />} />
        <Route path="/predictWeather" element={<PredictWeather />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
