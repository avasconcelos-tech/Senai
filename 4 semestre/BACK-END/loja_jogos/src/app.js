const express = require("express");
const cors = require("cors");
const path = require("path");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const app = express();
const routes = require("./routes");

app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "..", "public")));

// Registro de rotas
app.use(routes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;