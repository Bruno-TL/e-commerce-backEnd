const router = require("express").Router();
const fs = require("fs");
const usuarioController = require("./usuario.js");

require("dotenv").config();
const jwt = require("jsonwebtoken");

router.get("/usuarios", (req, res) => {
  res.status(200).send(usuarioController.listar());
});

router.get("/usuario/:usuarioID", usuarioController.autenticar, (req, res) => {
  if (req.usuario.id !== Number(req.params.usuarioID)) {
    return res
      .status(403)
      .send(
        `${req.usuario.nome}, você está tentando acessar dados de uma conta diferente da sua.`
      );
  }

  let usuario = usuarioController.buscarUsuario(req.params.usuarioID);

  if (!usuario) {
    res.status(404).send("Usuário não encontrado.");
  } else {
    res.status(200).send(usuario);
  }
});

router.post("/login", (req, res) => {
  const usuarios = JSON.parse(fs.readFileSync(__dirname + "/db-usuarios.json"));
  const { email, senha } = req.body;

  if (!email && !senha) {
    return res.status(401).send("Você precisa digitar email e senha.");
  } else if (!email) {
    return res.status(401).send("Você precisa digitar um email.");
  } else if (!senha) {
    return res.status(401).send("Você precisa digitar uma senha.");
  }

  const usuario = usuarios.find(
    (us) => us.email === email && us.senha === senha
  );

  if (!usuario) {
    return res
      .status(401)
      .send("Para se logar, é necessário fornecer email e senha cadastrados.");
  }

  const token = jwt.sign(usuario, process.env.ACCESS_TOKEN_SECRET);
  res.json({ Authorization: "Bearer" + " " + token });
});

module.exports = router;
