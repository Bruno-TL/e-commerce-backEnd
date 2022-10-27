const router = require("express").Router();
const usuarioController = require("./usuario.js");

router.get("/usuario", (req, res) => {
  res.status(200).send(usuarioController.listar());
});

router.get("/usuario/:usuarioID", (req, res) => {
  let usuario = usuarioController.buscarUsuario(req.params.usuarioID);

  if (!usuario) {
    res.status(404).send("Usuário não encontrado.");
  } else {
    res.status(200).send(usuario);
  }
});

module.exports = router;
