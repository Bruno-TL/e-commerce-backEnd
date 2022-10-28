const express = require("express");
const route = express.Router();

const promocao = require("./promocao");
const produto = require("./produto")

route.get("/promocao", (req, res) => {
  res.send(promocao.promocao());
});

route.get("/produtos", (req, res) => {
  res.send(produto.listar());
});

route.post('/produtos', (req, res) => {
  res.send(produto.criar(req.body))
  })





module.exports = route;