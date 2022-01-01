const router = require("express").Router({ mergeParams: true });
const Subscription = require("../models/Subscription");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/public/images/");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
let upload = multer({ storage, fileFilter });

router.route("/").post(upload.single("picture"), async (req, res, next) => {
  try {   
    const subsForm = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      picture: "https://technical-backend.herokuapp.com/images/" + req.file.filename,
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
    return res.status(200).json(dbSub);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

router.get("/all", async (req, res, next) => {
  try {
    let query = Object.fromEntries(
      Object.entries(req.query).filter(([_, v]) => v)
    );
    const subs = await Subscription.find({ ...query });
    return res.status(200).json(subs);
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

router.get("/search", async (req, res, next) => {
  try {
    const { search } = req.query;
    let query = Object.fromEntries(
      Object.entries(req.query).filter(([_, v]) => v)
    );
    delete query.search;
    const searchedSubs = await Subscription.find({
      $and: [
        {
          ...query,
        },
        {
          $or: [
            { firstname: { $regex: search, $options: "i" } },
            { lastname: { $regex: search, $options: "i" } },
            { profession: { $regex: search, $options: "i" } },
          ],
        },
      ],
    });
    if (!searchedSubs) {
      res.status(404).json([]);
    }
    return res.status(200).json(searchedSubs);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

module.exports = router;
