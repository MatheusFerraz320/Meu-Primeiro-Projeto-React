import { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
{
  /* Logica JS */
}
export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const apiKey = "6810eed503dba575c0243dd41638906a";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error("Erro ao buscar clima:", error);
      setError("Cidade inexistente ou erro de conexão  ");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-4xl font-bold text-indigo-700">Clima Atual</h1>

      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Digite a cidade"
        className="px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        onClick={fetchWeather}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300"
      >
        Buscar Clima
      </button>
      {error && <p className="text-red-500 font-medium">{error}</p>}

      <WeatherCard weather={weather} />
    </div>
  );
}
