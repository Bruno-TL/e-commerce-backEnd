const express = require('express');
const router = express.Router();
const controller = require('./carrinho');

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




module.exports = router;
