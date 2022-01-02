const router = require("express").Router({ mergeParams: true });
const Subscription = require("../models/Subscription");
const { fakeSubscriptionData } = require("../utils/fakeSubscriptionData");
router.get("/", async (req, res, next) => {
  try {
    await Subscription.deleteMany({});
    await Subscription.insertMany(fakeSubscriptionData);
    return res.status(200).json({
      message: "Success",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Error",
    });
  }
});

module.exports = router;
