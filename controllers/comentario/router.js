const route = require('express').Router()

const comentario = require("./comentario");

route.get('/comentario/:IdProduto', (req, res) => {
    res.send(comentario.listar(req.params.IdProduto))
})

module.exports = route;





