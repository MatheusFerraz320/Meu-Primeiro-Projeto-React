import React from "react";

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const { name, main, weather: details } = weather;
  const icon = details[0].icon;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center max-w-sm mx-auto">
      <h2 className="text-2xl font-bold text-indigo-600">{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Ícone do clima"
        className="mx-auto"
      />
      <p className="text-gray-700 text-xl capitalize">
        {details[0].description}
      </p>
      <p className="text-3xl font-semibold text-gray-900">
        {Math.round(main.temp)}°C
      </p>
    </div>
  );
}
