
const { buscarUsuario } = require('../usuario/usuario');

let carrinho = [
    {
        id: '1',
        produto:'Addidas',
        usuario:'1',
        quantidade:'2',
    },
    {
        id: '2',
        produto:'Nike',
        usuario:'2',
        quantidade:'3',
    },
    {
        id: '3',
        produto:'opanca',
        usuario:'2',
        quantidade:'1',
    },
]

function carrinhoUsuario(idUsuario){
    
    if(!idUsuario){
        return res.send('Usuario não encontrado').status(400);
    }

    let usuario = buscarUsuario(idUsuario);
    let resultado = carrinho.filter(c => c.usuario == usuario.id);
    return resultado; 

}
module.exports = {
    carrinhoUsuario,
};