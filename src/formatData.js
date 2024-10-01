import { convert } from "./components/util/convert.js";
import { dummy_predict } from "./dummydata.js";

export const formatPredictions = () => {
  const data = {
    label: {},
  };

  dummy_predict["list"].map((weather) => {
    const day = weather.dt_txt.split(" ")[0];
    const time = weather.dt_txt.split(" ")[1];
    if (!data[day]) {
      data[day] = {
        times: {},
      };
    }

    data[day].times[time] = {
      Humidity: weather["main"].humidity,
      "Wind Speed": weather["wind"].speed,
      Temperature: convert(weather["main"].temp),
      description: weather["weather"][0].description,
    };
  });
  return data;
};
