const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const path = require("path");

// Middlewares globais
app.use(cors()); // Habilita o CORS para permitir requisições do frontend
app.use(express.json());

// Registro de todas as rotas da API centralizadas
app.use("/", routes);

app.use(express.urlencoded({ extended: true }));

// Libera o acesso público à pasta de uploads
app.use(
  "/uploads",
  express.static(path.resolve(__dirname, "..", "public", "uploads")),
);

module.exports = app;
