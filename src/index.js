const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.json({
    message: "Success",
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server has started!");
});
