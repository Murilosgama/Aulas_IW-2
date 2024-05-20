var express = require('express')
var app = express()

app.get('/',function(req,res){
    res.send('Olá, como está você, seja bem vindo!!')
})

app.listen(0001,function(){
    console.log('Servidor rodando em http://localhost.0001')
})