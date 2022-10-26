const fs = require('fs');

function listar(IdDoProduto) {
    return JSON.parse(fs.readFileSync(__dirname + '/comentario.json'))
    .filter(({IdProduto}) => IdProduto === IdDoProduto);
}

module.exports = {
    listar,
}