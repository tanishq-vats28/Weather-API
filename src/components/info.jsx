export default function Info({ data }) {
  return (
    <>
      <div className="info">
        <div className="section">
          <div className="section-content">
            <div className="temperature-icon">
              <h1>{data.temperature_c} °C</h1>
              <img src={data.img} alt="Weather Icon" className="weather-icon" />
            </div>
            <div className="section-content2">
              <h3>Location:</h3>
              <p>
                {data.city}, {data.country} <br />
                Coordinate: {data.lat}, {data.lon} <br />
                Local Time: {data.localtime}
              </p>
            </div>
          </div>
        </div>
        <div className="section-two">
          <p>
            <label>Condition: </label> {data.condition}
          </p>
          <p>
            <label>Feels Like : </label> {data.feelslike_c} °C
          </p>
          <p>
            <label>Humidity : </label> {data.humidity} %
          </p>
          <p>
            <label>Cloud Cover : </label> {data.cloud} %
          </p>
          <p>
            <label>Wind Speed : </label> {data.wind_kph} kph
          </p>
        </div>
      </div>
      <hr />
    </>
  );
}
