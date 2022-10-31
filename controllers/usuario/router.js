const router = require("express").Router();
const fs = require("fs");
const usuarioController = require("./usuario.js");

require("dotenv").config();
const jwt = require("jsonwebtoken");

router.get("/usuario", usuarioController.autenticar, (req, res) => {
  // console.log(req.usuario);
  res.status(200).send(usuarioController.listar());
});

router.get("/usuario/:usuarioID", usuarioController.autenticar, (req, res) => {
  // console.log(req.usuario.id);
  if (req.usuario.id !== Number(req.params.usuarioID)) {
    return res
      .status(403)
      .send(
        "Acesso negado. Você está tentando acessar dados de uma conta diferente da sua."
      );
  }

  console.log(req.usuario);
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

  const usuario = usuarios.find(
    (us) => us.email === email && us.senha === senha
  );

  if (!usuario) {
    return res.status(401).send("Email e/ou senha incorretos.");
  }

  // const username = req.body.username;
  // const user = { name: username };

  const accessToken = jwt.sign(usuario, process.env.ACCESS_TOKEN_SECRET);
  res.json({ Authorization: "Bearer" + " " + accessToken });
  // res.send("Bearer" + " " q+ accessToken);
});

module.exports = router;
