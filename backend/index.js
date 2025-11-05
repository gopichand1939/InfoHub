import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/weather", async (req, res) => {
  const city = req.query.city || "Hyderabad";
  try {
    const apiKey = "94c5f76cd5739a6644d5d6298f6a75c6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const { data } = await axios.get(url);
    res.json({
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    });
  } catch (err) {
    res.status(400).json({ error: "City not found or API error" });
  }
});

app.get("/api/convert", async (req, res) => {
  const amount = parseFloat(req.query.amount || "0");
  try {
    const { data } = await axios.get("https://api.frankfurter.app/latest?from=INR&to=USD,EUR");
    const usd = (amount * data.rates.USD).toFixed(2);
    const eur = (amount * data.rates.EUR).toFixed(2);
    res.json({ inr: amount, usd, eur });
  } catch (err) {
    res.status(400).json({ error: "Conversion failed" });
  }
});

const quotes = [
  "Believe you can and you're halfway there.",
  "Don’t watch the clock; do what it does — keep going.",
  "Success is not for the lazy.",
  "Push yourself because no one else is going to do it for you.",
];

app.get("/api/quote", (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
