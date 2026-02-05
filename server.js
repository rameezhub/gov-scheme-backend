require("dotenv").config();
const app = require("./src/app");
const sequelize = require("./src/config/db");

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () =>
    console.log("Server running on port", process.env.PORT)
  );
});
