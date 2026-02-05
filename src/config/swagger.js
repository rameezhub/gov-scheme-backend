const swaggerJsDoc = require("swagger-jsdoc");

module.exports = swaggerJsDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Gov Scheme API",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.js"],
});
