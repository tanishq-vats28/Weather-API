import { useState } from "react";

export default function Search({ handleOnSearch }) {
  const [city, setCity] = useState("");

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const fetchData = (jsonObj) => {
    const obj = {
      city: jsonObj.location.name,
      localtime: jsonObj.location.localtime,
      temperature_c: jsonObj.current.temp_c,
      feelslike_c: jsonObj.current.feelslike_c,
      humidity: jsonObj.current.humidity,
      cloud: jsonObj.current.cloud,
      wind_kph: jsonObj.current.wind_kph,
      country: jsonObj.location.country,
      lat: jsonObj.location.lat,
      lon: jsonObj.location.lon,
      condition: jsonObj.current.condition.text,
      img: jsonObj.current.condition.icon,
    };
    handleOnSearch(obj);
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();
    const URL = `https://api.weatherapi.com/v1/current.json?key=7460e1470f784297aa1103605241206&q=${city}`;
    try {
      const response = await fetch(URL);
      const jsonResponse = await response.json();

      fetchData(jsonResponse);
    } catch (error) {
      console.error("Error fetching the weather data", error);
    }
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="Enter city name"
        />
        <button type="submit">INFO</button>
      </form>
    </div>
  );
}
