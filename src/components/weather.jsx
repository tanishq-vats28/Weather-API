import Info from "./info.jsx";
import Search from "./searchbox.jsx";
import { useState } from "react";
import "./weather.css";

export default function Weather() {
  const [truth, setTruth] = useState(false);
  const [data, setData] = useState({
    city: "",
    localtime: "",
    temperature_c: 0,
    feelslike_c: 0,
    humidity: 0,
    cloud: 0,
    wind_kph: 0,
    country: "",
    lat: 0,
    lon: 0,
    condition: "",
    img: "",
  });

  const handleOnSearch = (obj) => {
    setData(obj);
    setTruth(true);
  };

  return (
    <div className="weather">
      <br />
      <h1>SEEMS LIKE YOU ARE WORRIED ABOUT WEATHER!</h1>
      <Search handleOnSearch={handleOnSearch} />
      <hr />
      {truth && <Info data={data} />}
      <h4>DEVELOPED AND DESIGNED BY TANISHQ VATS</h4>
    </div>
  );
}
