const router = require("express").Router({ mergeParams: true });
const {
  addSubscription,
  searchSubscriptions,
  getAllSubscriptions,
} = require("../controllers/subscription.controller");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/src/public/images/");
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

router.route("/").post(upload.single("picture"), addSubscription);
router.route("/all").get(getAllSubscriptions);
router.route("/search").get(searchSubscriptions);

module.exports = router;
