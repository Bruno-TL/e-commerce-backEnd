const express = require("express");
const route = express.Router();

const produto = require("./produto");

route.get("/produtos", (req, res) => {
  res.send(produto.listar());
});

route.post('/produtos', (req, res) => {
  res.send(produto.criar(req.body))
  });

module.exports = route;