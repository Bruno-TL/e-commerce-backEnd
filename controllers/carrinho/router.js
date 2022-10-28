const express = require('express');
const router = express.Router();
const controller = require('./carrinho');

router.get('/carrinho/:id', (req, res) => {
    res.send(
        controller.carrinhoUsuario(req.params.id)
    )
    
})


module.exports = router;
