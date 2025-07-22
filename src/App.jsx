import { useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherInformations from "./components/WeatherInformations/WeatherInformations";

function App() {
  const [weather, setWeather] = useState(null);
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "77fae7631bce866108573dce8ade401f";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    setWeather(apiInfo.data);
  }

  return (
    <div>
      <h1>DevClub Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>
      <WeatherInformations weather={weather} />
    </div>
  );
}

export default App;
