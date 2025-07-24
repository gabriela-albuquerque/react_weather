/* eslint-disable react/prop-types */
import "./Weather5Day.css";

function Weather5Day({ weather5Day }) {
  let dailyForecast = {};

  for (let forecast of weather5Day.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  const next5DayForecast = Object.values(dailyForecast).slice(1, 6);

  function convertDate(date) {
    const newDate = new Date(date.dt_txt).toLocaleDateString("pt-BR", {
      weekday: "short",
      day: "2-digit",
    });

    return newDate;
  }

  return (
    <div className="weather-container">
      <p>Previsão Próximos 5 Dias</p>
      {next5DayForecast.map((forecast) => (
        <div key={forecast.dt}>
          <p>{convertDate(forecast)}</p>
          <img
            src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
            alt=""
          ></img>
          <p>{forecast.weather[0].description}</p>
          <p>
            {Math.round(forecast.main.temp_min)}ºC min /{" "}
            {Math.round(forecast.main.temp_max)}ºC max
          </p>
        </div>
      ))}
    </div>
  );
}

export default Weather5Day;
