function botao() {
    var botao = prompt('Digite o que deseja comprar: ')
    produto.innerHTML = botao
    var preco = prompt('Digite o valor do produto:')
    valor.innerHTML = preco
    var pagar = prompt('Quanto você paga:')
    if (pagar < preco) {
        alert('O valor pago é menor que o preço do produto.');
        return;
    }

    if (pagar == preco) {
        pag.innerHTML = "0 (Sem troco)";
        return;
    }

    var troco = pagar - preco;
    pag.innerHTML = troco;
    pago.innerHTML = pagar;
}