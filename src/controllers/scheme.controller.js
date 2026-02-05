const Scheme = require("../models/Scheme");

// GET all schemes
exports.getAllSchemes = async (req, res) => {
  try {
    const schemes = await Scheme.findAll();
    res.json(schemes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET recommended schemes (temporary simple logic)
exports.getRecommendations = async (req, res) => {
  try {
    const schemes = await Scheme.findAll();
    res.json(schemes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
