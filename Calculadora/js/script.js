function confNum1(){
    var num1 = Number(document.getElementById('num1').value)
}

function confNum2(){
    var num2 = Number(document.getElementById('num2').value)
}

function fazerAdi(){
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)
    var fazerAdi = num1 + num2
    result.innerHTML = fazerAdi
}

function fazerSub(){
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)
    var fazerSub = num1 - num2
    result.innerHTML = fazerSub
}

function fazerMult(){
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)
    var fazerMult = num1 * num2
    result.innerHTML = fazerMult
}

function fazerDiv(){
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)
    var fazerDiv = num1 / num2
    result.innerHTML = fazerDiv
}

function limpar(){
    result.innerHTML = ' '
}