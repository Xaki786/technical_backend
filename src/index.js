const express = require("express");

const app = express();

app.use((req, res, next) => {
    res.json({
        message: "Success"
    })
})
app.listen(5000, () => {
  console.log("Server has started!");
});
