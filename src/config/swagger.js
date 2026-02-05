const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Gov Scheme API",
      version: "1.0.0",
      description: "Government Scheme Recommendation Backend",
    },
    servers: [
      {
        url: "https://gov-scheme-backend-1.onrender.com",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

module.exports = swaggerJSDoc(options);
