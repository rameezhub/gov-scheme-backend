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

exports.recommendSchemes = async (req, res) => {
  const { age, income, state } = req.query;

  try {
    const schemes = await Scheme.findAll({
      where: {
        minAge: { [Op.lte]: age },
        maxAge: { [Op.gte]: age },
        maxIncome: { [Op.gte]: income },
        states: { [Op.like]: `%${state}%` }
      }
    });

    res.json(schemes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
