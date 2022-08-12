const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.json({ text: "Hello" });
  res.status(300);
});

app.listen(process.env.PORT || 8080);
