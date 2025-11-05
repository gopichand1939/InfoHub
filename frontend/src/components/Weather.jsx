import { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city.trim()) return;
    setError("");
    setData(null);

    try {
      const res = await axios.get(`http://localhost:5000/api/weather?city=${city}`);
      setData(res.data);
    } catch {
      setError("City not found");
    }
  };

  return (
    <div className="space-y-4 w-full">
      <h2 className="text-xl font-semibold flex items-center gap-2">🌤 Weather Information</h2>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter city name"
          className="flex-1 px-4 py-2 rounded-lg bg-gray-700/40 border border-gray-600 text-white placeholder-gray-400 focus:ring focus:ring-blue-500"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && getWeather()}
        />
        <button
          onClick={getWeather}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition shadow"
        >
          Check
        </button>
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      {data && (
        <div className="p-4 rounded-lg bg-gray-700/40 border border-gray-600 space-y-1">
          <h3 className="text-lg font-medium">{data.city}</h3>
          <p>Temperature: {data.temperature}°C</p>
          <p>Condition: {data.description || data.weather_code}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
