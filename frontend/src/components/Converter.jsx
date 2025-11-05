import { useState } from "react";
import axios from "axios";

function Converter() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);

  const convert = async () => {
    if (!amount.trim()) return;
    const res = await axios.get(`http://localhost:5000/api/convert?amount=${amount}`);
    setResult(res.data);
  };

  return (
    <div className="space-y-4 w-">
      <h2 className="text-xl font-semibold flex items-center gap-2">💱 Currency Converter</h2>

      <div className="flex gap-3">
        <input
          type="number"
          placeholder="INR amount"
          className="flex-1 px-4 py-2 rounded-lg bg-gray-700/40 border border-gray-600 text-white placeholder-gray-400 focus:ring focus:ring-blue-500"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={convert}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition shadow"
        >
          Convert
        </button>
      </div>

      {result && (
        <p className="p-4 rounded-lg bg-gray-700/40 border border-gray-600 text-center text-lg tracking-wide">
          ₹{result.inr} → ${result.usd} USD / €{result.eur} EUR
        </p>
      )}
    </div>
  );
}

export default Converter;
