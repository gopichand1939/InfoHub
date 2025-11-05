import { useState } from "react";
import axios from "axios";

function Quotes() {
  const [quote, setQuote] = useState("");

  const getQuote = async () => {
    const res = await axios.get("http://localhost:5000/api/quote");
    setQuote(res.data.quote);
  };

  return (
    <div className="space-y-4 w-full">
      <h2 className="text-xl font-semibold flex items-center gap-2">💬 Motivational Quotes</h2>

      <button
        onClick={getQuote}
        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition shadow"
      >
        New Quote
      </button>

      {quote && (
        <p className="p-4 rounded-lg bg-gray-700/40 border border-gray-600 italic text-lg">
          “{quote}”
        </p>
      )}
    </div>
  );
}

export default Quotes;
