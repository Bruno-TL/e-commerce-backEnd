const fs = require("fs");
const express = require("express");
const app = express();

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

module.exports = {
  listar,
  buscarUsuario,
};
