const Scheme = require("../models/Scheme");

// ADD scheme
exports.addScheme = async (req, res) => {
  const scheme = await Scheme.create(req.body);
  res.json({ message: "Scheme added", scheme });
};

// UPDATE scheme
exports.updateScheme = async (req, res) => {
  await Scheme.update(req.body, {
    where: { id: req.params.id }
  });
  res.json({ message: "Scheme updated" });
};

// DELETE scheme
exports.deleteScheme = async (req, res) => {
  await Scheme.destroy({ where: { id: req.params.id } });
  res.json({ message: "Scheme deleted" });
};

// GET all schemes
exports.getAllSchemes = async (req, res) => {
  const schemes = await Scheme.findAll();
  res.json(schemes);
};
