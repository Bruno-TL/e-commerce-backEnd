const express = require("express");
const app = express();
const port = 3000;

const produtoRota = require("./controllers/produto/router.js");
const comentarioRota = require("./controllers/comentario/router.js");
const usuarioRota = require("./controllers/usuario/router.js");
const promocaoRota = require("./controllers/promocoes/router.js");
const carrinhoRota = require("./controllers/carrinho/router");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Olá. Seja bem-vindo à nossa API.");
});

app.use("/", produtoRota);
app.use("/", comentarioRota);
app.use("/", usuarioRota);
app.use("/", promocaoRota);
app.use("/", carrinhoRota);

app.use((req, res) => {
  res.status(404).send("A rota requerida não existe.");
});

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
});
