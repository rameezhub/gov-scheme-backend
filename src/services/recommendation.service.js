const { Op } = require("sequelize");
const Scheme = require("../models/Scheme");

exports.getEligibleSchemes = async (user) => {
  return await Scheme.findAll({
    where: {
      minAge: { [Op.lte]: user.age },
      maxAge: { [Op.gte]: user.age },
      maxIncome: { [Op.gte]: user.income },
      states: { [Op.like]: `%${user.state}%` },
      categories: { [Op.like]: `%${user.category}%` }
    }
  });
};
