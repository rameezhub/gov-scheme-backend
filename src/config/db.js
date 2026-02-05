const { Sequelize } = require("sequelize");

let sequelize;

if (process.env.DATABASE_URL) {
  // ✅ Render / Production (PostgreSQL)
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    logging: false,
  });
} else {
  // ✅ Local (MySQL)
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || "localhost",
      dialect: "mysql",
      logging: false,
    }
  );
}

module.exports = sequelize;
