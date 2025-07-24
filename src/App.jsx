import { useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherInformations from "./components/WeatherInformations/WeatherInformations";
import Weather5Day from "./components/Weather5Day/Weather5Day";

function App() {
  const [weather, setWeather] = useState();
  const [weather5Day, setWeather5Day] = useState();
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "77fae7631bce866108573dce8ade401f";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const url5Day = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    const apiInfo5Day = await axios.get(url5Day);

    setWeather(apiInfo.data);
    setWeather5Day(apiInfo5Day.data);
  }

  return (
    <div className="container">
      <h1>DevClub Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>
      {weather && <WeatherInformations weather={weather} />}
      {weather5Day && <Weather5Day weather5Day={weather5Day} />}
    </div>
  );
}

export default App;
