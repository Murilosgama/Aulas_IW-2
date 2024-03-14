const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lampada')
const texto = document.getElementById('texto')
const botaoDuplo = document.getElementById('piscar')

function estaQuebrada(){
    return lampada.src.indexOf('quebrada') > -1
}

function lampLigada(){
    if(!estaQuebrada()){
        lampada.src = "img/ligada.jpg"
        texto.innerHTML = "LIGADA"
    }
}

function lampDesligada(){
    if(!estaQuebrada()){
        lampada.src = "img/desligada.jpg"
        texto.innerHTML = "DESLIGADA"
    }
}

function lampQuebrada(){
    lampada.src = "img/quebrada.jpg"
    texto.innerHTML = "QUEBRADA"
}

function estadoInicial(){
    return lampada.src.indexOf('desligada') > -1
}

function botaoLouD(){
    if(!estaQuebrada()){
        if(estadoInicial()){
            lampada.src = "img/ligada.jpg"
            texto.innerHTML = "LIGADA"
        }
        else{
            lampada.src = "img/desligada.jpg"
            texto.innerHTML = "DESLIGADA"
        }
       
    }
}

ligar.addEventListener('click', lampLigada)
desligar.addEventListener('click', lampDesligada)
botaoDuplo.addEventListener('click', botaoLouD)

lampada.addEventListener('mouseover', lampLigada)
lampada.addEventListener('mouseleave', lampDesligada)

lampada.addEventListener('dblclick', lampQuebrada)