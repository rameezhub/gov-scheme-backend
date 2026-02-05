const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,

  age: DataTypes.INTEGER,
  gender: DataTypes.STRING,
  income: DataTypes.INTEGER,
  state: DataTypes.STRING,
  profession: DataTypes.STRING,
  category: DataTypes.STRING,
  disability: DataTypes.BOOLEAN,

  role: {
    type: DataTypes.ENUM("USER", "ADMIN"),
    defaultValue: "USER",
  },
});

module.exports = User;
