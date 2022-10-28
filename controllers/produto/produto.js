let fs = require('fs');


function listar() {
    return JSON.parse(fs.readFileSync('controllers/produto/produtos.json').toString());
}

function criar(produto) {
    let produtos = listar()
    produtos.push(produto);
    fs.writeFileSync('controllers/produto/produtos.json', JSON.stringify(produtos))
    return listar()
}


module.exports = {
    listar,
    criar,
}