
const { application } = require('express');
const { buscarUsuario } = require('../usuario/usuario');

let carrinho = [
    {
        id: '1',
        produto: 'Addidas',
        usuario: '1',
        quantidade: '2',
    },
    {
        id: '2',
        produto: 'Nike',
        usuario: '2',
        quantidade: '3',
    },
    {
        id: '3',
        produto: 'opanca',
        usuario: '2',
        quantidade: '1',
    },
]

function carrinhoUsuario(idUsuario) {

    if (!idUsuario) {
        return res.send('Usuario não encontrado').status(400);
    }

    let usuario = buscarUsuario(idUsuario);
    let resultado = carrinho.filter(c => c.usuario == usuario.id);
    return resultado;

}
function addCarrinho(idUsuario, dados) {
    if (!idUsuario) {
        return res.send('Não existe esse produto').status(400);
    }
    let identificadores = carrinho.map(item => item.id);
    let novoId = Math.max(...identificadores) + 1;
    let novoItem = {
        id: novoId,
        produto: dados.produto,
        usuario: idUsuario,
        quantidade: dados.quantidade
    }
    carrinho.push(novoItem);

    //como não foi pedido apenas o novo, estaremos enviando todos ao mesmo tempo.
    return (carrinho)
}

// function attCarrinho(){
//     return res.send('Carrinho atualizado').status(200);
// }
module.exports = {
    carrinhoUsuario,
    addCarrinho,
};