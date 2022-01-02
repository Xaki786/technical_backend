const mongoose = require("mongoose");
const Subscription = require("./models/Subscription");
const { fakeSubscriptionData } = require("../src/utils/fakeSubscriptionData");
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

const seedData = async () => {
  await Subscription.deleteMany({});
  await Subscription.insertMany(fakeSubscriptionData);
};

seedData().then(() => {
  mongoose.connection.close();
});

