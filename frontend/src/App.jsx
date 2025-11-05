import { useState } from "react";
import Weather from "./components/Weather";
import Converter from "./components/Converter";
import Quotes from "./components/Quotes";

export default function App() {
  const [tab, setTab] = useState("weather");

  const tabStyle = (name) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-all ${
      tab === name
        ? "bg-blue-600 text-white shadow-lg scale-105"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col w-full py-10">

      <h1 className="text-4xl font-bold mb-8 flex items-center gap-2 text-center mx-auto">
        🌐 InfoHub
      </h1>

      <div className="flex gap-4 mb-8 justify-center">
        <button className={tabStyle("weather")} onClick={() => setTab("weather")}>☀️ Weather</button>
        <button className={tabStyle("converter")} onClick={() => setTab("converter")}>💱 Converter</button>
        <button className={tabStyle("quotes")} onClick={() => setTab("quotes")}>💬 Quotes</button>
      </div>

<div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700 p-6 rounded-2xl shadow-xl w-full max-w-lg mx-auto">
        {tab === "weather" && <Weather />}
        {tab === "converter" && <Converter />}
        {tab === "quotes" && <Quotes />}
      </div>
    </div>
  );
}
