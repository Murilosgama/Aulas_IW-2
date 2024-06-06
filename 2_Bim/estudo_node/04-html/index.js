const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send('Olá, como está você, seja bem vindo!!')
})

app.get('/blog',function(req,res){
    res.send('Olá, como está você, seja bem vindo ao nosso blog!!')
})

app.get('/sobre',function(req,res){
    res.send('Olá, saiba tudo sobre nós!!')
})

app.get('/ola/cargo/:nome',function(req,res){
    res.send('Olá, ' + req.params.nome + '. Seu cargo é:' + req.params.cargo)
    //res.send('Olá, sua idade: ' + req.params.idade)
    //req.send(req.params)
})


app.listen(8081,function(){
    console.log('Servidor rodando em http://localhost.8081')
})