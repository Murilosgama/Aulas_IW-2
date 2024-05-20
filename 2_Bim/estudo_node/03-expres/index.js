var express = require('express')
var app = express()

app.get('/',function(req,res){
    res.send('Olá, como está você, seja bem vindo!!')
})

app.get('/blog',function(req,res){
    res.send('Olá, como está você, seja bem vindo ao nosso blog!!')
})

app.get('/sobre',function(req,res){
    res.send('Olá, saiba tudo sobre nós!!')
})

app.get('/cadastro/:nome',function(req,res){
    res.send('Olá, seu nome: ' + req.params.nome + 'sua idade:' + req.params.idade)
    //res.send('Olá, sua idade: ' + req.params.idade)
    //req.send(req.params)
})


app.listen(8081,function(){
    console.log('Servidor rodando em http://localhost.8081')
})