const express = require("express");
const currencys = require("./currencys.json");
const app = express();
const PORT = 8084;

app.get("/", (req, res) => {
  res.send(currencys);
});

app.get("/curr", (req, res) => {
  const { min_value } = req.query;
  if (min_value) {
    return res.send(currencys.data.filter((cur) => cur.min_size >= min_value));
  }
  res.send("min_value not found");
});

app.get("/currency/:currencyId", (req, res) => {
  const { currencyId } = req.params;
  const currency = currencys.data.find(
    (curr) => curr.id === currencyId.toUpperCase()
  );
  if (currency) return res.send(currency);
  res.send("currency not found");
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
  console.log(0.01);
});
