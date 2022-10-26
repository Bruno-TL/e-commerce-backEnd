const express = require("express");
const route = express.Router();

const promocao = require("./promocao");

route.get("/promocao", (req, res) => {
  res.send(promocao.promocao());
});





module.exports = route;