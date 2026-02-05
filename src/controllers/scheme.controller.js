const User = require("../models/User");
const { getEligibleSchemes } = require("../services/recommendation.service");

exports.getRecommendations = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    const schemes = await getEligibleSchemes(user);
    res.json(schemes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
