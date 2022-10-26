const express = require('express');
const app = express();
const port = 3000;

const produtoRota = require("./controllers/produto/router.js")

app.use(express.json())

app.get('/', (req,res)=> {
    res.send('ta funfando')
})

app.use('/', produtoRota)

app.use((req, res) => {
    res.status(404).send("{message: rota não encontrada}")
  })




app.listen(port,() => {
    console.log(`BackEnd rodando na URL= http://localhost:${port}`)
})