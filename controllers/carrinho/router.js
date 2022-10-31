const express = require('express');
const router = express.Router();
const controller = require('./carrinho');

router.get('/carrinhos', (req,res)=> {
    res.send(
        controller.carrinhos()
    )
})

router.get('/carrinho/:id', (req, res) => {
    res.send(
        controller.carrinhoUsuario(req.params.id)
    )
    
})

router.post('/carrinho/:id', (req, res) => {
    res.send(
        controller.addCarrinho(req.params.id, req.body)
    );
})

router.put ('/carrinho/:id', (req, res) => {
    res.send(
        controller.attCarrinho(req.params.id, req.body)
    )
})



module.exports = router;
