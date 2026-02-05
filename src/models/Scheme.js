const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Scheme = sequelize.define("Scheme", {
  name: DataTypes.STRING,
  description: DataTypes.TEXT,

  minAge: DataTypes.INTEGER,
  maxAge: DataTypes.INTEGER,
  maxIncome: DataTypes.INTEGER,

  states: DataTypes.STRING,      // comma-separated
  categories: DataTypes.STRING,  // comma-separated

  benefits: DataTypes.TEXT,
  documentsRequired: DataTypes.TEXT,
});

module.exports = Scheme;
