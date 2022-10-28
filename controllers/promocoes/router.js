const express = require("express");
const route = express.Router();

const promocoes = require("./promocao.js");

route.get("/promocao", (req, res) => {
  res.send(promocoes.promocao());
});

module.exports = route;