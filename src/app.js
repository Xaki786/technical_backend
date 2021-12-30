const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.json({
    message: "Success",
  });
});

app.get("/", (req, res, next) => {
  res.send("New Hello Deploy");
});
const PORT = process.env.PORT || 5000;
const uri =
  "mongodb+srv://testUser:KhZhNnwYRPJV3jz@technicaldb.dvxpk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("=================================");
    console.log("Connected to the Database");
    console.log("=================================");
  })
  .catch((err) => {
    console.log("=================================");
    console.log("Error", err);
    console.log("=================================");
  });
app.listen(PORT, () => {
  console.log("=================================");
  console.log("Server has started!");
  console.log("=================================");
});
