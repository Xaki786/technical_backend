const { removeEmptyValues } = require("../utils/utlis");
const Subscription = require("../models/Subscription");
module.exports = {
  addSubscription: async (req, res, next) => {
    try {
      const subsForm = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        picture: "http://localhost:5000/images/" + req.file.filename,
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
  },
  getAllSubscriptions: async (req, res, next) => {
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
  },
  searchSubscriptions: async (req, res, next) => {
    try {
      const { search } = req.query;
      let query = removeEmptyValues(req.query);
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
  },
};
