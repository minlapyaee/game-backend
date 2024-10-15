const User = require("../models/user.model");
const Audit = require("../models/audit.model");

exports.create_user = async (req, res) => {
  const { fullname } = req.body;
  try {
    const user = new User({
      fullname,
    });
    user
      .save()
      .then((data) => {
        return res
          .status(200)
          .send({ message: "success", success: true, data });
      })
      .catch((err) => {
        console.log(err);
        return res
          .status(200)
          .send({ message: "unsuccess", success: false });
      });
  } catch (err) {
    console.log("err", err);
    return res.json({ message: "something went wrong", success: false });
  }
};
exports.create_audit = async (req, res) => {
  const { userID, info, balance } = req.body;
  try {
    const audit = new Audit({
      created_by: userID,
      info
    });
    audit
      .save()
      .then(async (data) => {
          await User.findByIdAndUpdate(userID, {
            balance
          })
          return res
          .status(200)
          .send({ message: "success", success: true, data });
      })
      .catch((err) => {
        console.log(err);
        return res
          .status(200)
          .send({ message: "unsuccess", success: false });
      });
  } catch (err) {
    console.log("err", err);
    return res.json({ message: "something went wrong", success: false });
  }
};

exports.fetch_audit = async (req, res) => {
  try {
    const { userID } = req.query;
    const audit = await Audit.find({ created_by: userID });
    return res
     .status(200)
     .send({ message: "success", success: true, data: audit });
  } catch (err) {
    console.log("err", err);
    return res.json({ message: "something went wrong", success: false });
  }
}

exports.fetch_leaderboard = async (req, res) => {
  try {
    const users = await User.find().sort({ balance: -1 }).limit(10);
    return res
     .status(200)
     .send({ message: "success", success: true, data: users });
  } catch (err) {
    console.log("err", err);
    return res.json({ message: "something went wrong", success: false });
  }
}