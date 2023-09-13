const { errorHandler } = require("../utils");

exports.home = async (req, res, next) => {
  res.json({ "Authors":"HieuSimpRin","Contact":"https://www.facebook.com/User.HieuSimpRin",});
};
