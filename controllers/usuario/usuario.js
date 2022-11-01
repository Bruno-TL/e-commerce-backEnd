const fs = require("fs");
require("dotenv").config();
const jwt = require("jsonwebtoken");

function listar() {
  return JSON.parse(fs.readFileSync(__dirname + "/db-usuarios.json")).map(
    (usuario) => {
      return {
        id: usuario.id,
        nome: usuario.nome,
        idade: usuario.idade,
        cidade: usuario.cidade,
      };
    }
  );
}

function buscarUsuario(usuarioID) {
  return listar().find((usuario) => usuario.id == Number(usuarioID));
}

function autenticar(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, usuario) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.usuario = usuario;
    next();
  });
}

module.exports = {
  listar,
  buscarUsuario,
  autenticar,
};
