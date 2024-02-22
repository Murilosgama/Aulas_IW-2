const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lampada')
const piscar = document.getElementById('piscar')

function estaQuebrada(){
    return lampada.src.indexOf('quebrada') > -1
}

function estaDesligada(){
    return lampada.src.indexOf('desligar') > -1
}

function estaLigada(){
    return lampada.src.indexOf('ligar') > -1
}

function lampadaLigar(){
    if(!estaQuebrada()){
        lampada.src = "img/ligada.jpg"
    }
}

function lampadaDesligar(){
    if(!estaQuebrada()){
        lampada.src = "img/desligada.jpg"
    }
}

function lampadaQuebrada(){
    lampada.src = "img/quebrada.jpg"
}

function lampadaPiscaL(){
    if(!estaLigada(lampada.src = "img/desligada.jpg")){
        lampada.src = "img/ligada.jpg"
    }
}

ligar.addEventListener('click',lampadaLigar)
desligar.addEventListener('click',lampadaDesligar)
piscar.addEventListener('click',lampadaPiscaL)

lampada.addEventListener('mouseover',lampadaLigar)
lampada.addEventListener('mouseleave',lampadaDesligar)

lampada.addEventListener('dblclick', lampadaQuebrada)