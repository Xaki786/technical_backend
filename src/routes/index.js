const router = require("express").Router({ mergeParams: true });
const Subscription = require("../models/Subscription");
router.post("/", async (req, res, next) => {
  try {
    const subsForm = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      //  picture (type dropdown),
      gender: req.body.gender,
      dob: req.body.dob,
      profession: req.body.profession,
      shoesize: req.body.shoesize,
      hairColor: req.body.hairColor,
      hairLength: req.body.hairLength,
      braSize: req.body.braSize,
      waist: req.body.waist,
      height: req.body.height,
      weight: req.body.waist,
      castings: req.body.castings,
    };
    const dbSub = await Subscription.create(subsForm);
    return res.status(200).json({ data: dbSub });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

module.exports = router;
