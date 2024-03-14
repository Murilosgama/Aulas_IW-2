var resultado = document.getElementById('resultado')

function pegarNome() {
    var pegarNome = prompt('Digite seu nome: ')
    alert ('Seja bem vindo ' + pegarNome)
    resultado.innerHTML = pegarNome
}