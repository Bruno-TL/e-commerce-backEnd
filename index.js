const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req,res)=> {
    res.send('ta funfando')
})




app.listen(port,() => {
    console.log(`BackEnd rodando na URL= http://localhost:${port}`)
})