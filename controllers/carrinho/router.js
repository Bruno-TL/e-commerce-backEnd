const express = require("express");
const router = express.Router();
const controller = require("./carrinho");

const usuarioController = require("../usuario/usuario");

router.get("/carrinhos", (req, res) => {
  res.send(controller.carrinhos());
});

router.get("/carrinho/:id", usuarioController.autenticar, (req, res) => {
  if (req.usuario.id !== Number(req.params.id)) {
    return res
      .status(403)
      .send(
        "Acesso negado. Você está tentando acessar dados de uma conta diferente da sua."
      );
  }

  res.send(controller.carrinhoUsuario(req.params.id));
});

router.post("/carrinho/:id", (req, res) => {
  res.send(controller.addCarrinho(req.params.id, req.body));
});

router.put("/carrinho/:id", (req, res) => {
  res.send(controller.attCarrinho(req.params.id, req.body));
});

module.exports = router;
