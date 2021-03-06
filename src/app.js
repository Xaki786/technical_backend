const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const subscriptionRoutes = require("./routes/subscription.routes");
const seedRoutes = require("./routes/seed.routes");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static((__dirname, "src/public")));
app.use("/api/subscription", subscriptionRoutes);
app.use("/api/seed-db", seedRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Not Found",
  });
});
const PORT = process.env.PORT || 5000;
const uri =
  "mongodb+srv://testUser:KhZhNnwYRPJV3jz@technicaldb.dvxpk.mongodb.net/test_db?retryWrites=true&w=majority";
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
